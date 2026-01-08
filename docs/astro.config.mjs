// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";

const isDev = process.env.NODE_ENV === "development";
const demosUrl = isDev ? "http://localhost:5184" : "/demos/";

// https://astro.build/config
export default defineConfig({
  site: "https://izumisy.github.io",
  base: "/seizen-ui",
  vite: {
    resolve: {
      alias: {
        "@components": "/src/components",
      },
    },
  },
  integrations: [
    starlight({
      title: "Seizen DataTable",
      customCss: ["./src/styles/custom.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/izumisy/seizen-ui",
        },
      ],
      sidebar: [
        { label: "Getting Started", slug: "getting-started" },
        {
          label: "Features",
          autogenerate: { directory: "features" },
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "Demos",
          link: demosUrl,
          attrs: { target: "_blank" },
        },
      ],
    }),
    react(),
  ],
});
