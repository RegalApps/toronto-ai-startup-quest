/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "https://www.aistartupquest.com/toronto",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
