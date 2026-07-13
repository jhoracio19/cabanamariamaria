/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      // Las Server Actions limitan el cuerpo a 1mb por defecto, insuficiente
      // para una foto de portada real tomada con celular.
      bodySizeLimit: "10mb",
    },
  },
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