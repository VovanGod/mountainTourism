"use client";

import { useEffect, useState } from "react";
import { reviewsApi } from "@/features/routeReviews/api/reviewsApi";
import { useAuth } from "@/features/auth/model/AuthContext";
import { StarIcon } from "@/shared/ui/icons/Icons";
import styles from "./RouteReviews.module.scss";

const initialForm = {
	rating: "5",
	text: "",
};

function formatDate(value) {
	if (!value) {
		return "";
	}

	return new Intl.DateTimeFormat("ru-RU", {
		day: "2-digit",
		month: "long",
		year: "numeric",
	}).format(new Date(value));
}

export function RouteReviews({ routeId }) {
	const { isAuthenticated, token, user } = useAuth();
	const [reviews, setReviews] = useState([]);
	const [summary, setSummary] = useState({ average_rating: 0, reviews_count: 0 });
	const [form, setForm] = useState(initialForm);
	const [message, setMessage] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		const controller = new AbortController();

		setIsLoading(true);
		reviewsApi
			.getRouteReviews(routeId, { signal: controller.signal })
			.then((data) => {
				setReviews(data.reviews || []);
				setSummary(data.summary || { average_rating: 0, reviews_count: 0 });
			})
			.catch((error) => {
				if (error.name !== "AbortError") {
					setMessage(error.message);
				}
			})
			.finally(() => {
				if (!controller.signal.aborted) {
					setIsLoading(false);
				}
			});

		return () => controller.abort();
	}, [routeId]);

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
			const data = await reviewsApi.saveRouteReview(
				routeId,
				{ rating: Number(form.rating), text: form.text },
				token
			);
			setReviews(data.reviews || []);
			setSummary(data.summary || { average_rating: 0, reviews_count: 0 });
			setForm(initialForm);
			setMessage("Отзыв сохранен. Спасибо, теперь маршрут выглядит живее.");
		} catch (error) {
			setMessage(error.message);
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<section className={styles.root}>
			<header className={styles.header}>
				<div>
					<h2>Отзывы о маршруте</h2>
					<p>Оценки помогают другим туристам понять реальную сложность и состояние тропы.</p>
				</div>
				<div className={styles.rating}>
					<StarIcon size={22} />
					<strong>{Number(summary.average_rating || 0).toFixed(1)}</strong>
					<span>{summary.reviews_count || 0} отзывов</span>
				</div>
			</header>

			{isAuthenticated ? (
				<form className={styles.form} onSubmit={handleSubmit}>
					<label>
						Оценка
						<select name="rating" value={form.rating} onChange={updateField}>
							<option value="5">5 - отлично</option>
							<option value="4">4 - хорошо</option>
							<option value="3">3 - нормально</option>
							<option value="2">2 - сложно</option>
							<option value="1">1 - плохо</option>
						</select>
					</label>
					<label>
						Отзыв
						<textarea
							name="text"
							value={form.text}
							onChange={updateField}
							placeholder={`${user?.name || "Турист"}, расскажите, что важно знать перед выходом`}
							rows={4}
							required
						/>
					</label>
					<button type="submit" disabled={isSubmitting}>
						{isSubmitting ? "Сохраняем..." : "Оставить отзыв"}
					</button>
				</form>
			) : (
				<p className={styles.authNote}>Войдите в аккаунт, чтобы оставить отзыв и оценку.</p>
			)}

			{message && <p className={styles.message}>{message}</p>}

			<div className={styles.list}>
				{isLoading && <p className={styles.empty}>Загрузка отзывов...</p>}
				{!isLoading && reviews.length === 0 && (
					<p className={styles.empty}>Пока отзывов нет. Первый походный отчет будет самым полезным.</p>
				)}
				{!isLoading &&
					reviews.map((review) => (
						<article key={review.id} className={styles.review}>
							<div className={styles.reviewTop}>
								<strong>{review.user_name}</strong>
								<span>{formatDate(review.updated_at || review.created_at)}</span>
							</div>
							<div className={styles.stars}>
								{Array.from({ length: 5 }).map((_, index) => (
									<StarIcon
										key={index}
										size={16}
										className={index < review.rating ? styles.filled : undefined}
									/>
								))}
							</div>
							<p>{review.text}</p>
						</article>
					))}
			</div>
		</section>
	);
}
