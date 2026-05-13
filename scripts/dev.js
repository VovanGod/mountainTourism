const { spawn } = require("child_process");

const npmCommand = "npm";

const processes = [
	{
		name: "server",
		args: ["--prefix", "server", "run", "dev"],
		color: "\x1b[36m",
	},
	{
		name: "client",
		args: ["--prefix", "client", "run", "dev"],
		color: "\x1b[32m",
	},
];

const reset = "\x1b[0m";
const children = new Set();
let isShuttingDown = false;

function prefixOutput(name, color, stream) {
	let buffer = "";

	stream.on("data", (chunk) => {
		buffer += chunk.toString();
		const lines = buffer.split(/\r?\n/);
		buffer = lines.pop() || "";

		lines.forEach((line) => {
			if (line.trim()) {
				console.log(`${color}[${name}]${reset} ${line}`);
			}
		});
	});
}

function shutdown(exitCode = 0) {
	if (isShuttingDown) {
		return;
	}

	isShuttingDown = true;

	children.forEach((child) => {
		if (!child.killed) {
			if (process.platform === "win32") {
				spawn("taskkill", ["/pid", String(child.pid), "/t", "/f"], {
					stdio: "ignore",
				});
			} else {
				child.kill("SIGTERM");
			}
		}
	});

	setTimeout(() => process.exit(exitCode), 300);
}

processes.forEach((processConfig) => {
	const child = spawn(npmCommand, processConfig.args, {
		cwd: process.cwd(),
		env: { ...process.env, FORCE_COLOR: "1" },
		shell: process.platform === "win32",
		stdio: ["inherit", "pipe", "pipe"],
	});

	children.add(child);
	prefixOutput(processConfig.name, processConfig.color, child.stdout);
	prefixOutput(processConfig.name, processConfig.color, child.stderr);

	child.on("exit", (code) => {
		children.delete(child);

		if (!isShuttingDown && code !== 0) {
			console.error(`[${processConfig.name}] exited with code ${code}`);
			shutdown(code || 1);
		}
	});
});

process.on("SIGINT", () => shutdown(0));
process.on("SIGTERM", () => shutdown(0));
