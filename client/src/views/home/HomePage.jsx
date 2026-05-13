import Image from "next/image";
import { DailyTip } from "@/features/dailyTip/ui/DailyTip";
import { EmergencyWidget } from "@/features/emergency/ui/EmergencyWidget";
import { WeatherWidget } from "@/features/weather/ui/WeatherWidget";
import { HomeNavigation } from "@/widgets/homeNavigation/ui/HomeNavigation";
import styles from "./HomePage.module.scss";

export function HomePage() {
	return (
		<main className={styles.page}>
			<Image
				src="/homePage/mountains.jpg"
				alt=""
				fill
				priority
				sizes="100vw"
				className={styles.background}
			/>

			<section className={styles.hero}>
				<h1>Горный туризм</h1>
				<p className={styles.subtitle}>Краснодарский край и Западный Кавказ</p>

				<div className={styles.infoGrid}>
					<WeatherWidget />
					<EmergencyWidget />
				</div>

				<HomeNavigation />
				<DailyTip />
			</section>
		</main>
	);
}
