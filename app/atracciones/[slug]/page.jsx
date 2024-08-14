"use client";
import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import { TfiFaceSad } from "react-icons/tfi";
import { IoMdArrowBack } from "react-icons/io";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

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
    name: 'Atracción 3',
    slug: 'atraccion-3',
    description: 'loremp ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc nec urna tincidunt luctus.',
    image: '',
    lat: 13.488,
    lon: -89.366,
  },
  {
    name: 'Atracción 4',
    slug: 'atraccion-4',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc nec urna tincidunt luctus.',
    image: '', 
    lat: 13.488,
    lon: -89.366,
  },
];

export default function AtraccionDetail() {
  const router = useRouter();
  const { slug } = useParams();

  // Buscar la atracción que tenga el slug coincidente
  const attraction = attractions.find(attraction => attraction.slug === slug);

  if (!attraction) {
    return (
      <div className="container bg-white dark:bg-background-primary mx-auto p-6 h-screen items-center justify-center flex text-white">
        <div className="text-background-primary dark:text-white">
            <h1 className="text-3xl font-bold text-center mb-4">Atracción no encontrada </h1>
            <div className="flex-wrap justify-center flex">
                <TfiFaceSad className="text-4xl " />
            </div>
            <p className="text-lg mt-4 text-center">La atracción que buscas no existe. Por favor, verifica la URL e intenta de nuevo.</p>
            <div className="flex flex-row justify-center items-center">
                <button 
                    onClick={() => router.push('/atracciones')}
                    className="mt-6 px-4 py-2 flex items-center bg-sky-700 text-white rounded-md">
                        <IoMdArrowBack className="mr-2 text-xl" />
                        Regresar a Atracciones
                </button>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-background-primary mx-auto p-6 mt-10 text-white">
        <button 
            onClick={() => router.push('/atracciones')}
            className="mt-6 py-2 flex items-center text-black dark:text-white rounded-md">
            <IoMdArrowBack className="mr-2 text-xl" />
            Regresar
        </button>
        <div className="text-background-primary dark:text-white">
            <h1 className="text-4xl text-center font-bold mb-4">{attraction.name}</h1>
            <p className="text-lg mb-6">{attraction.description}</p>
            <div className="w-full h-80 mt-6">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?q=${attraction.lat},${attraction.lon}&key=${apiKey}&maptype=satellite`}
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title={`Mapa de ${attraction.name}`}
                className="rounded-lg"
              ></iframe>
            </div>
        </div>
    </div>
  );
}
