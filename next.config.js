/**
 * @type { import("next").NextConfig}
 */
const config = {
  experimental: {
    cpus: 4,
    workerThreads: true,
  },
  output: "standalone",
};
module.exports = config;
