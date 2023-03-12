import { defineConfig } from "vite";
import { fileURLToPath, URL } from "url";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "~",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src/assets/", import.meta.url)),
      },
      {
        find: "@images",
        replacement: fileURLToPath(
          new URL("./src/assets/images/", import.meta.url)
        ),
      },
    ],
  },
});
