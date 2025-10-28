export interface CareerItem {
	title: string;
	company: string;
	period: string;
	description: string;
	type: "work" | "education";
	technologies?: string[];
}

export const careerData: CareerItem[] = [
	// Educación
	{
		title: "Máster en Inteligencia Artificial y Big Data",
		company: "Centro de Formación Especializada",
		period: "2023 - 2024",
		description:
			"Especialización en IA y análisis de grandes volúmenes de datos. Aprendizaje profundo en machine learning, deep learning, procesamiento de lenguaje natural y arquitecturas de big data.",
		type: "education",
		technologies: [
			"Python",
			"TensorFlow",
			"PyTorch",
			"Apache Spark",
			"Pandas",
		],
	},
	{
		title: "Desarrollo de Aplicaciones Multiplataforma",
		company: "Centro de Formación Profesional",
		period: "2021 - 2023",
		description:
			"Formación completa en desarrollo de aplicaciones móviles y multiplataforma. Enfoque en Flutter, React Native y desarrollo de backends escalables.",
		type: "education",
		technologies: ["Flutter", "React Native", "Java", "Kotlin", "Swift"],
	},
	{
		title: "Administración de Sistemas Informáticos en Red",
		company: "Centro de Formación Profesional",
		period: "2019 - 2021",
		description:
			"Fundamentos de redes, sistemas operativos, seguridad informática y administración de servidores. Base sólida en infraestructura IT.",
		type: "education",
		technologies: ["Linux", "Windows Server", "Networking", "Docker", "AWS"],
	},

	// Experiencia Laboral (Mock - ajusta según tu experiencia real)
	{
		title: "Senior Mobile Developer",
		company: "Tech Innovation Labs",
		period: "2023 - Presente",
		description:
			"Desarrollo de aplicaciones móviles multiplataforma utilizando Flutter y React Native. Liderazgo de equipo de desarrollo y arquitectura de aplicaciones escalables para más de 100K usuarios.",
		type: "work",
		technologies: [
			"Flutter",
			"React Native",
			"Firebase",
			"REST APIs",
			"GraphQL",
		],
	},
	{
		title: "Full Stack Developer",
		company: "Digital Solutions Group",
		period: "2022 - 2023",
		description:
			"Desarrollo de aplicaciones web completas con React y Next.js en frontend, y Node.js/NestJS en backend. Implementación de pipelines CI/CD y optimización de rendimiento.",
		type: "work",
		technologies: [
			"React",
			"Next.js",
			"NestJS",
			"PostgreSQL",
			"Docker",
			"AWS",
		],
	},
	{
		title: "Mobile & Backend Developer",
		company: "StartUp Ventures",
		period: "2021 - 2022",
		description:
			"Desarrollo de MVP para startup tecnológica. Creación de aplicación móvil con Flutter y backend con FastAPI. Gestión de bases de datos y despliegue en cloud.",
		type: "work",
		technologies: ["Flutter", "Python", "FastAPI", "MongoDB", "Firebase"],
	},
	{
		title: "Junior Developer & Systems Administrator",
		company: "IT Services Company",
		period: "2020 - 2021",
		description:
			"Administración de sistemas Linux y Windows Server. Desarrollo de scripts de automatización y mantenimiento de infraestructura de red.",
		type: "work",
		technologies: ["Linux", "Bash", "Python", "Docker", "Nginx"],
	},
];

// Ordenar por fecha (más reciente primero)
export const sortedCareerData = [...careerData].sort((a, b) => {
	const yearA = parseInt(a.period.split("-")[1]?.trim() || a.period);
	const yearB = parseInt(b.period.split("-")[1]?.trim() || b.period);
	return yearB - yearA;
});

export const workExperience = careerData.filter((item) => item.type === "work");
export const education = careerData.filter((item) => item.type === "education");
