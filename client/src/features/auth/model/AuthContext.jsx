"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { authApi } from "@/features/auth/api/authApi";

const STORAGE_KEY = "mountain-tourism-session";
const emptySession = { token: null, user: null };
const AuthContext = createContext(null);

function readStoredSession() {
	if (typeof window === "undefined") {
		return emptySession;
	}

	try {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		return stored ? JSON.parse(stored) : emptySession;
	} catch {
		return emptySession;
	}
}

function saveSession(session) {
	if (typeof window === "undefined") {
		return;
	}

	if (!session?.token) {
		window.localStorage.removeItem(STORAGE_KEY);
		return;
	}

	window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
}

export function AuthProvider({ children }) {
	const [session, setSession] = useState(emptySession);
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		let isCancelled = false;

		queueMicrotask(() => {
			const storedSession = readStoredSession();

			if (isCancelled) {
				return;
			}

			if (!storedSession.token) {
				setIsReady(true);
				return;
			}

			setSession(storedSession);
			setIsReady(true);

			authApi
				.me(storedSession.token)
				.then(({ user }) => {
					if (isCancelled) {
						return;
					}

					const freshSession = { token: storedSession.token, user };
					setSession(freshSession);
					saveSession(freshSession);
				})
				.catch(() => {
					if (isCancelled) {
						return;
					}

					setSession(emptySession);
					saveSession(null);
				});
		});

		return () => {
			isCancelled = true;
		};
	}, []);

	async function register(payload) {
		const nextSession = await authApi.register(payload);
		setSession(nextSession);
		saveSession(nextSession);
		return nextSession;
	}

	async function login(payload) {
		const nextSession = await authApi.login(payload);
		setSession(nextSession);
		saveSession(nextSession);
		return nextSession;
	}

	function logout() {
		setSession(emptySession);
		saveSession(null);
	}

	const value = useMemo(
		() => ({
			isAuthenticated: Boolean(session.token),
			isReady,
			login,
			logout,
			register,
			token: session.token,
			user: session.user,
		}),
		[isReady, session]
	);

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error("useAuth must be used inside AuthProvider");
	}

	return context;
}
