import { defineConfig } from 'astro/config';
import auth from "auth-astro";
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";
import node from "@astrojs/node";
import cloudflare from "@astrojs/cloudflare";


// https://astro.build/config
export default defineConfig({
  // ...
  output: "server",
  adapter: cloudflare({ mode: "directory" }),
  integrations: [tailwind(), react(), auth()],
  adapter: node({
    mode: "standalone"
  })
});