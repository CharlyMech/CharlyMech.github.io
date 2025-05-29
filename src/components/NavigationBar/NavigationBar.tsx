import { ArchiveIcon, HouseSimpleIcon, UserCircleIcon } from "@phosphor-icons/react";
import styles from "./NavigationBar.module.css";
import { ChatCircleDotsIcon } from "@phosphor-icons/react/dist/ssr";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

export function NavigationBar() {
	const location = useLocation();

	const navItems = [
		{ label: "Home", icon: HouseSimpleIcon, to: "/" },
		{ label: "About", icon: UserCircleIcon, to: "/about" },
		{ label: "Work", icon: ArchiveIcon, to: "/work" },
		{ label: "Contact", icon: ChatCircleDotsIcon, to: "/contact" },
	];

	return (
		<nav className={styles.navbar}>
			{navItems.map((item) => {
				const isActive = location.pathname === item.to;
				const Icon = item.icon;

				return (
					<Link key={item.to} to={item.to} className={clsx(
						"flex flex-row items-center justify-baseline gap-[5px] cursor-pointer text-[20px] transition-colors duration-200",
						isActive
							? "text-[var(--color-primary)] font-bold"
							: "text-[var(--color-muted)] hover:text-[var(--color-primary)]"
					)}>
						<Icon size={20} weight={isActive ? "fill" : "regular"} />
						<span className='text-[18px]'>{item.label}</span>
					</Link>
				);
			})}
		</nav>
	);
}