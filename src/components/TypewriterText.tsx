import { useState, useEffect } from 'react';

interface TypewriterTextProps {
	texts: string[];
	typingSpeed?: number;
	deletingSpeed?: number;
	pauseAfterTyping?: number;
	pauseAfterDeleting?: number;
	prefix?: string;
	suffix?: string;
	cursorClassName?: string;
	showCursor?: boolean;
	className?: string;
}

export default function TypewriterText({
	texts,
	typingSpeed = 100,
	deletingSpeed = 50,
	pauseAfterTyping = 1000,
	pauseAfterDeleting = 500,
	prefix = '',
	suffix = '',
	className = '',
	cursorClassName = '',
	showCursor = true,
}: TypewriterTextProps) {
	const [currentTextIndex, setCurrentTextIndex] = useState(0);
	const [currentText, setCurrentText] = useState('');
	const [isDeleting, setIsDeleting] = useState(false);
	const [isPaused, setIsPaused] = useState(false);

	useEffect(() => {
		if (texts.length === 0) return;

		const currentFullText = texts[currentTextIndex];

		if (isPaused) {
			const pauseDuration = isDeleting ? pauseAfterDeleting : pauseAfterTyping;
			const pauseTimer = setTimeout(() => {
				setIsPaused(false);
			}, pauseDuration);

			return () => clearTimeout(pauseTimer);
		}

		if (!isDeleting && currentText !== currentFullText) {
			const typingTimer = setTimeout(() => {
				setCurrentText(currentFullText.slice(0, currentText.length + 1));
			}, typingSpeed);

			return () => clearTimeout(typingTimer);
		}

		if (!isDeleting && currentText === currentFullText) {
			setIsPaused(true);
			setIsDeleting(true);
			return;
		}

		if (isDeleting && currentText !== '') {
			const deletingTimer = setTimeout(() => {
				setCurrentText(currentText.slice(0, -1));
			}, deletingSpeed);

			return () => clearTimeout(deletingTimer);
		}

		if (isDeleting && currentText === '') {
			setIsPaused(true);
			setIsDeleting(false);
			setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
			return;
		}
	}, [
		currentText,
		currentTextIndex,
		isDeleting,
		isPaused,
		texts,
		typingSpeed,
		deletingSpeed,
		pauseAfterTyping,
		pauseAfterDeleting,
	]);

	return (
		<span className={className}>
			{prefix}
			<br />
			<span className="inline-block min-w-[1ch]">
				{currentText}
				{showCursor && (
					<span
						className={`inline-block w-[2px] h-[1em] bg-current ml-1 animate-pulse ${cursorClassName}`}
						aria-hidden="true"
					/>
				)}
			</span>
			{suffix}
		</span>
	);
}