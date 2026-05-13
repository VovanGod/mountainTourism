"use client";

import { RouteQuiz } from "@/features/routeQuiz/ui/RouteQuiz";
import { BottomNav } from "@/shared/ui/BottomNav/BottomNav";
import styles from "./RouteQuizPage.module.scss";

export function RouteQuizPage() {
	return (
		<>
			<main className={styles.page}>
				<div className={styles.container}>
					<RouteQuiz />
				</div>
			</main>
			<BottomNav />
		</>
	);
}
