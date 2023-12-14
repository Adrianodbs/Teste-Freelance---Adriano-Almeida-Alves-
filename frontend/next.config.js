/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    domains: [
      'static.mundoeducacao.uol.com.br',
      'blog.forlabexpress.com.br',
      'static.preparaenem.com'
    ]
  }
}

module.exports = nextConfig
