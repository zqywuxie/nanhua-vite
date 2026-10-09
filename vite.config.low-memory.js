import { defineConfig } from "vite";
import { createViteConfig } from "./build/vite.shared.js";

export default defineConfig(createViteConfig({ lowMemory: true }));
