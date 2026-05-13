"use client";

import { saveOfflineRoute } from "@/features/offlineRoutes/model/offlineRoutesStorage";
import { useToast } from "@/shared/ui/Toast/ToastContext";
import { SaveIcon } from "@/shared/ui/icons/Icons";
import styles from "./OfflineRouteActions.module.scss";

export function OfflineRouteActions({ route }) {
	const { showToast } = useToast();

	function handleSave() {
		saveOfflineRoute(route);
		showToast("Памятка сохранена на этом устройстве.", "success");
	}

	return (
		<button type="button" className={styles.button} onClick={handleSave}>
			<SaveIcon size={18} />
			Сохранить офлайн
		</button>
	);
}
