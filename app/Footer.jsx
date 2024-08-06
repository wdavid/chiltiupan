import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { BsEnvelope, BsPhone } from 'react-icons/bs';
import { MdOutlineLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-background-secondary text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-2xl font-bold mb-4">Chiltiupán</h2>
            <p className="text-lg mb-4">Descubre la belleza y cultura de nuestro querido municipio. Visítanos y conoce más sobre nuestra historia, atracciones y cultura.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-gray-400">
                <FaFacebookF className="text-xl" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://twitter.com" className="text-white hover:text-gray-400">
                <FaTwitter className="text-xl" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://instagram.com" className="text-white hover:text-gray-400">
                <FaInstagram className="text-xl" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" className="text-white hover:text-gray-400">
                <FaLinkedin className="text-xl" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-xl font-bold mb-4">Contacto</h2>
            <ul>
              <li className="flex items-center mb-2">
                <BsPhone className="text-lg mr-2" />
                <a href="tel:+50312345678" className="hover:text-gray-400">+503 1234 5678</a>
              </li>
              <li className="flex items-center mb-2">
                <BsEnvelope className="text-lg mr-2" />
                <a href="mailto:info@chiltiupan.com" className="hover:text-gray-400">info@chiltiupan.com</a>
              </li>
              <li className="flex items-center">
                <MdOutlineLocationOn className="text-lg mr-2" />
                <span className="hover:text-gray-400">Calle Principal, Chiltiupán, El Salvador</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Chiltiupán. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
