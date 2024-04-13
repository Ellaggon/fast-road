import { defineConfig } from 'astro/config';
import auth from "auth-astro";
import cloudflare from "@astrojs/cloudflare";
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // ...
  integrations: [tailwind(), react(), auth()],
  output: "server",
  adapter: cloudflare()
});