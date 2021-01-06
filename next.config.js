module.exports = {
  experimental: { optimizeFonts: true },
  webpack: (config, { _, isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }

    return config;
  },
};
