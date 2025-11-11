export interface CareerItem {
	title: string;
	company: string;
	period: string;
	description: string;
	type: "work" | "education";
	technologies?: string[];
}

export const education: CareerItem[] = [
	{
		title: "Máster en Inteligencia Artificial y Big Data",
		company:
			"Institut d'Ensenyaments a Distància de les Illes Balears (IEDIB)",
		period: "2024 - 2025",
		description:
			"Especialización en IA y análisis de grandes volúmenes de datos. Aprendizaje profundo en machine learning, deep learning, procesamiento de lenguaje natural y arquitecturas de big data.",
		type: "education",
		technologies: [
			"Python",
			"Pandas",
			"Matplotlib",
			"TensorFlow",
			"PySpark",
			"Azure",
			"MongoDB",
			"Hive",
			"Hadoop",
			"DataBricks",
			"PowerBI",
		],
	},
	{
		title: "Desarrollo de Aplicaciones Multiplataforma",
		company: "CESUR Mallorca",
		period: "2022 - 2024",
		description:
			"Formación completa en desarrollo de aplicaciones móviles y multiplataforma. Enfoque en desarrollo Android y fundamentos de programación orientada a objetos, acceso a datos, servicios, protocolos, arquitectura de aplicaciones, etc.",
		type: "education",
		technologies: [
			"Java",
			"Kotlin",
			"Android",
			"Maven",
			"Gradle",
			"SpringBoot",
			"Git",
			"Github",
		],
	},
	{
		title: "Administración de Sistemas Informáticos en Red",
		company: "IES Sa Colomina",
		period: "2020 - 2022",
		description:
			"Fundamentos de la computación, redes informáticas, sistemas operativos, bases de datos, seguridad informática y administración de servidores. Base sólida en infraestructura IT.",
		type: "education",
		technologies: ["Linux", "Windows Server", "Networking", "PHP", "MySQL"],
	},
];

export const workExperience: CareerItem[] = [
	{
		title: "Desarrollador Freelance Móvil y FullStack",
		company: "Freelance",
		period: "Sept 2025 - Presente",
		description:
			"Desarrollo de aplicaciones móviles y web mediante tecnologías modernas y actuales, buscando siempre la mejor experiencia para el usuario y la eficiencia en el desarrollo.",
		type: "work",
		technologies: [
			"Next.js",
			"React",
			"Astro.js",
			"React native Expo",
			"Flutter",
			"Docker",
			"Git",
			"Github",
		],
	},
	{
		title: "Full Stack Developer",
		company: "IT2B",
		period: "Ene 2025 - Oct 2025",
		description:
			"Desarrollo de aplicaciones web completas Angular (versiones 14 a 19 incluyendo migraciones) en frontend, y PHP Symfony en backend. Desarrollo de BackOffice enfocado a turismo y desarrollos personalizados para clientes.",
		type: "work",
		technologies: [
			"Angular",
			"PHP",
			"Symfony",
			"Git",
			"Github",
			"REST APIs",
			"AWS",
		],
	},
	{
		title: "Full Stack Developer (Prácticas)",
		company: "Omniaccess",
		period: "Mar 2025 - Jun 2025",
		description:
			"Desarrollo de soluciones de conectividad para navíos. Centrado en el mantenimiento y desarrollo de APIs con NestJs/NodeJs (un poco de frontend con Vue.js). Desarrollo de POC App con Flutter para clientes de conectividad de Starlik como proyecto final de prácticas. Uso de paquetes como BLoC, Dio HTTP client, Syncfusion charts, DTOs, go_router, etc.",
		type: "work",
		technologies: [
			"Vue.js",
			"NestJS",
			"REST APIs",
			"Git",
			"Gitlab",
			"Docker",
			"Flutter",
		],
	},
];
