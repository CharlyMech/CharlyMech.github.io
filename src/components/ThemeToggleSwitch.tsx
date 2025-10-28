import { useEffect } from 'react';
import { useThemeStore } from '@/stores/useThemeStore';
import { Sun, Moon } from '@phosphor-icons/react';

/**
 * Alternative theme toggle component with switch design
 */
export default function ThemeToggleSwitch() {
	const { mode, toggleTheme, initTheme } = useThemeStore();

	// Initialize theme on mount
	useEffect(() => {
		initTheme();
	}, []);

	const isDark = mode === 'dark';

	return (
		<button
			onClick={toggleTheme}
			className="relative inline-flex items-center h-8 w-16 rounded-full bg-shade-300 dark:bg-shade-700 hover:bg-shade-400 dark:hover:bg-shade-600 transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 dark:focus:ring-offset-shade-900"
			role="switch"
			aria-checked={isDark}
			aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
		>
			{/* Track background gradient */}
			<span
				className={`absolute inset-0 rounded-full transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-0'
					}`}
				style={{
					background: 'linear-gradient(to right, #184f88, #2980d9)',
				}}
			/>

			{/* Toggle circle */}
			<span
				className={`relative inline-flex items-center justify-center h-7 w-7 rounded-full bg-white dark:bg-shade-900 shadow-lg transform transition-all duration-300 ${isDark ? 'translate-x-8' : 'translate-x-0.5'
					}`}
			>
				{/* Sun Icon */}
				<Sun
					size={16}
					weight="bold"
					className={`absolute text-primary-600 transition-all duration-300 ${isDark
							? 'opacity-0 scale-0 rotate-180'
							: 'opacity-100 scale-100 rotate-0'
						}`}
				/>

				{/* Moon Icon */}
				<Moon
					size={16}
					weight="fill"
					className={`absolute text-primary-400 transition-all duration-300 ${isDark
							? 'opacity-100 scale-100 rotate-0'
							: 'opacity-0 scale-0 -rotate-180'
						}`}
				/>
			</span>
		</button>
	);
}