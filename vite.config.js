import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 650,
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        services: resolve(__dirname, "services.html"),
        portfolio: resolve(__dirname, "portfolio.html"),
        offers: resolve(__dirname, "offers.html"),
        contact: resolve(__dirname, "contact.html"),
        web: resolve(__dirname, "web-design-development.html"),
        graphics: resolve(__dirname, "graphics-design.html"),
        ads: resolve(__dirname, "ads-expert.html"),
        realEstate: resolve(__dirname, "real-estate.html"),
        ai: resolve(__dirname, "ai-generation.html"),
        affiliate: resolve(__dirname, "affiliate-marketing.html"),
        admin: resolve(__dirname, "admin.html"),
        privacy: resolve(__dirname, "privacy.html"),
        terms: resolve(__dirname, "terms.html")
      },
      output: {
        manualChunks: {
          three: ["three"],
          icons: ["lucide"]
        }
      }
    }
  }
});
