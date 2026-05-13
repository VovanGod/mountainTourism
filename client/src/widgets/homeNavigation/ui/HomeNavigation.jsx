import Link from "next/link";
import {
	ChevronRightIcon,
	CompassIcon,
	HeartIcon,
	HelpCircleIcon,
	MountainIcon,
	PawIcon,
	ShieldIcon,
} from "@/shared/ui/icons/Icons";
import styles from "./HomeNavigation.module.scss";

const navItems = [
	{
		title: "Маршруты",
		description: "Горные тропы, GPX-треки и офлайн-памятки",
		icon: MountainIcon,
		href: "/hiking",
		variant: "routes",
	},
	{
		title: "Квиз",
		description: "Подбор маршрута по уровню, времени и интересам",
		icon: HelpCircleIcon,
		href: "/quiz",
		variant: "quiz",
	},
	{
		title: "Животные",
		description: "Поведение, факты и действия при встрече",
		icon: PawIcon,
		href: "/animals",
		variant: "animals",
	},
	{
		title: "Избранное",
		description: "Маршруты и животные, сохраненные в аккаунте",
		icon: HeartIcon,
		href: "/favorites",
		variant: "animals",
	},
	{
		title: "Офлайн",
		description: "Сохраненные памятки без связи",
		icon: CompassIcon,
		href: "/offline",
		variant: "routes",
	},
	{
		title: "Безопасность",
		description: "Первая помощь, лагерь, погода и связь",
		icon: ShieldIcon,
		href: "/safety",
		variant: "safety",
	},
];

export function HomeNavigation() {
	return (
		<nav className={styles.nav} aria-label="Разделы приложения">
			{navItems.map((item) => {
				const Icon = item.icon;

				return (
					<Link
						key={item.href}
						href={item.href}
						className={`${styles.card} ${styles[item.variant]}`}
					>
						<span className={styles.icon}>
							<Icon size={32} />
						</span>
						<span className={styles.content}>
							<strong>{item.title}</strong>
							<span>{item.description}</span>
						</span>
						<span className={styles.action}>
							Перейти
							<ChevronRightIcon size={16} />
						</span>
					</Link>
				);
			})}
		</nav>
	);
}
