import { watch } from "./watch-shared"

watch({
  esbuild: {
    entryPoints: ["./src/startup.ts"],
    outfile: "./dist/client.js"
  },
  altvEsbuild: {
    mode: "client",
  }
})
