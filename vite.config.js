import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // port: 3000, // 원하는 포트 번호로 변경 (예: 3000)
  },
});
