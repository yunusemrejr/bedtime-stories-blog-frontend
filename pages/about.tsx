
"use client";
import React from 'react';
import Image from 'next/image';
 import '../app/globals.css';
   
const About = () => {
 
  const handleHomeClick = () => {
    window.location.href = '/';  
  };
  const randomPost: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    // Implementation remains the same
  }
  return (
    <main className="flex flex-col items-center justify-between min-h-screen px-4 py-8 md:p-24">
      <section className="flex flex-col items-center w-full max-w-5xl font-mono text-sm lg:flex-row lg:justify-between">
      <div id="top-ads" className='flex flex-col items-center justify-center w-full bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:bg-none lg:static lg:flex-row lg:w-auto lg:h-auto fill bottom-0 left-0 p-4 lg:p-0'>
     
     </div> <div className="flex flex-col items-center justify-center w-full bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:bg-none lg:static lg:flex-row lg:w-auto lg:h-auto fill bottom-0 left-0 p-4 lg:p-0">
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
      <p className="text-center grid w-full lg:w-full leading-9">
      Welcome to Bedtime Stories by The Panoptic Pen Blog, the home of enchanting bedtime stories for dreamers of all ages.

In a world where technology and imagination intertwine, Bedtime Stories by The Panoptic Pen Blog stands as a beacon for those seeking to end their day on a note of wonder and tranquility. Born from a vision to harness the boundless potential of artificial intelligence for creativity, our website offers a unique collection of bedtime stories, each woven with care and a touch of magic by our AI storytellers.

Our Journey

Bedtime Stories by The Panoptic Pen Blog was conceived by a group of dreamers, storytellers, and technologists who believed in the transformative power of stories. Recognizing the potential of AI to unlock new realms of creativity, we embarked on a journey to create a platform where technology serves as the quill and imagination as the ink. Our mission is simple yet profound: to provide a sanctuary where adults and children alike can immerse themselves in tales of wonder before drifting off to sleep.

 
 Why AI-Generated Stories?

In embracing AI, we tap into an unending well of creativity. This technology allows us to offer a vast, ever-growing library of stories, ensuring that the wonder of bedtime reading never grows old. Furthermore, AI-generated stories carry the promise of endless variety, ensuring that each visit to Bedtime Stories by The Panoptic Pen Blog offers a new adventure, a new dream to be dreamt.

Our Commitment

At Bedtime Stories by The Panoptic Pen Blog, we are committed to:

Innovation: Continuously improving our AI to bring you stories that delight, inspire, and soothe.
Quality: Ensuring each story passes our standards for warmth, wonder, and wisdom.
Community: Listening to our readers, welcoming feedback, and fostering a community of story lovers.
</p>
      </section>      <div id="bottom-ads" className='flex flex-col items-center justify-center w-full bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:bg-none lg:static lg:flex-row lg:w-auto lg:h-auto fill bottom-0 left-0 p-4 lg:p-0'>
      
      </div>
    </main>
  );
}


export default About;
