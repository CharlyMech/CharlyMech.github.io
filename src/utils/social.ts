/**
 * Social Links Configuration
 */
import {
	GithubLogoIcon,
	LinkedinLogoIcon,
	EnvelopeSimpleIcon,
	type Icon,
} from "@phosphor-icons/react";

export interface SocialItem {
	label: string;
	href: string;
	icon: Icon;
	target?: string;
}

export const socialItems: SocialItem[] = [
	{
		label: "GitHub",
		href: "https://github.com/charlymech",
		icon: GithubLogoIcon,
		target: "_blank",
	},
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/carlos-sanchezrecio-dev/",
		icon: LinkedinLogoIcon,
		target: "_blank",
	},
	{
		label: "Email",
		href: "mailto:sanchezreciocarlos99@outlook.com",
		icon: EnvelopeSimpleIcon,
		target: "_self",
	},
];
