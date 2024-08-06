import React from 'react';
import Image from 'next/image';
import { FaInfoCircle } from 'react-icons/fa';

export default function historia() {
  return (
    <section id="historia" className="py-12 px-6 mt-10 bg-background-primary text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          <FaInfoCircle className="inline-block text-accent mr-2" />
          Historia de Chiltiupán
        </h2>
        <p className="text-lg mb-6 text-gray-300">
          Chiltiupán es un municipio ubicado en el departamento de La Libertad, en El Salvador. Su nombre se traduce del náhuat como "Templo rojo". Este municipio es conocido por su rica historia, su belleza natural y su patrimonio cultural.
        </p>
        <p className="text-lg mb-6 text-gray-300">
          La región de Chiltiupán ha sido habitada desde tiempos precolombinos. Durante la época colonial, el área fue un importante centro de comercio y agricultura. La influencia de las culturas indígenas y la colonización española han dejado una marca profunda en la arquitectura y las tradiciones del lugar.
        </p>
        <p className="text-lg mb-6 text-gray-300">
          Chiltiupán es famoso por sus festividades tradicionales, que incluyen celebraciones religiosas y eventos culturales que atraen a visitantes de toda la región. La arquitectura colonial, con sus iglesias históricas y edificios antiguos, refleja el legado histórico del municipio.
        </p>
        <p className="text-lg mb-6 text-gray-300">
          Además de su riqueza histórica, Chiltiupán cuenta con una impresionante variedad de paisajes naturales. Desde sus montañas y colinas hasta sus áreas de cultivo y senderos naturales, el municipio ofrece oportunidades únicas para el ecoturismo y la exploración al aire libre.
        </p>
        <div className="relative mb-6">
          <Image
            src="https://i.pinimg.com/originals/d4/b0/ed/d4b0ed961dfc72393c8edc6982f90474.jpg" // Cambia esta URL por una imagen representativa de Chiltiupán
            alt="Paisaje de Chiltiupán"
            width={1200}
            height={800}
            layout="responsive"
            className="rounded-md shadow-lg"
          />
        </div>
        <p className="text-lg text-gray-300">
          Para más detalles, puedes consultar la <a href="https://es.wikipedia.org/wiki/Chiltiup%C3%A1n" className="text-accent underline" target="_blank" rel="noopener noreferrer">página de Wikipedia sobre Chiltiupán</a>.
        </p>
      </div>
    </section>
  );
}
