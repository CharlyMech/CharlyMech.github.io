import { useEffect, useState } from 'react';
import type { Technology } from '@/data/technologies';

interface CarouselProps {
	technologies: Technology[];
	category: string;
}

export default function Carousel({ technologies, category }: CarouselProps) {
	const [isPaused, setIsPaused] = useState(false);

	const duplicatedTechs = [...technologies, ...technologies, ...technologies];

	return (
		<div className="mb-12">
			<h3 className="text-2xl font-bold text-primary-400 dark:text-primary-200 mb-4 text-center">
				{category}
			</h3>
			<div className="relative overflow-hidden">
				<div
					className="flex gap-8 animate-carousel hover:pause"
					onMouseEnter={() => setIsPaused(true)}
					onMouseLeave={() => setIsPaused(false)}
					style={{
						animationPlayState: isPaused ? 'paused' : 'running',
						width: `${technologies.length * 200}px`,
					}}
				>
					{duplicatedTechs.map((tech, index) => (
						<div
							key={`${tech.name}-${index}`}
							className="flex-shrink-0 w-32 h-32 flex flex-col items-center justify-center gap-3 bg-shade-100 dark:bg-shade-800 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110 group"
						>
							<div className="w-16 h-16 flex items-center justify-center">
								<img
									src={tech.image}
									alt={tech.name}
									className="w-full h-full object-contain filter group-hover:drop-shadow-lg transition-all duration-300"
									onError={(e) => {
										const target = e.target as HTMLImageElement;
										target.src = `https://via.placeholder.com/64/2e98ff/ffffff?text=${tech.name.charAt(0)}`;
									}}
								/>
							</div>
							<span className="text-sm font-medium text-shade-900 dark:text-shade-50 text-center">
								{tech.name}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}