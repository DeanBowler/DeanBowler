module.exports = {
  reactStrictMode: true,
  webpack: (config, { _, isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }
    return config;
  },
  compiler: {
    styledComponents: {
      ssr: true,
      displayName: true,
      topLevelImportPaths: [
        '@xstyled/styled-components',
        '@xstyled/styled-components/no-tags',
        '@xstyled/styled-components/native',
        '@xstyled/styled-components/primitives',
      ],
    },
  },
};
