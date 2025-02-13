/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const nextConfig:NextConfig = {
  typescript:{
    ignoreBuildErrors:true,
  },
  resolve: {
    extensions: ['.js', '.jsx','ts']
  }
};

export default nextConfig;