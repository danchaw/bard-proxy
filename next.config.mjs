/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        "has": [
          {
            "type": "query",
            "key": "key",
          }
        ],
        destination: '/api'
      }
    ]
  }
}

export default nextConfig