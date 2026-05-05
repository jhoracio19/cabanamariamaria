/** @type {import('next').NextConfig} */
const nextConfig = {
  // Aquí agregamos nuestra regla de redirecciones mágicas
  async redirects() {
    return [
      {
        source: '/todo-incluido',
        destination: '/banquetes',
        permanent: true, // Esto le dice a Google que la mudanza es definitiva (SEO de oro)
      },
      {
        source: '/cotizador',
        destination: '/renta-salon',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig; // o export default nextConfig si usas .mjs