import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "*.replit.dev",
    "*.pike.replit.dev",
    "*.replit.app",
    "*.repl.co",
  ],
};

export default nextConfig;
