import React from 'react';
import Image from 'next/image';
import { FaInfoCircle } from 'react-icons/fa';

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const chiltiupanmap = `https://www.google.com/maps/embed/v1/place?q=13.590728,-89.467295&key=${apiKey}&maptype=satellite`;

export default function Historia() {
  return (
    <section id="historia" className="py-12 px-6 mt-10 bg-white dark:bg-background-primary text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="max-w-7xl mx-auto text-center md:col-span-2">
          <div className="flex justify-center items-center mb-6 text-3xl">
            <FaInfoCircle className="inline-block text-accent mr-2" />
            <h2 className="text-3xl font-bold text-black dark:text-white ">Historia de Chiltiupán</h2>
          </div>
          <p className="text-lg text-left mb-6 text-black dark:text-gray-300">
            Chiltiupán es un municipio ubicado en el departamento de La Libertad, en El Salvador. Su nombre se traduce del náhuat como &quot;Templo rojo&quot;. Este municipio es conocido por su rica historia, su belleza natural y su patrimonio cultural.
          </p>
          <p className="text-lg text-left mb-6 text-black dark:text-gray-300">
            La región de Chiltiupán ha sido habitada desde tiempos precolombinos. Durante la época colonial, el área fue un importante centro de comercio y agricultura. La influencia de las culturas indígenas y la colonización española han dejado una marca profunda en la arquitectura y las tradiciones del lugar.
          </p>
          <p className="text-lg text-left mb-6 font-bold text-black dark:text-gray-300">{`Parte del Departamento de San Salvador (1835)`}</p>
          <p className="text-lg text-left mb-6 text-black dark:text-gray-300">
            En el año 1835, Chiltiupán formaba parte del departamento de San Salvador. A lo largo de los años, el municipio pasó a formar parte del departamento de Cuscatlán y posteriormente regresó a San Salvador. Finalmente, en 1865, se incorporó definitivamente al departamento de La Libertad.
          </p>
          <p className="text-lg text-left mb-6 font-bold text-black dark:text-gray-300">{`Estadísticas de Población (1865)`}</p>
          <p className="text-lg text-left mb-6 text-black dark:text-gray-300">
            Según la estadística del departamento de La Libertad realizada por el gobernador José López el 23 de mayo de 1865, Chiltiupán contaba con una población de 282 personas.
          </p>
          <p className="text-lg text-left mb-6 font-bold text-black dark:text-gray-300">{`Construcción del Cabildo (1883)`}</p>
          <p className="text-lg text-left mb-6 text-black dark:text-gray-300">
            Para el 30 de diciembre de 1883, la municipalidad de Chiltiupán estaba en proceso de construir un cabildo con dimensiones de 30 varas de largo y 6 de ancho, que también contaba con un corredor. Hasta esa fecha, se habían invertido 1,013.25 pesos en la obra.
          </p>
          <p className="text-lg text-left mb-6 text-black dark:text-gray-300">
            Chiltiupán es famoso por sus festividades tradicionales, que incluyen celebraciones religiosas y eventos culturales que atraen a visitantes de toda la región. La arquitectura colonial, con sus iglesias históricas y edificios antiguos, refleja el legado histórico del municipio.
          </p>
          <p className="text-lg text-left mb-6 text-me text-black dark:text-gray-300">
            Además de su riqueza histórica, Chiltiupán cuenta con una impresionante variedad de paisajes naturales. Desde sus montañas y colinas hasta sus áreas de cultivo y senderos naturales, el municipio ofrece oportunidades únicas para el ecoturismo y la exploración al aire libre.
          </p>
          
          {/* <Image
              src="https://scontent.fsal11-1.fna.fbcdn.net/v/t39.30808-6/448831693_861709205988379_7326801148208474309_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ASRIZBlV4DwQ7kNvgFrDd8A&_nc_ht=scontent.fsal11-1.fna&oh=00_AYDROcpNJY8ify_S3kdqUZvogu2zhgaoaNmoBQrRh4ZWtg&oe=66BC5014"
              alt="Paisaje de Chiltiupán"
              width="800"
              height="800"
              layout=""
              className="rounded-md w-full"
            /> */}
        </div>

        <div className="px-0 pb-6 sm:border-l-2 sm:px-6 border-gray-200 dark:border-gray-700 text-black dark:text-white">
          <h3 className="text-2xl font-bold mb-4">Datos interesantes</h3>
          <div className="flex-row flex-wrap justify-center flex">
            <div>
              <Image
                src="https://i.pinimg.com/originals/d4/b0/ed/d4b0ed961dfc72393c8edc6982f90474.jpg" // Cambia esta URL por una imagen representativa de Chiltiupán
                alt="Paisaje de Chiltiupán"
                width={400}
                height={100}
                layout=""
                className="rounded-md w-full"
              />
              <div className="mb-5">
                <p>Fotografía tomada en el año 1956, en la imagen se puede apreciar que ya existía el famoso reloj de Chiltiupán.</p>
                <a href="https://www.pinterest.com/pin/498070040035480821/" className="underline text-text-light dark:text-accent">Extraída de Pinterest</a>
              </div>
            </div>
            <div>
              <Image
                src="https://scontent.fsal2-1.fna.fbcdn.net/v/t39.30808-6/236930066_4204506109602480_5433078731734485855_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=SeDx7Jxhqa8Q7kNvgFv28vh&_nc_ht=scontent.fsal2-1.fna&oh=00_AYCIlAaNYuJnL1OrLDoxmJMQ5dgBUl4f88JX4f3W97Uu-Q&oe=66B97A5A" // Cambia esta URL por una imagen representativa de Chiltiupán
                alt="Paisaje de Chiltiupán"
                width={500}
                height={100}
                layout=""
                className="rounded-md w-full"
              />
              <div className="mb-5">
                <p>Fotografía de la iglesía católica ubicada en la plaza de Chiltiupán en 1930. Al lado derecho también hay una foto de la iglesia en 1970.</p>
                <a href="https://www.facebook.com/chiltiupan/posts/historiaas%C3%AD-lucia-la-parroquia-de-nuestra-municipio-chiltiup%C3%A1nal-lado-izquierdo-/4204506302935794/" className="underline text-text-light dark:text-accent">Extraída de página de Facebook de Chiltiupán</a>
              </div>
            </div>
            <div className="w-full h-80">
              <iframe
                src={chiltiupanmap}
                width={500}
                height={100}
                loading=""
                className="rounded-md mt-6 h-full w-full"
              ></iframe>
              <p className="mt-2">Mapa de Chiltiupan, La Libertad</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-lg mt-14 text-black dark:text-white">
        Para más detalles, puedes consultar la <a href="https://es.wikipedia.org/wiki/Chiltiup%C3%A1n" className="text-text-light dark:text-accent underline" target="_blank" rel="noopener noreferrer">página de Wikipedia sobre Chiltiupán</a>
      </p>
    </section>
  );
}
