"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { hikingApi } from "@/entities/hiking/api/hikingApi";
import {
	getQuizRecommendation,
	quizQuestions,
} from "@/features/routeQuiz/model/routeQuizData";
import { cn } from "@/shared/lib/cn";
import { ChevronRightIcon, HelpCircleIcon, MountainIcon } from "@/shared/ui/icons/Icons";
import styles from "./RouteQuiz.module.scss";

export function RouteQuiz() {
	const [step, setStep] = useState(0);
	const [answers, setAnswers] = useState({});
	const [routes, setRoutes] = useState([]);
	const [error, setError] = useState(null);
	const isFinished = Object.keys(answers).length === quizQuestions.length;
	const currentQuestion = quizQuestions[step];
	const progress = Math.round((Object.keys(answers).length / quizQuestions.length) * 100);

	useEffect(() => {
		const controller = new AbortController();

		async function loadRoutes() {
			try {
				const data = await hikingApi.getRoutes({}, { signal: controller.signal });
				setRoutes(data);
			} catch (requestError) {
				if (requestError.name !== "AbortError") {
					setError(requestError.message);
				}
			}
		}

		loadRoutes();
		return () => controller.abort();
	}, []);

	const selectedAnswers = useMemo(
		() =>
			quizQuestions
				.map((question) =>
					question.answers.find((answer) => answer.id === answers[question.id])
				)
				.filter(Boolean),
		[answers]
	);
	const recommendation = useMemo(
		() => (isFinished ? getQuizRecommendation(selectedAnswers, routes) : null),
		[isFinished, routes, selectedAnswers]
	);

	function selectAnswer(answer) {
		setAnswers((current) => ({
			...current,
			[currentQuestion.id]: answer.id,
		}));

		if (step < quizQuestions.length - 1) {
			setStep((current) => current + 1);
		}
	}

	function resetQuiz() {
		setAnswers({});
		setStep(0);
	}

	return (
		<section className={styles.root}>
			<header className={styles.header}>
				<span className={styles.icon}>
					<HelpCircleIcon size={28} />
				</span>
				<div>
					<h1>Какой маршрут тебе подходит?</h1>
					<p>Ответьте на несколько вопросов, и приложение подберет маршрут из каталога.</p>
				</div>
			</header>

			<div className={styles.progress} aria-label={`Прогресс ${progress}%`}>
				<span style={{ width: `${progress}%` }} />
			</div>

			{!isFinished && currentQuestion && (
				<div className={styles.quiz}>
					<div className={styles.questionMeta}>
						<span>
							Вопрос {step + 1} из {quizQuestions.length}
						</span>
					</div>
					<h2>{currentQuestion.title}</h2>
					<div className={styles.answers}>
						{currentQuestion.answers.map((answer) => (
							<button
								type="button"
								key={answer.id}
								className={cn(
									styles.answer,
									answers[currentQuestion.id] === answer.id && styles.selected
								)}
								onClick={() => selectAnswer(answer)}
							>
								<strong>{answer.label}</strong>
								<span>{answer.description}</span>
							</button>
						))}
					</div>
				</div>
			)}

			{isFinished && recommendation && (
				<div className={styles.result}>
					<div className={styles.resultIcon}>
						<MountainIcon size={34} />
					</div>
					<div className={styles.resultContent}>
						<span>Рекомендация</span>
						<h2>{recommendation.title}</h2>
						<p>{recommendation.reason}</p>
						{error && <p className={styles.error}>{error}</p>}
						<div className={styles.resultActions}>
							{recommendation.route ? (
								<Link href={`/hiking/${recommendation.route.id}`} className={styles.primary}>
									Открыть маршрут
									<ChevronRightIcon size={16} />
								</Link>
							) : (
								<Link href="/hiking" className={styles.primary}>
									Перейти к маршрутам
									<ChevronRightIcon size={16} />
								</Link>
							)}
							<button type="button" className={styles.secondary} onClick={resetQuiz}>
								Пройти заново
							</button>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
