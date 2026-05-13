"use client";

import { AuthProvider } from "@/features/auth/model/AuthContext";
import { AccountWidget } from "@/features/auth/ui/AccountWidget";
import { FavoritesProvider } from "@/features/favorites/model/FavoritesContext";
import { ToastProvider } from "@/shared/ui/Toast/ToastContext";

export function Providers({ children }) {
	return (
		<ToastProvider>
			<AuthProvider>
				<FavoritesProvider>
					<AccountWidget />
					{children}
				</FavoritesProvider>
			</AuthProvider>
		</ToastProvider>
	);
}
