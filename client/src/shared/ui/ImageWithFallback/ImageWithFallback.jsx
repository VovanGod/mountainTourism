"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/shared/lib/cn";
import styles from "./ImageWithFallback.module.scss";

export function ImageWithFallback({
	src,
	alt,
	children,
	className,
	imageClassName,
	sizes = "(max-width: 768px) 100vw, 420px",
}) {
	const [hasError, setHasError] = useState(!src);

	if (hasError) {
		return <div className={cn(styles.placeholder, className)}>{children}</div>;
	}

	return (
		<div className={cn(styles.imageBox, className)}>
			<Image
				src={src}
				alt={alt}
				fill
				sizes={sizes}
				className={cn(styles.image, imageClassName)}
				onError={() => setHasError(true)}
			/>
		</div>
	);
}
