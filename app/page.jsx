import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background-primary text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/183/604/926/amanecer-mar-naturaleza-playa-wallpaper-preview.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center p-6">
          <h1 className="text-4xl font-bold mb-4">Bienvenidos a Chiltiupan</h1>
          <p className="text-lg mb-8">Descubre la belleza y la cultura de nuestro querido municipio</p>
          <a href="#learn-more" className="bg-primary text-white px-6 py-3 rounded-md text-lg font-medium">Conoce Más</a>
        </div>
      </section>

      {/* About Section */}
      <section id="learn-more" className="py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Acerca de Chiltiupan</h2>
          <p className="text-lg mb-6">Chiltiupan es un municipio lleno de historia y cultura, rodeado de paisajes impresionantes y con una comunidad acogedora.</p>
          <Image src="/path/to/about-image.jpg" alt="About Chiltiupan" width={600} height={400} className="mx-auto rounded-md shadow-lg" />
          <a href="/historia" className="mt-6 inline-block bg-secondary text-white px-6 py-3 rounded-md text-lg font-medium">Leer Más</a>
        </div>
      </section>

      {/* Attractions Section */}
      <section className="bg-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Atracciones</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full md:w-1/3 lg:w-1/4">
              <Image src="/path/to/attraction1.jpg" alt="Attraction 1" width={400} height={300} className="w-full rounded-md shadow-lg" />
              <h3 className="text-xl font-semibold mt-2">Atracción 1</h3>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/4">
              <Image src="/path/to/attraction2.jpg" alt="Attraction 2" width={400} height={300} className="w-full rounded-md shadow-lg" />
              <h3 className="text-xl font-semibold mt-2">Atracción 2</h3>
            </div>
            {/* Añadir más atracciones según sea necesario */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contacto</h2>
        <p className="text-lg mb-6">¿Tienes preguntas o quieres saber más? ¡Estamos aquí para ayudarte!</p>
        <a href="/contacto" className="bg-primary text-white px-6 py-3 rounded-md text-lg font-medium">Contáctanos</a>
      </section>
    </div>
  );
}
