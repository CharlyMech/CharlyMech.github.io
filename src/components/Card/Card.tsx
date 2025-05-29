import { ReactNode } from "react";
import styles from "./Card.module.css"
import clsx from "clsx";

interface CardProps {
	children: ReactNode;
	className?: string;
	width?: string;
	height?: string;
}

export function Card({ children, className = "", width = "w-full", height = "h-auto" }: CardProps) {
	return (
		<div className={clsx(styles.card, width, height, className)}>
			{children}
		</div>
	);
}