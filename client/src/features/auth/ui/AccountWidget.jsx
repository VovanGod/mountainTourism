"use client";

import { useState } from "react";
import { useAuth } from "@/features/auth/model/AuthContext";
import { LogOutIcon, UserIcon } from "@/shared/ui/icons/Icons";
import styles from "./AccountWidget.module.scss";

const initialForm = {
	name: "",
	email: "",
	password: "",
};

export function AccountWidget() {
	const { isAuthenticated, isReady, login, logout, register, user } = useAuth();
	const [isOpen, setIsOpen] = useState(false);
	const [mode, setMode] = useState("login");
	const [form, setForm] = useState(initialForm);
	const [message, setMessage] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const showProfile = isReady && isAuthenticated;

	function updateField(event) {
		setForm((current) => ({
			...current,
			[event.target.name]: event.target.value,
		}));
	}

	async function handleSubmit(event) {
		event.preventDefault();
		setIsSubmitting(true);
		setMessage("");

		try {
			if (mode === "register") {
				await register(form);
			} else {
				await login({ email: form.email, password: form.password });
			}

			setForm(initialForm);
			setIsOpen(false);
		} catch (error) {
			setMessage(error.message);
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<div className={styles.root}>
			<button
				type="button"
				className={styles.trigger}
				onClick={() => setIsOpen((current) => !current)}
				title={showProfile ? "Профиль" : "Войти"}
			>
				<UserIcon size={18} />
				<span>{showProfile ? user?.name : "Войти"}</span>
			</button>

			{isOpen && (
				<div className={styles.panel}>
					{showProfile ? (
						<div className={styles.profile}>
							<strong>{user?.name}</strong>
							<span>{user?.email}</span>
							<button type="button" className={styles.logout} onClick={logout}>
								<LogOutIcon size={16} />
								Выйти
							</button>
						</div>
					) : (
						<form className={styles.form} onSubmit={handleSubmit}>
							<div className={styles.modeSwitch}>
								<button
									type="button"
									className={mode === "login" ? styles.activeMode : undefined}
									onClick={() => setMode("login")}
								>
									Вход
								</button>
								<button
									type="button"
									className={mode === "register" ? styles.activeMode : undefined}
									onClick={() => setMode("register")}
								>
									Регистрация
								</button>
							</div>

							{mode === "register" && (
								<label>
									Имя
									<input
										name="name"
										value={form.name}
										onChange={updateField}
										placeholder="Например, Андрей"
										required
									/>
								</label>
							)}

							<label>
								Email
								<input
									name="email"
									type="email"
									value={form.email}
									onChange={updateField}
									placeholder="you@example.com"
									required
								/>
							</label>

							<label>
								Пароль
								<input
									name="password"
									type="password"
									value={form.password}
									onChange={updateField}
									placeholder="Минимум 6 символов"
									required
								/>
							</label>

							{message && <p className={styles.error}>{message}</p>}

							<button type="submit" className={styles.submit} disabled={isSubmitting}>
								{isSubmitting
									? "Проверяем..."
									: mode === "register"
										? "Создать аккаунт"
										: "Войти"}
							</button>
						</form>
					)}
				</div>
			)}
		</div>
	);
}
