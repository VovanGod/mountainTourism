"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/shared/lib/cn";
import { ChevronDownIcon } from "@/shared/ui/icons/Icons";
import styles from "./CustomSelect.module.scss";

export function CustomSelect({
	label,
	icon,
	options,
	value,
	onChange,
	disabled = false,
}) {
	const [isOpen, setIsOpen] = useState(false);
	const rootRef = useRef(null);
	const selected = options.find((option) => option.value === value);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (rootRef.current && !rootRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<div className={styles.field}>
			<div className={styles.label}>
				{icon}
				<span>{label}</span>
			</div>

			<div className={styles.selectRoot} ref={rootRef}>
				<button
					type="button"
					className={cn(
						styles.select,
						isOpen && styles.open,
						disabled && styles.disabled
					)}
					onClick={() => !disabled && setIsOpen((current) => !current)}
					disabled={disabled}
				>
					<span className={styles.selectedValue}>{selected?.label}</span>
					<ChevronDownIcon size={16} className={styles.arrow} />
				</button>

				{isOpen && !disabled && (
					<div className={styles.menu}>
						{options.map((option) => (
							<button
								type="button"
								key={option.value}
								className={cn(
									styles.option,
									option.value === value && styles.selectedOption
								)}
								onClick={() => {
									onChange(option.value);
									setIsOpen(false);
								}}
							>
								{option.label}
							</button>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
