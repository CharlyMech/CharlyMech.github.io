import { Card } from "@components/components";

export function Home() {

	return (
		<section className="h-full flex items-center justify-center">
			<div className="grid w-full grid-cols-12 grid-rows-12 gap-4">
				<Card className="flex flex-col justify-center items-center col-span-6 row-span-5">
					<div className="flex flex-row items-baseline gap-4">
						<span className="text-[40px] font-bold text-[var(--color-accent)]">Carlos</span>
						<span className="text-[28px] text-[var(--color-secondary)]">Sánchez Recio</span>
					</div>
					<p className="text-[20px] text-center">Mobile & backend developer</p></Card>
				<Card className="relative flex justify-center items-center col-span-3 row-span-10">
					<img className="z-0"
						src="/src/assets/img/Device 14PM.png" alt="Device Frame" />
					<img width={250} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10" src="/src/assets/img/carlos.png" alt="Carlos' profile photo" />
				</Card>
				<Card className="flex justify-center items-center col-span-1 row-span-2">theme</Card>
				<Card className="flex justify-center items-center col-span-2 row-span-2">lang</Card>
				<Card className="flex justify-center items-center col-span-3 row-span-10">skills accordion</Card>
				<Card className="flex justify-center items-center col-span-3 row-span-7">abour brief</Card>
				<Card className="flex justify-center items-center col-span-3 row-span-3">coming soon 1</Card>
				<Card className="flex justify-center items-center col-span-3 row-span-4">coming soon 2</Card>
				<Card className="flex justify-center items-center col-span-3 row-span-2">social icons</Card>
			</div>
		</section>
	)
}
