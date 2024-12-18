import { defineCollection, z } from "astro:content";

export enum BlogType {
  dev = "dev",
  musings = "musings",
  life = "life",
  til = "til",
  case_study = "case_study",
}

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    url: z.string().optional(),
    description: z.string(),
    category: z.nativeEnum(BlogType),
    publicationDate: z.coerce.date(),
    draft: z.boolean(),
    editDate: z.coerce.date().optional(),
    preview: z.boolean().optional(),
    tags: z.array(z.string()),
    readingTime: z.number(),
  }),
});

export const collections = {
  blog,
};
