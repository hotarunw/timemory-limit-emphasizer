import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";
import packageJson from "./package.json" with { type: "json" };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: "src/main.ts",
      userscript: {
        name: packageJson.name,
        namespace: "https://github.com/hotarunw",
        version: packageJson.version,
        author: "hoarunw",
        description: packageJson.description,
        match: ["https://atcoder.jp/contests/*/tasks/*"],
        license: packageJson.license,
      },
    }),
  ],
});
