"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChurch } from "react-icons/fa";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { FaMountainSun } from "react-icons/fa6";
import { GiWaveSurfer } from "react-icons/gi";

const images = [
  "https://scontent.fsal3-1.fna.fbcdn.net/v/t1.6435-9/160198868_505632124165743_7643001120098558952_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=_moTxqfkiekQ7kNvgHjWOci&_nc_ht=scontent.fsal3-1.fna&oh=00_AYD1_xNA0T8tg8LfKJzoAJr2sAFzDZnGmBzOj_VoFTOoeA&oe=66D9F136",
  "https://scontent.fsal2-2.fna.fbcdn.net/v/t39.30808-6/264904621_747933399935613_7303205601734726482_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=HXodWgkvtv0Q7kNvgF2zFYb&_nc_ht=scontent.fsal2-2.fna&oh=00_AYAi9Yp2y0EbP53gE-xjaZglp50JsiZq-tDVo4hhLT7mZg&oe=66B859A6",
  "https://scontent.fsal2-2.fna.fbcdn.net/v/t39.30808-6/253650214_725991455463141_2937176929294450452_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=fyjVJGwXTrkQ7kNvgE8wbn_&_nc_ht=scontent.fsal2-2.fna&oh=00_AYChk-lyWfcD8q3i5nV4IJwejvIh-hB2ycFbw_M6Hxf6FQ&oe=66B84C3B"
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia la imagen cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-background-primary text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${currentIndex === index ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={image}
              alt={`Imagen ${index + 1}`}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center p-6">
          <div className="flex-col">
            <h1 className="text-4xl mb-1">Bienvenidos a</h1>
            <h1 className="text-4xl mb-4 font-bold ml-2 text-accent">Chiltiupan</h1>
          </div>
          <p className="text-lg mb-4">Descubre la belleza y la cultura de nuestro querido municipio</p>
          <div className="flex-row flex-wrap justify-center flex">
            <FaChurch className="text-5xl text-white mx-3" />
            <FaUmbrellaBeach className="text-5xl text-white mx-3" />
            <FaMountainSun className="text-5xl text-white mx-3" />
            <GiWaveSurfer className="text-5xl text-white mx-3" />
          </div>
          <div className="flex flex-col items-center justify-center mt-5">
            <a href="#learn-more" className="bg-primary text-white px-6 mt-5 rounded-md text-lg font-medium">Conoce Más</a>
            <a href="#learn-more" className="text-4xl mt-2 text-white animate-bounce">
              <FaChevronDown />
            </a>
          </div>
          
        </div>
      </section>

      <section id="learn-more" className="py-12 px-6 bg-background-primary">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center mb-5 justify-center">
            <h2 className="text-3xl font-bold text-white">Sobre</h2>
            <h2 className="text-3xl font-bold ml-2 text-accent ">Chiltiupan</h2>
          </div>
          <p className="text-lg mb-6 text-gray-300">Chiltiupan es un lugar lleno de encanto y tradición. Conocido por sus paisajes impresionantes, su rica historia y su vibrante cultura, nuestro municipio ofrece a los visitantes una experiencia única en cada visita. Desde las antiguas iglesias hasta las playas serenas y las montañas imponentes, cada rincón de Chiltiupan tiene algo especial que ofrecer.</p>
          <div className="relative w-full h-60 overflow-hidden rounded-md shadow-lg mx-auto">
            <Image
              src="https://scontent.fsal3-1.fna.fbcdn.net/v/t1.6435-9/72777023_153519479377011_6042319511393140736_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=oDm8Otdgp5AQ7kNvgHjpb7b&_nc_ht=scontent.fsal3-1.fna&oh=00_AYAxrbLysSyfXbGW3EDrCKoSQyn-S7VF09R-lRkX0NvD-Q&oe=66DA1140"
              alt="About Chiltiupan"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
          </div>
          <a href="/historia" className="mt-6 inline-block bg-secondary text-white px-6 py-3 rounded-md text-lg font-medium">Leer Más</a>
        </div>
      </section>
    </div>
  );
}
