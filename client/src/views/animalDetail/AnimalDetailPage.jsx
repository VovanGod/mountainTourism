"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { animalsApi } from "@/entities/animal/api/animalsApi";
import { AnimalDetails } from "@/entities/animal/ui/AnimalDetails/AnimalDetails";
import { BottomNav } from "@/shared/ui/BottomNav/BottomNav";
import { ErrorState, LoadingState } from "@/shared/ui/PageState/PageState";
import styles from "./AnimalDetailPage.module.scss";

export function AnimalDetailPage() {
	const { id } = useParams();
	const [animal, setAnimal] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const controller = new AbortController();

		async function loadAnimal() {
			setIsLoading(true);
			setError(null);

			try {
				const data = await animalsApi.getAnimal(id, {
					signal: controller.signal,
				});
				setAnimal(data);
			} catch (requestError) {
				if (requestError.name !== "AbortError") {
					setError(requestError.message);
					setAnimal(null);
				}
			} finally {
				if (!controller.signal.aborted) {
					setIsLoading(false);
				}
			}
		}

		if (id) {
			loadAnimal();
		}

		return () => controller.abort();
	}, [id]);

	return (
		<>
			<main className={styles.page}>
				<div className={styles.container}>
					{isLoading && <LoadingState text="Загрузка данных..." />}

					{!isLoading && error && (
						<ErrorState
							text={error}
							action={
								<Link href="/animals" className={styles.action}>
									Вернуться к списку
								</Link>
							}
						/>
					)}

					{!isLoading && !error && animal && <AnimalDetails animal={animal} />}
				</div>
			</main>
			<BottomNav activeItem="animals" />
		</>
	);
}
