import react from "@vitejs/plugin-react"
import vike from "vike/plugin"
import mdx from "@mdx-js/rollup"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [vike(), mdx(), react()],
})
