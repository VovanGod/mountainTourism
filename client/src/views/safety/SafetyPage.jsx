"use client";

import { SafetyGuide } from "@/features/safetyGuide/ui/SafetyGuide";
import { BottomNav } from "@/shared/ui/BottomNav/BottomNav";
import { ShieldIcon } from "@/shared/ui/icons/Icons";
import styles from "./SafetyPage.module.scss";

export function SafetyPage() {
	return (
		<>
			<main className={styles.page}>
				<div className="page-container">
					<header className={styles.header}>
						<h1>Безопасность</h1>
					</header>

					<section className={styles.emergency}>
						<span className={styles.icon}>
							<ShieldIcon size={24} />
						</span>
						<div>
							<h2>Экстренная помощь - 112</h2>
							<p>
								В критической ситуации сразу звоните в МЧС. Сообщите точное
								местоположение, ориентиры, характер происшествия, количество
								участников и состояние пострадавших.
							</p>
						</div>
					</section>

					<SafetyGuide />
				</div>
			</main>
			<BottomNav activeItem="safety" />
		</>
	);
}
