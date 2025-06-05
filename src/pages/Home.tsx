import { Card } from "@components/components";
import { CloudArrowDownIcon, GithubLogoIcon, LinktreeLogoIcon } from "@phosphor-icons/react";
import { AtIcon, LinkedinLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function Home() {

	return (
		<section className="h-full max-w-[1200px] mx-auto flex items-center justify-center">
			<div className="grid w-full grid-cols-12 grid-rows-12 gap-4">
				<Card className="flex flex-col justify-center items-center col-span-6 row-span-5">
					<div className="flex flex-row items-baseline gap-4">
						<span className="text-[40px] font-bold text-[var(--color-accent)]">Carlos</span>
						<span className="text-[28px] text-[var(--color-secondary)]">Sánchez Recio</span>
					</div>
					<p className="text-[20px] text-center">Mobile & backend developer</p></Card>
				<div className="relative flex justify-center items-center col-span-3 row-span-10">
					<img className="z-0"
						src="/assets/img/Device 14PM.png" alt="Device Frame" />
					<img width={250} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" src="/assets/img/carlos.png" alt="Carlos' profile photo" />
				</div>
				<Card className="flex justify-center items-center col-span-1 row-span-2">theme</Card>
				<Card className="flex justify-center items-center col-span-2 row-span-2">lang</Card>
				<Card className="flex justify-center items-center col-span-3 row-span-10">skills accordion</Card>
				<Card className="flex justify-center items-center col-span-3 row-span-7">abour brief</Card>
				<Card className="flex justify-center items-center col-span-3 row-span-3">coming soon 1</Card>
				<Card className="flex justify-center items-center col-span-3 row-span-4">coming soon 2</Card>
				<div className="flex justify-between items-center col-span-3 row-span-2 w-full h-full">
					<a
						href="https://github.com/CharlyMech"
						target="_blank"
						rel="noopener noreferrer"
						className="group relative text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors duration-300"
					>
						<GithubLogoIcon size={36} />
						<span className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 h-[2px] w-full scale-x-0 origin-center bg-current transition-transform duration-300 group-hover:scale-x-100"></span>
					</a>
					<a
						href="https://www.linkedin.com/in/carlos-sanchezrecio-dev/"
						target="_blank"
						rel="noopener noreferrer"
						className="group relative text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors duration-300"
					>
						<LinkedinLogoIcon size={36} />
						<span className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 h-[2px] w-full scale-x-0 origin-center bg-current transition-transform duration-300 group-hover:scale-x-100"></span>
					</a>
					<a
						href="https://linktr.ee/charlymech"
						target="_blank"
						rel="noopener noreferrer"
						className="group relative text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors duration-300"
					>
						<LinktreeLogoIcon size={36} />
						<span className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 h-[2px] w-full scale-x-0 origin-center bg-current transition-transform duration-300 group-hover:scale-x-100"></span>
					</a>
					<a
						href="mailto:sanchezreciocarlos99@gmail.com"
						className="group relative text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors duration-300"
					>
						<AtIcon size={36} />
						<span className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 h-[2px] w-full scale-x-0 origin-center bg-current transition-transform duration-300 group-hover:scale-x-100"></span>
					</a>
					<button
						onClick={() => {
							const link = document.createElement('a');
							link.href = '/assets/cv/en.pdf'; // default by now, // TODO -> locale or current lang
							link.download = 'carlos_sanchezrecio.pdf'; // default by now, // TODO -> locale or current lang
							link.click();
						}}
						className="group relative text-[var(--color-muted)] hover:text-[var(--color-text)] cursor-pointer transition-colors duration-300"
					>
						<CloudArrowDownIcon size={36} />
						<span className="absolute left-1/2 -translate-x-1/2 -bottom-1.5 h-[2px] w-full scale-x-0 origin-center bg-current transition-transform duration-300 group-hover:scale-x-100"></span>
					</button>
				</div>
			</div>
		</section>
	)
}
