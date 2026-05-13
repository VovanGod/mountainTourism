"use client";

import Image from "next/image";
import { getDailyTip } from "@/features/dailyTip/model/dailyTips";
import styles from "./DailyTip.module.scss";

export function DailyTip() {
	const tip = getDailyTip();

	return (
		<aside className={styles.tip}>
			<span className={styles.tipIcon}>
				<Image src="/homePage/tip.svg" alt="" width={24} height={24} />
			</span>
			<div>
				<h2>Совет дня</h2>
				<p>{tip}</p>
			</div>
		</aside>
	);
}
