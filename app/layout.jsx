"use client";
import './globals.css';
import Navbar from './Navbar.jsx';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-background-primary font-Lato'>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}