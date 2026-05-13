import { AlertIcon } from "@/shared/ui/icons/Icons";
import styles from "./PageState.module.scss";

export function LoadingState({ text = "Загрузка..." }) {
	return (
		<div className={styles.state}>
			<div className={styles.spinner} />
			<p>{text}</p>
		</div>
	);
}

export function ErrorState({ title = "Ошибка", text, action }) {
	return (
		<div className={styles.state}>
			<AlertIcon size={48} className={styles.icon} />
			<h2>{title}</h2>
			{text && <p>{text}</p>}
			{action}
		</div>
	);
}

export function EmptyState({ title, text, icon }) {
	return (
		<div className={styles.state}>
			{icon || <AlertIcon size={56} className={styles.icon} />}
			<h2>{title}</h2>
			{text && <p>{text}</p>}
		</div>
	);
}
