import { defineConfig } from 'astro/config';
import auth from "auth-astro";
import tailwind from '@astrojs/tailwind';
import react from "@astrojs/react";
import node from "@astrojs/node";


// https://astro.build/config
export default defineConfig({
  // ...
  output: "server",
  integrations: [tailwind(), react(), auth()],
  adapter: node({
    mode: "standalone"
  })
});