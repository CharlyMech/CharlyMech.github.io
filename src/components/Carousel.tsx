import { useEffect, useCallback } from 'react';
import type { CSSProperties } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import type { Technology } from '@/data/technologies';

interface CarouselProps {
	technologies: Technology[];
	category: string;
	index?: number;
}

export default function Carousel({ technologies, category, index = 0 }: CarouselProps) {

	// Duplicamos los elementos para asegurar un loop suave
	const duplicatedItems = technologies.length < 5
		? [...technologies, ...technologies, ...technologies, ...technologies]
		: [...technologies, ...technologies, ...technologies];

	const speeds = [0.55, 0.3, 0.4, 0.5, 0.65];
	const speed = speeds[index % speeds.length];

	const [emblaRef, emblaApi] = useEmblaCarousel(
		{
			loop: true,
			align: 'start',
			containScroll: false,
			startIndex: index % 3,
			slidesToScroll: 1,
		},
		[
			AutoScroll({
				playOnInit: false,
				speed: speed,
				stopOnInteraction: false,
				stopOnMouseEnter: true,
				stopOnFocusIn: false,
			})
		]
	);

	useEffect(() => {
		if (!emblaApi) return;

		const startDelay = index * 500;

		const timer = setTimeout(() => {
			const autoScroll = emblaApi?.plugins()?.autoScroll;
			if (autoScroll) {
				autoScroll.play();
			}
		}, startDelay);

		return () => {
			clearTimeout(timer);
		};
	}, [emblaApi, index]);

	const containerStyle: CSSProperties = {
		marginBottom: 'var(--spacing-lg)',
	};

	const titleStyle: CSSProperties = {
		fontSize: 'var(--text-xl)',
		fontWeight: 700,
		color: 'var(--color-primary-400)',
		marginBottom: 'var(--spacing-md)',
		textAlign: 'left',
	};

	const emblaViewportStyle: CSSProperties = {
		overflow: 'hidden',
		padding: 'var(--padding-sm) 0',
		WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 80px, black calc(100% - 80px), transparent 100%)',
		maskImage: 'linear-gradient(to right, transparent 0%, black 80px, black calc(100% - 80px), transparent 100%)',
	};

	const emblaContainerStyle: CSSProperties = {
		display: 'flex',
		gap: 'var(--spacing-md)',
		touchAction: 'pan-y',
		paddingLeft: 'var(--spacing-xl)',
		paddingRight: 'var(--spacing-xl)',
	};

	const emblaSlideStyle: CSSProperties = {
		flex: '0 0 auto',
		minWidth: 0,
	};

	const cardStyle: CSSProperties = {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 'var(--spacing-sm)',
		backgroundColor: 'var(--color-shade-800)',
		borderRadius: 'var(--rounded-sm)',
		padding: 'var(--padding-md)',
		minWidth: '180px',
		maxWidth: '220px',
		width: '200px',
		boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
		transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
		cursor: 'pointer',
	};

	const iconStyle: CSSProperties = {
		width: '48px',
		height: '48px',
		flexShrink: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 'var(--padding-xs)',
	};

	const imgStyle: CSSProperties = {
		width: '100%',
		height: '100%',
		borderRadius: 'var(--rounded-sm)',
		objectFit: 'contain',
	};

	const nameStyle: CSSProperties = {
		fontSize: 'var(--text-sm)',
		fontWeight: 600,
		color: 'var(--color-shade-100)',
		lineHeight: 1.3,
		flex: 1,
	};

	return (
		<>
			<style>{`
				@media (max-width: 640px) {
					.carousel-container {
						gap: var(--spacing-sm) !important;
					}
					.carousel-card {
						min-width: 150px !important;
						max-width: 180px !important;
						width: 165px !important;
					}
					.carousel-icon {
						width: 40px !important;
						height: 40px !important;
					}
				}
			`}</style>

			<div style={containerStyle}>
				<h3 style={titleStyle}>
					{category}
				</h3>

				<div
					style={emblaViewportStyle}
					ref={emblaRef}
				>
					<div className="carousel-container" style={emblaContainerStyle}>
						{duplicatedItems.map((tech, idx) => (
							<div
								key={`${tech.name}-${idx}`}
								style={emblaSlideStyle}
							>
								<div className="carousel-card" style={cardStyle}>
									<div className="carousel-icon" style={iconStyle}>
										<img
											src={tech.image}
											alt={tech.name}
											style={imgStyle}
											loading="lazy"
											onError={(e) => {
												const target = e.target as HTMLImageElement;
												target.src = `https://via.placeholder.com/48/2e98ff/ffffff?text=${tech.name.charAt(0)}`;
											}}
										/>
									</div>
									<span style={nameStyle}>
										{tech.name}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}