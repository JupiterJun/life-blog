import { createContentLoader } from "vitepress";

interface Post {
  title: string;
  url: string;
  date: {
    time: number;
    string: string;
  };
  author: string | undefined;
  location: string | undefined;
  excerpt: string | undefined;
  tags: string[];
}

export default createContentLoader("posts/*.md", {
  excerpt: true,
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url: url.substring(4),
        excerpt: frontmatter.description || excerpt,
        date: formatDate(frontmatter.date),
        author: frontmatter.author || "",
        location: frontmatter.location || "",
        tags: frontmatter.tags || [],
      }))
      .sort((a, b) => b.date.time - a.date.time);
  },
});

function formatDate(raw: string): Post["date"] {
  const date = new Date(raw);
  date.setUTCHours(12);
  return {
    time: +date,
    string: date.toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };
}
