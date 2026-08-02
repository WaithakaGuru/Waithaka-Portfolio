import { defineConfig } from "vite";
import { imagetools } from "vite-imagetools";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    imagetools({
      // Shorthand: `import x from "./img.jpg?responsive"` instead of
      // repeating the full directive string everywhere it's used.
      defaultDirectives: (url: URL) =>
        url.searchParams.has("responsive")
          ? new URLSearchParams({
              format: "avif;webp;jpg",
              w: "320;480;800;1200;1600",
              as: "picture",
            })
          : new URLSearchParams(),
    }),
  ],
  server: { host: true },
});
