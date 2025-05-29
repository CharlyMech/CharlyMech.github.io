import { ReactNode } from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CaretLeftIcon } from "@phosphor-icons/react";

interface FloatingNavLayoutProps {
	navigation: ReactNode;
	children: ReactNode;
}

export function FloatingNavBarLayout({ navigation, children }: FloatingNavLayoutProps) {
	const location = useLocation();
	const navigate = useNavigate();
	const [canGoBack, setCanGoBack] = useState(false);

	useEffect(() => {
		if (location.pathname !== "/" && window.history.length > 1) {
			setCanGoBack(true);
		} else {
			setCanGoBack(false);
		}
	}, [location]);

	return (
		<div className="h-dvh">
			<header className="fixed top-0 z-10 w-full pt-[20px]">
				<div className="relative h-[56px] flex items-center justify-center">
					{canGoBack && (
						<button
							onClick={() => navigate(-1)}
							className="absolute left-25 cursor-pointer text-primary"
							aria-label="Go back"
						>
							<CaretLeftIcon size={38} />
						</button>
					)}
					<div className="absolute left-1/2 -translate-x-1/2">
						{navigation}
					</div>
				</div>

			</header>
			<main className="w-full h-full px-[150px] pb-[50px] mt-[80px] overflow-auto">{children}</main>
		</div>
	);
}