import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Exporta como sitio estático
  distDir: "out", // Carpeta donde se generará el build estático
  trailingSlash: true, // Importante para GitHub Pages
  images: {
    unoptimized: true, // Deshabilita la optimización de imágenes de Next.js
  },
};

export default nextConfig;
