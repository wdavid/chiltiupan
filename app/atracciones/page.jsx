"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const attractions = [
  {
    name: 'Playa el Zonte',
    slug: 'playa-el-zonte',
    description: 'Una de las playas mas visitadas en el municipio de Chiltiupán, con un ambiente relajado y olas consistentes para surfear.',
    image: 'https://www.todoturismo.sv/custom/domain_1/image_files/sitemgr_photo_4111.jpg', // URL de la imagen
  },
  {
    name: 'Parque de Diversiones',
    slug: 'parque-de-diversiones',
    description: 'Un lugar ideal para pasar un rato agradable en familia en un ambiente tranquilo y seguro.',
    image: 'https://scontent.fsal3-1.fna.fbcdn.net/v/t1.6435-9/88116066_3030218380428096_7576514844937945088_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=XrO2JiMDFF4Q7kNvgFjD1iC&_nc_ht=scontent.fsal3-1.fna&oh=00_AYA7X5QNxZzx_zlYK6KT3mdlfj509UYBUtBaYgtS7Vj12w&oe=66DCC7E7',
  },
  {
    name: 'Atracción 3',
    slug: 'atraccion-3',
    description: 'loremp ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc nec urna tincidunt luctus.',
    image: '', // URL de la imagen
  },
  {
    name: 'Atracción 4',
    slug: 'atraccion-4',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc nec urna tincidunt luctus.',
    image: '', // URL de la imagen
  },

];
export default function Atracciones() {
  return (
    <section id="atracciones" className="py-12 px-6 mt-10 bg-white dark:bg-background-primary text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-background-primary dark:text-white">
          Atracciones en Chiltiupán
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {attractions.map((attraction, index) => (
            <Link href={`/atracciones/${attraction.slug}`} key={index} passHref>
              <div className="cursor-pointer bg-light-secondary dark:bg-background-secondary rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0"
                  />
                  <div className="absolute inset-0 bg-black opacity-20"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{attraction.name}</h3>
                  <p className="text-background-primary dark:text-gray-300">{attraction.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}