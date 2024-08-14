"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const attractions = [
  {
    name: 'Playa el Zonte',
    slug: 'playa-el-zonte',
    description: 'Una de las playas mas visitadas en el distrito de Chiltiupán, con un ambiente relajado y olas consistentes para surfear.',
    image: 'https://www.todoturismo.sv/custom/domain_1/image_files/sitemgr_photo_4111.jpg',
    lat: 13.494494,
    lon: -89.440107,
  },
  {
    name: 'Parque de Diversiones',
    slug: 'parque-de-diversiones',
    description: 'Un lugar ideal para pasar un rato agradable en familia en un ambiente tranquilo y seguro.',
    image: 'https://scontent.fsal3-1.fna.fbcdn.net/v/t1.6435-9/88116066_3030218380428096_7576514844937945088_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=XrO2JiMDFF4Q7kNvgFjD1iC&_nc_ht=scontent.fsal3-1.fna&oh=00_AYA7X5QNxZzx_zlYK6KT3mdlfj509UYBUtBaYgtS7Vj12w&oe=66DCC7E7',
    lat: 13.590728,
    lon: -89.467295,
  },
  {
    name: 'Playa el Zonte',
    slug: 'playa-el-zonte',
    description: 'Una de las playas mas visitadas en el distrito de Chiltiupán, con un ambiente relajado y olas consistentes para surfear.',
    image: 'https://www.todoturismo.sv/custom/domain_1/image_files/sitemgr_photo_4111.jpg',
    lat: 13.494494,
    lon: -89.440107,
  },
  {
    name: 'Parque de Diversiones',
    slug: 'parque-de-diversiones',
    description: 'Un lugar ideal para pasar un rato agradable en familia en un ambiente tranquilo y seguro.',
    image: 'https://scontent.fsal3-1.fna.fbcdn.net/v/t1.6435-9/88116066_3030218380428096_7576514844937945088_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=XrO2JiMDFF4Q7kNvgFjD1iC&_nc_ht=scontent.fsal3-1.fna&oh=00_AYA7X5QNxZzx_zlYK6KT3mdlfj509UYBUtBaYgtS7Vj12w&oe=66DCC7E7',
    lat: 13.590728,
    lon: -89.467295,
  },
  {
    name: 'Playa el Zonte',
    slug: 'playa-el-zonte',
    description: 'Una de las playas mas visitadas en el distrito de Chiltiupán, con un ambiente relajado y olas consistentes para surfear.',
    image: 'https://www.todoturismo.sv/custom/domain_1/image_files/sitemgr_photo_4111.jpg',
    lat: 13.494494,
    lon: -89.440107,
  },
  {
    name: 'Parque de Diversiones',
    slug: 'parque-de-diversiones',
    description: 'Un lugar ideal para pasar un rato agradable en familia en un ambiente tranquilo y seguro.',
    image: 'https://scontent.fsal3-1.fna.fbcdn.net/v/t1.6435-9/88116066_3030218380428096_7576514844937945088_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=XrO2JiMDFF4Q7kNvgFjD1iC&_nc_ht=scontent.fsal3-1.fna&oh=00_AYA7X5QNxZzx_zlYK6KT3mdlfj509UYBUtBaYgtS7Vj12w&oe=66DCC7E7',
    lat: 13.590728,
    lon: -89.467295,
  },
  {
    name: 'Playa el Zonte',
    slug: 'playa-el-zonte',
    description: 'Una de las playas mas visitadas en el distrito de Chiltiupán, con un ambiente relajado y olas consistentes para surfear.',
    image: 'https://www.todoturismo.sv/custom/domain_1/image_files/sitemgr_photo_4111.jpg',
    lat: 13.494494,
    lon: -89.440107,
  },
  {
    name: 'Parque de Diversiones',
    slug: 'parque-de-diversiones',
    description: 'Un lugar ideal para pasar un rato agradable en familia en un ambiente tranquilo y seguro.',
    image: 'https://scontent.fsal3-1.fna.fbcdn.net/v/t1.6435-9/88116066_3030218380428096_7576514844937945088_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_ohc=XrO2JiMDFF4Q7kNvgFjD1iC&_nc_ht=scontent.fsal3-1.fna&oh=00_AYA7X5QNxZzx_zlYK6KT3mdlfj509UYBUtBaYgtS7Vj12w&oe=66DCC7E7',
    lat: 13.590728,
    lon: -89.467295,
  },
  
];

export default function Atracciones() {
  return (
    <section id="atracciones" className="py-12 px-6 mt-10 bg-white dark:bg-background-primary text-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center mb-5 justify-center">
          <h2 className="text-3xl font-bold text-black dark:text-white">Atracciones de</h2>
          <h2 className="text-3xl font-bold ml-2 text-text-light dark:text-accent">Chiltiupán</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {attractions.map((attraction, index) => (
            <Link href={`/atracciones/${attraction.slug}`} key={index} passHref>
              <div className="cursor-pointer bg-light-secondary dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105">
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
                  <p className="text-background-primary dark:text-gray-300 mt-5 underline">Click para conocer más..</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}