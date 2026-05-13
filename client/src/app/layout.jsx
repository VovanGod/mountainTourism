import "@/shared/styles/globals.scss";
import { Providers } from "./providers";

export const metadata = {
	title: "Горный гид Краснодарского края",
	description:
		"Путеводитель по горным маршрутам, безопасности в походах и дикой природе Краснодарского края",
	keywords:
		"горный туризм, походы, Краснодарский край, маршруты, безопасность, животные",
};

export default function RootLayout({ children }) {
	return (
		<html lang="ru">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
