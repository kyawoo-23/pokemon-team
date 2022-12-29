import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import htmlPlugin from "vite-plugin-html-config"

const htmlPluginOpt = {
  title: "Pokemon Team",
  favicon: "/pikachu.png",
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), htmlPlugin(htmlPluginOpt)],
})
