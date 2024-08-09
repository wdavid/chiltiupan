import React from 'react'

export default function page() {
  return (
    <section id="historia" className="py-12 px-6 mt-10 bg-white dark:bg-background-primary text-white">
        <div className="max-w-7xl mx-auto">
        {/* Introducción a la Cultura */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold text-center text-accent mb-4">Cultura de Chiltiupán</h2>
          <p className="text-lg">
            Chiltiupán es un municipio rico en tradiciones y costumbres que se han preservado a lo largo de los años. La cultura local se manifiesta en su música, danzas, y celebraciones, que son el reflejo del alma de su gente.
          </p>
        </section>

        {/* Fiestas y Celebraciones */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Fiestas y Celebraciones</h3>
          <p className="text-lg mb-4">
            Las fiestas patronales de Chiltiupán son uno de los eventos más esperados del año. Durante estas celebraciones, se llevan a cabo desfiles, misas, y festivales que reúnen a toda la comunidad.
          </p>
          {/* Galería de imágenes o carrusel */}
          <div className="flex space-x-4 overflow-x-auto">
            <img src="imagen1.jpg" alt="Fiesta 1" className="w-64 h-40 rounded-md shadow-lg"/>
            <img src="imagen2.jpg" alt="Fiesta 2" className="w-64 h-40 rounded-md shadow-lg"/>
            <img src="imagen3.jpg" alt="Fiesta 3" className="w-64 h-40 rounded-md shadow-lg"/>
          </div>
        </section>

        {/* Artesanías y Productos Locales */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Artesanías y Productos Locales</h3>
          <p className="text-lg mb-4">
            Las artesanías de Chiltiupán son famosas por su calidad y belleza. Desde textiles hasta cerámicas, los artesanos locales crean productos únicos que reflejan la cultura de la región.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-4 rounded-md shadow-lg">
              <h4 className="text-xl font-medium mb-2">Producto 1</h4>
              <p>Descripción del producto 1.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-md shadow-lg">
              <h4 className="text-xl font-medium mb-2">Producto 2</h4>
              <p>Descripción del producto 2.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-md shadow-lg">
              <h4 className="text-xl font-medium mb-2">Producto 3</h4>
              <p>Descripción del producto 3.</p>
            </div>
          </div>
        </section>

        {/* Música y Bailes Tradicionales */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Música y Bailes Tradicionales</h3>
          <p className="text-lg">
            La música y los bailes tradicionales de Chiltiupán son parte esencial de su identidad cultural. Durante las fiestas y eventos, los habitantes disfrutan de estos espectáculos que llenan de alegría a la comunidad.
          </p>
        </section>

        {/* Lugares Culturales Importantes */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Lugares Culturales Importantes</h3>
          <p className="text-lg mb-4">
            Entre los lugares más emblemáticos de Chiltiupán se encuentran sus antiguas iglesias y plazas, que son testigos de la rica historia y cultura del municipio.
          </p>
          {/* Galería de imágenes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <img src="lugar1.jpg" alt="Lugar 1" className="w-full h-40 rounded-md shadow-lg"/>
            <img src="lugar2.jpg" alt="Lugar 2" className="w-full h-40 rounded-md shadow-lg"/>
            <img src="lugar3.jpg" alt="Lugar 3" className="w-full h-40 rounded-md shadow-lg"/>
          </div>
        </section>

        {/* Leyendas y Mitos Locales */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Leyendas y Mitos Locales</h3>
          <p className="text-lg">
            Chiltiupán está lleno de leyendas y mitos que han pasado de generación en generación. Estas historias forman parte del folclore local y son una ventana a la riqueza cultural del municipio.
          </p>
        </section>

        {/* Eventos Culturales */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">Eventos Culturales</h3>
          <p className="text-lg">
            Chiltiupán ofrece una variedad de eventos culturales a lo largo del año, desde ferias hasta exposiciones de arte, que celebran la cultura y el talento local.
          </p>
        </section>
      </div>
    </section>
  )
}
