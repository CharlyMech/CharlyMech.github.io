import { useEffect } from 'react';
import { useThemeStore } from '@/stores/useThemeStore';
import { Sun, Moon } from '@phosphor-icons/react';

export default function ThemeToggle() {
	const { mode, toggleTheme, initTheme } = useThemeStore();

	// Initialize theme on mount
	useEffect(() => {
		initTheme();
	}, []);

	const isDark = mode === 'dark';

	return (
		<button
			onClick={toggleTheme}
			className="relative flex items-center justify-center w-14 h-14 rounded-full bg-shade-200 dark:bg-shade-700 hover:bg-shade-300 dark:hover:bg-shade-600 transition-all duration-300 shadow-md hover:shadow-lg group"
			aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
			title={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
		>
			{/* Sun Icon */}
			<div
				className={`absolute transition-all duration-500 ${isDark
						? 'opacity-0 scale-0 rotate-180'
						: 'opacity-100 scale-100 rotate-0'
					}`}
			>
				<Sun
					size={24}
					weight="bold"
					className="text-primary-600 dark:text-primary-300 group-hover:scale-110 transition-transform duration-300"
				/>
			</div>

			{/* Moon Icon */}
			<div
				className={`absolute transition-all duration-500 ${isDark
						? 'opacity-100 scale-100 rotate-0'
						: 'opacity-0 scale-0 -rotate-180'
					}`}
			>
				<Moon
					size={24}
					weight="fill"
					className="text-primary-400 dark:text-primary-300 group-hover:scale-110 transition-transform duration-300"
				/>
			</div>

			{/* Ripple effect on hover */}
			<span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary-400/10 dark:bg-primary-300/10" />
		</button>
	);
}