"use client";

import { useEffect, useState } from "react";
import { emergencyApi } from "@/features/emergency/api/emergencyApi";
import { PhoneIcon } from "@/shared/ui/icons/Icons";
import styles from "./EmergencyWidget.module.scss";

const fallback = {
	serviceName: "МЧС России",
	phone: "112",
	label: "Единый номер экстренных служб",
	instructions: [
		"Назовите точное место и ориентиры.",
		"Сообщите состояние группы.",
	],
};

export function EmergencyWidget() {
	const [data, setData] = useState(fallback);

	useEffect(() => {
		const controller = new AbortController();

		emergencyApi
			.getStatus({ signal: controller.signal })
			.then(setData)
			.catch(() => setData(fallback));

		return () => controller.abort();
	}, []);

	return (
		<a href={`tel:${data.phone}`} className={styles.card}>
			<div className={styles.header}>
				<span className={styles.icon}>
					<PhoneIcon size={24} />
				</span>
				<span>{data.serviceName}</span>
			</div>
			<strong className={styles.phone}>{data.phone}</strong>
			<p>{data.label}</p>
			<ul>
				{(data.instructions || []).slice(0, 2).map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</a>
	);
}
