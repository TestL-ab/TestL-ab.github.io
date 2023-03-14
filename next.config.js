const withMarkdoc = require('@markdoc/next.js')

/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'
let repo

if (isGithubActions) {
  repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
}

const nextConfig = {
  assetPrefix: `/${repo}/`,
  basePath: `/${repo}`,
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md'],
  images: {
    unoptimized: true,
    loader: 'imgix',
    path: 'testlab.imgix.net',
  },
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = withMarkdoc()(nextConfig)
