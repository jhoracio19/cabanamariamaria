/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/todo-incluido',
        destination: '/banquetes',
        permanent: true,
      },
      {
        source: '/cotizador',
        destination: '/renta-salon',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;