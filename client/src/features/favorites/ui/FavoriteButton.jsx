"use client";

import { useState } from "react";
import { useAuth } from "@/features/auth/model/AuthContext";
import { useFavorites } from "@/features/favorites/model/FavoritesContext";
import { cn } from "@/shared/lib/cn";
import { useToast } from "@/shared/ui/Toast/ToastContext";
import { HeartIcon } from "@/shared/ui/icons/Icons";
import styles from "./FavoriteButton.module.scss";

export function FavoriteButton({ id, type }) {
	const { isAuthenticated } = useAuth();
	const { isAnimalFavorite, isRouteFavorite, toggleAnimal, toggleRoute } = useFavorites();
	const { showToast } = useToast();
	const [isBusy, setIsBusy] = useState(false);
	const isFavorite =
		type === "animal" ? isAnimalFavorite(id) : isRouteFavorite(id);

	async function handleClick() {
		if (!isAuthenticated) {
			showToast("Войдите в аккаунт, чтобы сохранить в избранное.", "info");
			return;
		}

		setIsBusy(true);

		try {
			await (type === "animal" ? toggleAnimal(id) : toggleRoute(id));
			showToast(
				isFavorite ? "Удалено из избранного." : "Добавлено в избранное.",
				"success"
			);
		} catch (error) {
			showToast(error.message, "error");
		} finally {
			setIsBusy(false);
		}
	}

	return (
		<button
			type="button"
			className={cn(styles.button, isFavorite && styles.active)}
			onClick={handleClick}
			disabled={isBusy}
		>
			<HeartIcon size={18} />
			{isFavorite ? "В избранном" : "В избранное"}
		</button>
	);
}
