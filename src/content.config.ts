import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

import { CONFIG } from "config";

export enum PostType {
  dev = "dev",
  musings = "musings",
  life = "life",
}

export enum TilType {
  video = "video",
  article = "article",
  book = "book",
  website = "website",
}

const posts = defineCollection({
  loader: glob({ pattern: "*.md", base: "@content/posts" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    author: z.string().default(CONFIG.author),
    externalUrl: z.string().optional(),
    description: z.string(),
    category: z.nativeEnum(PostType),
    publicationDate: z.coerce.date(),
    public: z.boolean(),
    editDate: z.coerce.date().optional(),
  }),
});

const tils = defineCollection({
  loader: glob({ pattern: "*.md", base: "@content/til" }),
  schema: z.object({
    title: z.string(),
    link: z.string(),
    description: z.string(),
    category: z.nativeEnum(TilType),
    publicationDate: z.coerce.date(),
    public: z.boolean(),
  }),
});

export const collections = {
  posts,
  tils,
};
