const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER)
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "abdalfadeelh",
        mongodb_password: "zjVgUgrVk1TMnUvf",
        mongodb_clustername: "cluster0",
        mongodb_database: "blog-dev",
      },
    };
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "abdalfadeelh",
      mongodb_password: "zjVgUgrVk1TMnUvf",
      mongodb_clustername: "cluster0",
      mongodb_database: "blog-prod",
    },
  };
};
module.exports = nextConfig;
