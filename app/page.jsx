"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { FaChurch, FaUmbrellaBeach, FaMountainSun } from "react-icons/fa6";
import { GiWaveSurfer } from "react-icons/gi";
import { FaSun, FaCloud, FaCloudRain, FaBolt, FaSnowflake } from "react-icons/fa";

const images = [
  "https://scontent.fsal3-1.fna.fbcdn.net/v/t1.6435-9/160198868_505632124165743_7643001120098558952_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=_moTxqfkiekQ7kNvgHjWOci&_nc_ht=scontent.fsal3-1.fna&oh=00_AYD1_xNA0T8tg8LfKJzoAJr2sAFzDZnGmBzOj_VoFTOoeA&oe=66D9F136",
  "https://scontent.fsal2-2.fna.fbcdn.net/v/t39.30808-6/264904621_747933399935613_7303205601734726482_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=HXodWgkvtv0Q7kNvgF2zFYb&_nc_ht=scontent.fsal2-2.fna&oh=00_AYAi9Yp2y0EbP53gE-xjaZglp50JsiZq-tDVo4hhLT7mZg&oe=66B859A6",
  "https://scontent.fsal2-2.fna.fbcdn.net/v/t39.30808-6/253650214_725991455463141_2937176929294450452_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=fyjVJGwXTrkQ7kNvgE8wbn_&_nc_ht=scontent.fsal2-2.fna&oh=00_AYChk-lyWfcD8q3i5nV4IJwejvIh-hB2ycFbw_M6Hxf6FQ&oe=66B84C3B"
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const options = { hour: 'numeric', minute: 'numeric', hour12: true };
      const formattedTime = new Intl.DateTimeFormat('es-ES', options).format(now);
      setCurrentTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia la imagen cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY; 
      const lat = 13.5692408; // Latitud de Chiltiupán
      const lon = -89.5426415; // Longitud de Chiltiupán
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=es&units=metric`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }
        const data = await response.json();
        setWeather(data);
        setError(false);
      } catch (error) {
        console.error("Error al obtener el clima:", error);
        setError(true);
      }
    };

    fetchWeather();
  }, []);

  const windSpeedInKmh = weather ? (weather.wind.speed * 3.6).toFixed(2) : null;

  const getWeatherIcon = (weatherCondition) => {
    switch (weatherCondition) {
      case "Clear":
        return <FaSun className="text-yellow-500" />;
      case "Clouds":
        return <FaCloud className="text-gray-500" />;
      case "Rain":
        return <FaCloudRain className="text-blue-500" />;
      case "Thunderstorm":
        return <FaBolt className="text-yellow-700" />;
      case "Snow":
        return <FaSnowflake className="text-blue-300" />;
      default:
        return <FaSun className="text-yellow-500" />; // Ícono por defecto
    }
  };

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
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center p-6">
          <div className="flex-col">
            {/* <h1 className="text-4xl mb-1">Bienvenidos a</h1>
            <h1 className="text-4xl mb-2 font-bold ml-2 text-accent">Chiltiupán</h1> */}
            <Image
              src="/logoconocechiltiuwhite.png"
              alt="Logo de Conoce Chiltiupán"
              width={300}
              height={100}
              quality={100}
              className="mx-auto"
            />
          </div>
          {currentTime ? (
            <div className="text-2xl font-medium">
              {currentTime}
            </div>
          ) : (
            <div>Cargando...</div>
          )}
          <p className="text-lg mb-4">Descubre la belleza y la cultura de nuestro querido distrito.</p>
          <div className="flex-row flex-wrap justify-center flex text-white">
            <FaChurch className="text-5xl mx-3" />
            <FaUmbrellaBeach className="text-5xl mx-3" />
            <FaMountainSun className="text-5xl mx-3" />
            <GiWaveSurfer className="text-5xl mx-3" />
          </div>
          <div className="flex flex-col items-center justify-center mt-5">
            <a href="#learn-more" className="bg-primary text-green-100 px-6 mt-5 rounded-md text-lg font-medium">Conoce Más</a>
            <a href="#learn-more" className="text-4xl mt-2 text-green-100 animate-bounce">
              <FaChevronDown />
            </a>
          </div>
        </div>
      </section>

      <section id="learn-more" className="py-12 px-6 bg-white dark:bg-background-primary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="md:col-span-2 mb-2">
              <div className="flex items-center mb-5 justify-center">
                <h2 className="text-3xl font-bold text-black dark:text-white">Sobre</h2>
                <h2 className="text-3xl font-bold ml-2 text-text-light dark:text-accent">Chiltiupán</h2>
              </div>
              <p className="text-lg mb-6 text-black dark:text-gray-300">
                Chiltiupán es un lugar lleno de encanto y tradición. Conocido por sus paisajes impresionantes, su rica historia y su vibrante cultura, nuestro distrito ofrece a los visitantes una experiencia única en cada visita. Desde las antiguas iglesias hasta las playas serenas y las montañas imponentes, cada rincón de Chiltiupán tiene algo especial que ofrecer.
              </p>
              <p className="text-lg mb-6 text-black dark:text-gray-300">
                El distrito de Chiltiupán está compuesto por una rica variedad de comunidades, organizadas en cantones y caseríos que reflejan la diversidad y el encanto local. Entre estos se encuentran Julupe, Siberia Norte, Siberia Sur, El Zonte, Shutia, Las Flores, Santa Marta, Santa Lucía, Termópilas, Cuervo Abajo y Cuervo Arriba. En total, el distrito cuenta con 16 comunidades, cada una con su propio carácter y atractivos únicos. Desde las serenas playas de El Zonte hasta los hermosos paisajes en Santa Marta, cada comunidad ofrece oportunidades especiales para el turismo y la exploración. Estas localidades no solo son el corazón de la vida local, sino también destinos ideales para quienes desean conocer la auténtica esencia del distrito y disfrutar de su diversidad cultural y natural.
              </p>
              <div className="relative w-full mb-2 h-60 overflow-hidden rounded-md shadow-lg mx-auto">
                <Image
                  src="https://scontent.fsal3-1.fna.fbcdn.net/v/t1.6435-9/72777023_153519479377011_6042319511393140736_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=oDm8Otdgp5AQ7kNvgHjpb7b&_nc_ht=scontent.fsal3-1.fna&oh=00_AYAxrbLysSyfXbGW3EDrCKoSQyn-S7VF09R-lRkX0NvD-Q&oe=66DA1140"
                  alt="About Chiltiupan"
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                />
              </div>
              <a href="https://www.facebook.com/photo/?fbid=153519476043678&set=a.118374392891520" className="underline text-sky-700 dark:text-sky-500">Fotografía de Chiltiupán Pictures</a>
              <div className="flex justify-center">
                <a href="/historia" className="mt-2 inline-block bg-secondary underline text-black dark:text-white py-3 rounded-md text-lg font-medium">Historia de Chiltiupán...</a>
              </div>
            </div>
            <div className="sm:px-6 sm:pb-6 sm:border-l-2 border-gray-200 dark:border-gray-700 text-black dark:text-white">
              <div className="p-4 bg-green-50 dark:bg-gray-900 rounded-md shadow-lg">
                <h3 className="text-xl font-medium mb-4 text-center">Información Adicional</h3>
                <ul className="pl-3">
                <li><strong className="font-medium mr-1">Municipio:</strong>La Libertad Costa</li>
                  <li><strong className="font-medium mr-1">Departamento:</strong>La Libertad</li>
                  <li><strong className="font-medium mr-1">Superficie:</strong>96.66 km²</li>
                  <li><strong className="font-medium mr-1">Número de Habitantes:</strong>{`11 796 hab. (2013)`}</li>
                  <li><strong className="font-medium mr-1">Comunidades:</strong>16</li>
                  <li><strong className="font-medium mr-1">Gentilicio:</strong>Chiltiupanecos</li>
                </ul>
              </div>
              {error ? (
                <div className="mt-6 p-4 bg-red-100 dark:bg-red-800 dark:text-white rounded-md shadow-lg">
                  <h3 className="text-xl font-medium mb-2 text-center text-red-700 dark:text-white">No se pudo obtener la información del clima</h3>
                  <p className="text-center text-red-600 dark:text-white">Hubo un problema al intentar cargar los datos del clima. Por favor, inténtalo de nuevo más tarde.</p>
                </div>
              ) : weather ? (
                <div className="mt-6 p-4 bg-purple-50 dark:bg-gray-900 rounded-md shadow-lg">
                  <h3 className="text-xl font-medium mb-2 text-center">Clima actual en Chiltiupán</h3>
                  <div className="pl-3 text-5xl flex items-center justify-center">
                    {getWeatherIcon(weather.weather[0].main)}
                  </div>
                  <ul className="pl-3">
                    <li><strong className="font-medium mr-1">Temperatura:</strong>{weather.main.temp}°C</li>
                    <li><strong className="font-medium mr-1">Humedad:</strong>{weather.main.humidity}%</li>
                    <li><strong className="font-medium mr-1">Precipitación:</strong>{weather.weather[0].description}</li>
                    <li><strong className="font-medium mr-1">Viento:</strong>{windSpeedInKmh} km/h</li>
                  </ul>
                </div>
              ) : (
                <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-900 rounded-md shadow-lg">
                  <h3 className="text-xl font-medium mb-2 text-center">Cargando información del clima...</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
