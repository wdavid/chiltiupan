import React from 'react';
import Image from 'next/image';
import { FaInfoCircle } from 'react-icons/fa';

export default function Historia() {
  return (
    <section id="historia" className="py-12 px-6 mt-10 bg-background-primary text-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center items-center mb-6 text-3xl">
          <FaInfoCircle className="inline-block text-accent mr-2" />
          <h2 className="text-3xl font-bold ">Historia de Chiltiupán</h2>
        </div>
        <p className="text-lg mb-6 text-gray-300">
          Chiltiupán es un municipio ubicado en el departamento de La Libertad, en El Salvador. Su nombre se traduce del náhuat como &quot;Templo rojo&quot;. Este municipio es conocido por su rica historia, su belleza natural y su patrimonio cultural.
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
        <div className="flex-row flex-wrap justify-center flex">
          <Image
            src="https://i.pinimg.com/originals/d4/b0/ed/d4b0ed961dfc72393c8edc6982f90474.jpg" // Cambia esta URL por una imagen representativa de Chiltiupán
            alt="Paisaje de Chiltiupán"
            width={400}
            height={100}
            layout=""
            className="rounded-md m-4"
          />
          <Image
            src="https://scontent.fsal2-1.fna.fbcdn.net/v/t39.30808-6/236930066_4204506109602480_5433078731734485855_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=SeDx7Jxhqa8Q7kNvgFv28vh&_nc_ht=scontent.fsal2-1.fna&oh=00_AYCIlAaNYuJnL1OrLDoxmJMQ5dgBUl4f88JX4f3W97Uu-Q&oe=66B97A5A" // Cambia esta URL por una imagen representativa de Chiltiupán
            alt="Paisaje de Chiltiupán"
            width={500}
            height={100}
            layout=""
            className="rounded-md m-4"
          />
        </div>
        <p className="text-lg text-gray-300">
          Para más detalles, puedes consultar la <a href="https://es.wikipedia.org/wiki/Chiltiup%C3%A1n" className="text-accent underline" target="_blank" rel="noopener noreferrer">página de Wikipedia sobre Chiltiupán</a>.
        </p>
      </div>
    </section>
  );
}
