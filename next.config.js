/** @type {import('next').NextConfig} */
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isGitHubPagesBuild = Boolean(process.env.GITHUB_ACTIONS && repositoryName);

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isGitHubPagesBuild ? `/${repositoryName}` : '',
  assetPrefix: isGitHubPagesBuild ? `/${repositoryName}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPagesBuild ? `/${repositoryName}` : ''
  }
};

module.exports = nextConfig;
