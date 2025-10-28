import type { CareerItem } from '@/data/career';

interface CareerCardProps {
	item: CareerItem;
	index: number;
}

export default function CareerCard({ item, index }: CareerCardProps) {
	const isWork = item.type === 'work';

	return (
		<div
			className="card animate-on-scroll"
			style={{
				animationDelay: `${index * 0.1}s`,
			}}
		>
			<div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
				<div className="flex-1">
					<div className="flex items-center gap-2 mb-2">
						<div
							className={`w-3 h-3 rounded-full ${isWork
									? 'bg-primary-400 dark:bg-primary-300'
									: 'bg-shade-600 dark:bg-shade-400'
								}`}
						/>
						<span
							className={`text-xs font-semibold uppercase tracking-wide ${isWork
									? 'text-primary-600 dark:text-primary-300'
									: 'text-shade-600 dark:text-shade-400'
								}`}
						>
							{isWork ? 'Experiencia' : 'Educación'}
						</span>
					</div>
					<h3 className="text-2xl font-bold text-shade-900 dark:text-shade-50 mb-1">
						{item.title}
					</h3>
					<p className="text-lg text-primary-500 dark:text-primary-300 font-semibold mb-1">
						{item.company}
					</p>
				</div>
				<div className="mt-2 md:mt-0">
					<span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-200 px-3 py-1 rounded-full text-sm font-medium">
						{item.period}
					</span>
				</div>
			</div>

			<p className="text-shade-700 dark:text-shade-300 mb-4 leading-relaxed">
				{item.description}
			</p>

			{item.technologies && item.technologies.length > 0 && (
				<div className="flex flex-wrap gap-2">
					{item.technologies.map((tech) => (
						<span
							key={tech}
							className="bg-shade-200 dark:bg-shade-700 text-shade-800 dark:text-shade-200 px-3 py-1 rounded text-sm font-medium"
						>
							{tech}
						</span>
					))}
				</div>
			)}
		</div>
	);
}