import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Taylor Nguyen",
  DESCRIPTION: "Welcome to my LAN party",
  EMAIL: "me@tsnguyen.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};


export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://x.com/PoopSlinger34",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/fyrworx4",
  },
  {
    NAME: "Website",
    HREF: "https://tsnguyen.com",
  },
];
