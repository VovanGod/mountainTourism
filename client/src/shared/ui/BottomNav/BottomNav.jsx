import Link from "next/link";
import { cn } from "@/shared/lib/cn";
import {
	CompassIcon,
	HeartIcon,
	HomeIcon,
	MountainIcon,
	PawIcon,
	ShieldIcon,
} from "@/shared/ui/icons/Icons";
import styles from "./BottomNav.module.scss";

const navItems = [
	{
		id: "home",
		href: "/",
		icon: HomeIcon,
		label: "Главная",
	},
	{
		id: "hiking",
		href: "/hiking",
		icon: MountainIcon,
		label: "Маршруты",
	},
	{
		id: "animals",
		href: "/animals",
		icon: PawIcon,
		label: "Животные",
	},
	{
		id: "favorites",
		href: "/favorites",
		icon: HeartIcon,
		label: "Избранное",
	},
	{
		id: "offline",
		href: "/offline",
		icon: CompassIcon,
		label: "Офлайн",
	},
	{
		id: "safety",
		href: "/safety",
		icon: ShieldIcon,
		label: "Безопасность",
	},
];

export function BottomNav({ activeItem }) {
	return (
		<nav className={styles.nav} aria-label="Основная навигация">
			<ul className={styles.list}>
				{navItems.map((item) => {
					const Icon = item.icon;

					return (
						<li key={item.id}>
							<Link
								href={item.href}
								className={cn(styles.link, activeItem === item.id && styles.active)}
							>
								<Icon size={22} className={styles.icon} />
								<span>{item.label}</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
