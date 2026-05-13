"use client";

import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import styles from "./Toast.module.scss";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
	const [items, setItems] = useState([]);

	const removeToast = useCallback((id) => {
		setItems((current) => current.filter((item) => item.id !== id));
	}, []);

	const showToast = useCallback((message, variant = "info") => {
		const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
		setItems((current) => [
			...current,
			{
				id,
				message,
				variant,
			},
		]);
		return id;
	}, []);

	const value = useMemo(
		() => ({
			removeToast,
			showToast,
		}),
		[removeToast, showToast]
	);

	return (
		<ToastContext.Provider value={value}>
			{children}
			<div className={styles.viewport} aria-live="polite" aria-atomic="true">
				{items.map((item) => (
					<ToastItem key={item.id} item={item} onClose={removeToast} />
				))}
			</div>
		</ToastContext.Provider>
	);
}

function ToastItem({ item, onClose }) {
	useEffect(() => {
		const timeout = window.setTimeout(() => onClose(item.id), 3200);
		return () => window.clearTimeout(timeout);
	}, [item.id, onClose]);

	return (
		<button
			type="button"
			className={`${styles.toast} ${styles[item.variant] || styles.info}`}
			onClick={() => onClose(item.id)}
		>
			{item.message}
		</button>
	);
}

export function useToast() {
	const context = useContext(ToastContext);

	if (!context) {
		throw new Error("useToast must be used inside ToastProvider");
	}

	return context;
}
