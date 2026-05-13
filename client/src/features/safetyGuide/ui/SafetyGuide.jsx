"use client";

import { useState } from "react";
import { cn } from "@/shared/lib/cn";
import { safetyTabs } from "@/entities/safety/model/safetyData";
import {
	ChevronDownIcon,
	HomeShapeIcon,
	ShieldIcon,
} from "./SafetyGuideIcons";
import styles from "./SafetyGuide.module.scss";

export function SafetyGuide() {
	const [activeTabId, setActiveTabId] = useState(safetyTabs[0].id);
	const [openBlockId, setOpenBlockId] = useState(null);
	const activeTab = safetyTabs.find((tab) => tab.id === activeTabId) || safetyTabs[0];

	return (
		<div className={styles.root}>
			<div className={styles.tabs}>
				{safetyTabs.map((tab) => (
					<button
						key={tab.id}
						type="button"
						className={cn(
							styles.tab,
							activeTabId === tab.id && styles.active,
							styles[tab.theme]
						)}
						onClick={() => {
							setActiveTabId(tab.id);
							setOpenBlockId(null);
						}}
					>
						{tab.id === "first-aid" ? <ShieldIcon /> : <HomeShapeIcon />}
						{tab.label}
					</button>
				))}
			</div>

			<div className={styles.list}>
				{activeTab.items.map((item) => (
					<section
						key={item.id}
						className={cn(styles.block, openBlockId === item.id && styles.open)}
					>
						<button
							type="button"
							className={styles.blockHeader}
							onClick={() =>
								setOpenBlockId((current) =>
									current === item.id ? null : item.id
								)
							}
						>
							<span className={styles.blockIcon}>
								{activeTab.id === "first-aid" ? <ShieldIcon /> : <HomeShapeIcon />}
							</span>
							<span className={styles.blockText}>
								<span className={styles.blockTitle}>{item.title}</span>
								<span className={styles.blockDescription}>{item.description}</span>
							</span>
							<ChevronDownIcon className={styles.chevron} />
						</button>

						{openBlockId === item.id && (
							<div className={styles.content}>
								{item.content.map((line) => {
									const isImportant =
										line.startsWith("Важно:") || line.startsWith("Совет:");

									return (
										<p
											key={line}
											className={isImportant ? styles.important : styles.line}
										>
											{line}
										</p>
									);
								})}
							</div>
						)}
					</section>
				))}
			</div>
		</div>
	);
}
