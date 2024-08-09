"use client";
import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import { TfiFaceSad } from "react-icons/tfi";
import { IoMdArrowBack } from "react-icons/io";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const attractions = {
  'playa-el-zonte': {
    name: 'Playa el Zonte',
    description: 'Ubicada en la costa de La Libertad, Playa El Zonte es una playa pintoresca famosa por sus olas consistentes y su ambiente relajado. Es un destino popular entre los surfistas debido a sus excelentes condiciones para el surf durante todo el año. La playa ofrece una combinación de arena dorada y rocas volcánicas, creando un paisaje único y atractivo. El área alrededor de Playa El Zonte cuenta con una variedad de pequeños restaurantes y bares que ofrecen comida local y refrescos, lo que permite a los visitantes disfrutar de una comida con vista al mar. Además, la playa está rodeada de vegetación tropical, lo que agrega un toque natural y fresco al entorno. Es un lugar ideal para quienes buscan escapar del bullicio de las ciudades y disfrutar de una experiencia costera tranquila y auténtica. La comunidad local, amigable y acogedora, contribuye a que la atmósfera de Playa El Zonte sea relajada y agradable.',
    iframeSrc: `https://www.google.com/maps/embed/v1/place?q=13.494494,-89.440107&key=${apiKey}`,
  },
  'parque-de-diversiones': {
    name: 'Parque de Diversiones',
    description: 'Este parque está ubicado junto a la alcaldía municipal de chiltiupan, es un lugar ideal para pasar un rato agradable en familia en un ambiente tranquilo y seguro.',
    iframeSrc: `https://www.google.com/maps/embed/v1/place?q=13.590728,-89.467295&key=${apiKey}`,
  },
  'atraccion-3': {
    name: 'Atracción 3',
    description: 'loremp ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc nec urna tincidunt luctus.',
    iframeSrc: 'https://maps.google.com/?q=13.488,89.366',
  },
  'atraccion-4': {
    name: 'Atracción 4',
    description: 'loremp ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc nec urna tincidunt luctus.',
    iframeSrc: 'https://maps.google.com/?q=13.488,89.366',
  },
};

export default function AtraccionDetail() {
  const router = useRouter();
  const { slug } = useParams();
  const attraction = attractions[slug];

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
                src={attraction.iframeSrc}
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

