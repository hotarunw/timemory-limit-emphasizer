import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";
import packageJson from "./package.json" assert { type: "json" };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    monkey({
      entry: "src/main.ts",
      userscript: {
        name: packageJson.name,
        namespace: "https://github.com/hotarupoyo",
        version: packageJson.version,
        author: "hotarupoyo",
        description: "AtCoderで実行時間制限が2 secでないとき、メモリ制限が1024 MBでないときに強調する",
        match: ["https://atcoder.jp/contests/*/tasks/*"],
        license: packageJson.license,
      },
    }),
  ],
});
