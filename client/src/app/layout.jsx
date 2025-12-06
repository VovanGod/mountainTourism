import { Montserrat, Open_Sans } from "next/font/google";
import "./../styles/main.scss";

const montserrat = Montserrat({
	variable: "--font-title",
	subsets: ["latin"],
});

const open_Sans = Open_Sans({
	variable: "--font-main",
	subsets: ["latin"],
});

export const metadata = {
	title: "Горный гид Краснодарского края",
	description:
		"Путеводитель по горным маршрутам, безопасность в походах, информация о животных и первая помощь в Краснодарском крае",
	keywords: "горный туризм, походы, Краснодарский край, безопасность, маршруты",
};

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<body className={`${montserrat.variable} ${open_Sans.variable}`}>
				{children}
			</body>
		</html>
	);
}
