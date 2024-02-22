"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '../app/globals.css';

const All = () => {
  const [htmlContent, setHtmlContent] = useState<string>('loading...');

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await fetch('YOUR_API_ENDPOINT_HERE');
        if (!response.ok) {
          throw new Error('Failed to fetch HTML content');
        }
        const html = await response.text();
        setHtmlContent(html);
      } catch (error) {
        console.error('Error fetching HTML content:', error);
        setHtmlContent('Failed to load content');
      }
    };

    fetchHtmlContent();
  }, []);

  const handleHomeClick = () => {
    window.location.href = '/';
  };

  return (
    <main className="flex flex-col items-center justify-between min-h-screen px-4 py-8 md:p-24">
      <section className="flex flex-col items-center w-full max-w-5xl font-mono text-sm lg:flex-row lg:justify-between">
      <div id="top-ads" className='flex flex-col items-center justify-center w-full bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:bg-none lg:static lg:flex-row lg:w-auto lg:h-auto fill bottom-0 left-0 p-4 lg:p-0'>
     
     </div>  <div className="flex flex-col items-center justify-center w-full bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:bg-none lg:static lg:flex-row lg:w-auto lg:h-auto fill bottom-0 left-0 p-4 lg:p-0">
          <a
            href="#"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 pointer-events-none lg:pointer-events-auto lg:flex-row"
          >
            <div className="flex flex-col items-center justify-center lg:flex-row">
              <Image
                src="/logo.jpeg"
                alt="Bedtime Stories by Panoptic Pen Logo"
                width={200} // Reduced size for mobile
                height={200} // Reduced size for mobile
                className="light:invert hover:dark:invert"
              />
              <h1 className="text-4xl lg:text-6xl text-balance mt-4 lg:mt-0 lg:ml-4">
                Bedtime Stories
              </h1>
            </div>
          </a>
          <div className="flex flex-col gap-4 mt-4 lg:flex-row lg:gap-4">
            <span></span>
            <button className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700" onClick={handleHomeClick}>
              Home
            </button>
          </div>
        </div>
      </section>

      <section className="grid w-full mt-32 mb-32 text-center lg:w-full lg:max-w-5xl lg:mb-2">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </section>      <div id="bottom-ads" className='flex flex-col items-center justify-center w-full bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:bg-none lg:static lg:flex-row lg:w-auto lg:h-auto fill bottom-0 left-0 p-4 lg:p-0'>
      
      </div>
    </main>
  );
};

export default All;
