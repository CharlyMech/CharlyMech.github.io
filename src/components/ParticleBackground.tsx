import { useEffect, useRef } from 'react';

interface Particle {
	x: number;
	y: number;
	vx: number;
	vy: number;
	radius: number;
}

export default function ParticleBackground() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const particlesRef = useRef<Particle[]>([]);
	const mouseRef = useRef({ x: 0, y: 0 });
	const animationRef = useRef<number | undefined>(undefined);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		// Set canvas size
		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		resizeCanvas();
		window.addEventListener('resize', resizeCanvas);

		// Initialize particles
		const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
		particlesRef.current = Array.from({ length: particleCount }, () => ({
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			vx: (Math.random() - 0.5) * 0.5,
			vy: (Math.random() - 0.5) * 0.5,
			radius: Math.random() * 2 + 1,
		}));

		// Mouse move handler
		const handleMouseMove = (e: MouseEvent) => {
			mouseRef.current = { x: e.clientX, y: e.clientY };
		};
		window.addEventListener('mousemove', handleMouseMove);

		// Animation loop
		const animate = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Check dark mode
			const isDark = document.documentElement.classList.contains('dark');
			const particleColor = isDark ? 'rgba(163, 163, 163, 0.4)' : 'rgba(88, 88, 88, 0.4)';
			const lineColor = isDark ? 'rgba(163, 163, 163, 0.15)' : 'rgba(88, 88, 88, 0.15)';

			particlesRef.current.forEach((particle) => {
				// Calculate distance from mouse
				const dx = mouseRef.current.x - particle.x;
				const dy = mouseRef.current.y - particle.y;
				const distance = Math.sqrt(dx * dx + dy * dy);
				const maxDistance = 150;

				// Repulsion force from mouse
				if (distance < maxDistance) {
					const force = (maxDistance - distance) / maxDistance;
					const angle = Math.atan2(dy, dx);
					particle.vx -= Math.cos(angle) * force * 0.5;
					particle.vy -= Math.sin(angle) * force * 0.5;
				}

				// Add slight attraction to return to original position
				particle.vx *= 0.95;
				particle.vy *= 0.95;

				// Update position
				particle.x += particle.vx;
				particle.y += particle.vy;

				// Bounce off edges
				if (particle.x < 0 || particle.x > canvas.width) {
					particle.vx *= -1;
					particle.x = Math.max(0, Math.min(canvas.width, particle.x));
				}
				if (particle.y < 0 || particle.y > canvas.height) {
					particle.vy *= -1;
					particle.y = Math.max(0, Math.min(canvas.height, particle.y));
				}

				// Draw particle
				ctx.beginPath();
				ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
				ctx.fillStyle = particleColor;
				ctx.fill();
			});

			// Draw connections between nearby particles
			particlesRef.current.forEach((particle, i) => {
				particlesRef.current.slice(i + 1).forEach((otherParticle) => {
					const dx = particle.x - otherParticle.x;
					const dy = particle.y - otherParticle.y;
					const distance = Math.sqrt(dx * dx + dy * dy);

					if (distance < 120) {
						ctx.beginPath();
						ctx.moveTo(particle.x, particle.y);
						ctx.lineTo(otherParticle.x, otherParticle.y);
						ctx.strokeStyle = lineColor;
						ctx.lineWidth = 1;
						ctx.stroke();
					}
				});
			});

			animationRef.current = requestAnimationFrame(animate);
		};

		animate();

		// Cleanup
		return () => {
			window.removeEventListener('resize', resizeCanvas);
			window.removeEventListener('mousemove', handleMouseMove);
			if (animationRef.current) {
				cancelAnimationFrame(animationRef.current);
			}
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="fixed inset-0 pointer-events-none z-0"
			style={{ background: 'transparent' }}
		/>
	);
}