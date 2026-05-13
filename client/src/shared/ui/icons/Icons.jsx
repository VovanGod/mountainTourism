function SvgIcon({ children, size = 20, className, title }) {
	return (
		<svg
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden={title ? undefined : true}
			role={title ? "img" : undefined}
		>
			{title && <title>{title}</title>}
			{children}
		</svg>
	);
}

export function MountainIcon(props) {
	return (
		<SvgIcon {...props}>
			<path d="m8 3 4 8 5-5 5 15H2L8 3z" />
		</SvgIcon>
	);
}

export function HomeIcon(props) {
	return (
		<SvgIcon {...props}>
			<path d="m3 10 9-7 9 7" />
			<path d="M5 10v10h14V10" />
			<path d="M9 20v-6h6v6" />
		</SvgIcon>
	);
}

export function CompassIcon(props) {
	return (
		<SvgIcon {...props}>
			<circle cx="12" cy="12" r="10" />
			<polygon points="16 8 14 14 8 16 10 10 16 8" />
		</SvgIcon>
	);
}

export function ClockIcon(props) {
	return (
		<SvgIcon {...props}>
			<circle cx="12" cy="12" r="10" />
			<polyline points="12 6 12 12 16 14" />
		</SvgIcon>
	);
}

export function DistanceIcon(props) {
	return (
		<SvgIcon {...props}>
			<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
			<path d="m14.5 12.5 2-2" />
			<path d="m11.5 9.5 2-2" />
			<path d="m8.5 6.5 2-2" />
			<path d="m17.5 15.5 2-2" />
		</SvgIcon>
	);
}

export function ElevationIcon(props) {
	return (
		<SvgIcon {...props}>
			<path d="M12 2v20" />
			<path d="m17 5-5-3-5 3" />
			<path d="m17 19-5 3-5-3" />
			<path d="M2 12h20" />
		</SvgIcon>
	);
}

export function MapPinIcon(props) {
	return (
		<SvgIcon {...props}>
			<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
			<circle cx="12" cy="10" r="3" />
		</SvgIcon>
	);
}

export function SunIcon(props) {
	return (
		<SvgIcon {...props}>
			<path d="M12 2v8" />
			<path d="m4.93 10.93 1.41 1.41" />
			<path d="M2 18h2" />
			<path d="M20 18h2" />
			<path d="m19.07 10.93-1.41 1.41" />
			<path d="M22 22H2" />
			<path d="m16 6-4 4-4-4" />
			<path d="M16 18a4 4 0 0 0-8 0" />
		</SvgIcon>
	);
}

export function InfoIcon(props) {
	return (
		<SvgIcon {...props}>
			<circle cx="12" cy="12" r="10" />
			<line x1="12" y1="16" x2="12" y2="12" />
			<line x1="12" y1="8" x2="12.01" y2="8" />
		</SvgIcon>
	);
}

export function HelpCircleIcon(props) {
	return (
		<SvgIcon {...props}>
			<circle cx="12" cy="12" r="10" />
			<path d="M9.1 9a3 3 0 1 1 5.8 1c-.5 1-1.5 1.4-2.2 2.2-.5.5-.7 1-.7 1.8" />
			<line x1="12" y1="17" x2="12.01" y2="17" />
		</SvgIcon>
	);
}

export function AlertIcon(props) {
	return (
		<SvgIcon {...props}>
			<circle cx="12" cy="12" r="10" />
			<line x1="12" y1="8" x2="12" y2="12" />
			<line x1="12" y1="16" x2="12.01" y2="16" />
		</SvgIcon>
	);
}

export function ShieldIcon(props) {
	return (
		<SvgIcon {...props}>
			<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
			<path d="m9 12 2 2 4-4" />
		</SvgIcon>
	);
}

export function ChevronDownIcon(props) {
	return (
		<SvgIcon {...props}>
			<polyline points="6 9 12 15 18 9" />
		</SvgIcon>
	);
}

export function ChevronRightIcon(props) {
	return (
		<SvgIcon {...props}>
			<polyline points="9 18 15 12 9 6" />
		</SvgIcon>
	);
}

export function ChevronLeftIcon(props) {
	return (
		<SvgIcon {...props}>
			<polyline points="15 18 9 12 15 6" />
		</SvgIcon>
	);
}

export function TrashIcon(props) {
	return (
		<SvgIcon {...props}>
			<path d="M3 6h18" />
			<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
			<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
			<line x1="10" y1="11" x2="10" y2="17" />
			<line x1="14" y1="11" x2="14" y2="17" />
		</SvgIcon>
	);
}

export function BookIcon(props) {
	return (
		<SvgIcon {...props}>
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
		</SvgIcon>
	);
}

export function BagIcon(props) {
	return (
		<SvgIcon {...props}>
			<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
			<path d="M3 6h18" />
			<path d="M16 10a4 4 0 0 1-8 0" />
		</SvgIcon>
	);
}

export function CheckIcon(props) {
	return (
		<SvgIcon {...props}>
			<polyline points="20 6 9 17 4 12" />
		</SvgIcon>
	);
}

export function PawIcon(props) {
	return (
		<SvgIcon {...props}>
			<circle cx="5.5" cy="9.5" r="2.5" />
			<circle cx="12" cy="5.5" r="2.5" />
			<circle cx="18.5" cy="9.5" r="2.5" />
			<path d="M8 16.5c0-2.5 2-4.5 4-4.5s4 2 4 4.5c0 2-1.7 3.5-4 3.5s-4-1.5-4-3.5z" />
		</SvgIcon>
	);
}

export function HeartIcon(props) {
	return (
		<SvgIcon {...props}>
			<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
		</SvgIcon>
	);
}

export function StarIcon(props) {
	return (
		<SvgIcon {...props}>
			<polygon points="12 2 15 8.5 22 9.3 16.8 14 18.2 21 12 17.4 5.8 21 7.2 14 2 9.3 9 8.5 12 2" />
		</SvgIcon>
	);
}

export function DownloadIcon(props) {
	return (
		<SvgIcon {...props}>
			<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
			<polyline points="7 10 12 15 17 10" />
			<line x1="12" y1="15" x2="12" y2="3" />
		</SvgIcon>
	);
}

export function CloudIcon(props) {
	return (
		<SvgIcon {...props}>
			<path d="M17.5 19H8a6 6 0 1 1 5.7-7.9A4.5 4.5 0 1 1 17.5 19z" />
		</SvgIcon>
	);
}

export function PhoneIcon(props) {
	return (
		<SvgIcon {...props}>
			<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9z" />
		</SvgIcon>
	);
}

export function SaveIcon(props) {
	return (
		<SvgIcon {...props}>
			<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
			<polyline points="17 21 17 13 7 13 7 21" />
			<polyline points="7 3 7 8 15 8" />
		</SvgIcon>
	);
}

export function UserIcon(props) {
	return (
		<SvgIcon {...props}>
			<path d="M20 21a8 8 0 0 0-16 0" />
			<circle cx="12" cy="7" r="4" />
		</SvgIcon>
	);
}

export function LogOutIcon(props) {
	return (
		<SvgIcon {...props}>
			<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
			<polyline points="16 17 21 12 16 7" />
			<line x1="21" y1="12" x2="9" y2="12" />
		</SvgIcon>
	);
}
