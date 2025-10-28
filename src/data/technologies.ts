export interface Technology {
	name: string;
	image: string;
}

export interface TechCategory {
	category: string;
	technologies: Technology[];
}

export const techStack: TechCategory[] = [
	{
		category: "Languages de programación",
		technologies: [
			{
				name: "Kotlin",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
			},
			{
				name: "Dart",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
			},
			{
				name: "TypeScript",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
			},
			{
				name: "JavaScript",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
			},
			{
				name: "Python",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
			},
			{
				name: "Java",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
			},
			{
				name: "PHP",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
			},
			{
				name: "HTML5",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
			},
			{
				name: "CSS3",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
			},
		],
	},
	{
		category: "Desarrollo de aplicaciones móviles",
		technologies: [
			{
				name: "Flutter",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
			},
			{
				name: "React Native Expo",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
			},
			{
				name: "Android",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
			},
			{
				name: "Android",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetpackcompose/jetpackcompose-original.svg",
			},
			{
				name: "iOS",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
			},
		],
	},
	{
		category: "Desarrollo web",
		technologies: [
			{
				name: "React",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
			},
			{
				name: "Next.js",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
			},
			{
				name: "Angular",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
			},

			{
				name: "Tailwind CSS",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
			},
			{
				name: "Astro",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/astro/astro-original.svg",
			},
			{
				name: "NestJS",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg",
			},
			{
				name: "FastAPI",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
			},
		],
	},

	{
		category: "Data Science",
		technologies: [
			{
				name: "Pandas",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
			},
			{
				name: "TensorFlow",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
			},
			{
				name: "Scikit-learn",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
			},
			{
				name: "Apache Spark",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg",
			},
			{
				name: "Jupyter",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
			},
			{
				name: "Pandas",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
			},
			{
				name: "Numpy",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
			},
			{
				name: "Matplotlib",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
			},
		],
	},
	{
		category: "Otras herramientas y bases de datos",
		technologies: [
			{
				name: "Git",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
			},
			{
				name: "GitHub",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
			},
			{
				name: "Docker",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
			},
			{
				name: "Azure",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
			},
			{
				name: "Linux",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
			},
			{
				name: "Firebase",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg",
			},
			{
				name: "Supabase",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
			},
			{
				name: "PostgreSQL",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
			},
			{
				name: "MongoDB",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
			},
			{
				name: "MySQL",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
			},
			{
				name: "Proxmox",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/proxmox/proxmox-original.svg",
			},
			{
				name: "Hadoop",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg",
			},
			{
				name: "Kafka",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kafka/kafka-original.svg",
			},
			{
				name: "Nginx",
				image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
			},
		],
	},
];
