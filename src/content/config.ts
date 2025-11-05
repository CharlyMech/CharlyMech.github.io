import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		briefDescription: z.string(),
		imageUrl: z.string(),
		stack: z.array(z.string()),
		status: z.enum(["paused", "developing", "finished"]),
		repoUrl: z.string().url(),
		deployUrl: z.string().url().optional(),
	}),
});

const postsCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		briefDescription: z.string(),
		postDate: z.date(),
	}),
});

export const collections = {
	projects: projectsCollection,
	posts: postsCollection,
};
