import Link from "next/link";
import { AnimalTypeBadge, DangerBadge } from "@/entities/animal/ui/AnimalBadges/AnimalBadges";
import { FavoriteButton } from "@/features/favorites/ui/FavoriteButton";
import { ImageWithFallback } from "@/shared/ui/ImageWithFallback/ImageWithFallback";
import {
	AlertIcon,
	BagIcon,
	BookIcon,
	CheckIcon,
	ChevronLeftIcon,
	ClockIcon,
	InfoIcon,
	MapPinIcon,
	PawIcon,
	SunIcon,
} from "@/shared/ui/icons/Icons";
import styles from "./AnimalDetails.module.scss";

function StatCard({ icon, value, label }) {
	return (
		<div className={styles.statCard}>
			<div className={styles.statIcon}>{icon}</div>
			<div>
				<div className={styles.statLabel}>{label}</div>
				<div className={styles.statValue}>{value}</div>
			</div>
		</div>
	);
}

function Section({ title, subtitle, icon, children }) {
	return (
		<section className={styles.section}>
			<h2>
				{icon}
				{title}
			</h2>
			{subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
			{children}
		</section>
	);
}

export function AnimalDetails({ animal }) {
	return (
		<article className={styles.root}>
			<div className={styles.backNav}>
				<Link href="/animals" className={styles.backButton} title="Назад к списку">
					<ChevronLeftIcon size={22} />
				</Link>
			</div>

			<header className={styles.header}>
				<h1>{animal.title}</h1>
				{animal.scientificName && <em>{animal.scientificName}</em>}
				<div className={styles.headerMeta}>
					<DangerBadge level={animal.dangerLevel} large />
					<AnimalTypeBadge type={animal.animalType} large />
					{animal.region && (
						<span className={styles.region}>
							<MapPinIcon size={16} />
							{animal.region}
						</span>
					)}
				</div>
				<FavoriteButton id={animal.id} type="animal" />
			</header>

			<ImageWithFallback
				src={animal.imageUrl}
				alt={animal.title}
				className={styles.heroImage}
				sizes="(max-width: 900px) 100vw, 960px"
			>
				<PawIcon size={72} />
			</ImageWithFallback>

			<div className={styles.statsGrid}>
				{animal.seasonActivity && (
					<StatCard
						icon={<SunIcon size={22} />}
						label="Сезон активности"
						value={animal.seasonActivity}
					/>
				)}
				{animal.habitat && (
					<StatCard
						icon={<MapPinIcon size={22} />}
						label="Место обитания"
						value={animal.habitat}
					/>
				)}
				{animal.diet && (
					<StatCard icon={<BagIcon size={22} />} label="Питание" value={animal.diet} />
				)}
				{animal.conservationStatus && (
					<StatCard
						icon={<InfoIcon size={22} />}
						label="Статус"
						value={animal.conservationStatus}
					/>
				)}
			</div>

			{animal.fullDescription && (
				<Section title="Описание" icon={<BookIcon size={20} />}>
					<p className={styles.text}>{animal.fullDescription}</p>
				</Section>
			)}

			{animal.behavior && (
				<Section
					title="Поведение"
					subtitle="Как ведет себя в природе"
					icon={<PawIcon size={20} />}
				>
					<p className={styles.text}>{animal.behavior}</p>
				</Section>
			)}

			{animal.meetingActions.length > 0 && (
				<Section
					title="Действия при встрече"
					subtitle="Что делать, если встретили"
					icon={<ClockIcon size={20} />}
				>
					<div className={styles.numberedList}>
						{animal.meetingActions.map((action, index) => (
							<div key={action} className={styles.numberedItem}>
								<span>{index + 1}</span>
								<p>{action}</p>
							</div>
						))}
					</div>
				</Section>
			)}

			{animal.interestingFacts.length > 0 && (
				<Section title="Интересные факты" icon={<InfoIcon size={20} />}>
					<div className={styles.chipGrid}>
						{animal.interestingFacts.map((fact) => (
							<div key={fact} className={styles.chip}>
								<CheckIcon size={18} />
								{fact}
							</div>
						))}
					</div>
				</Section>
			)}

			<div className={styles.important}>
				<AlertIcon size={26} />
				<div>
					<h2>Важно</h2>
					<p>
						Это справочная информация. В критической ситуации звоните в МЧС по
						номеру 112 и следуйте инструкциям диспетчера.
					</p>
				</div>
			</div>
		</article>
	);
}
