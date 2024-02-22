"use client";
import React from 'react';
import Image from 'next/image';
 
 
  
const Home = () => {
 
  const handleAboutClick = () => {
    window.location.href = '/about'; // Replace with your actual about page path
  };
  const handleRandomClick = () => {
    window.location.href = '/story'; // Replace with your actual about page path
  };
  
  const handlePanopticClick = () => {
    window.location.href = 'https://panopticpen.space'; // Replace with your actual about page path
  };
  const handleAllPostsClick = () => {
    window.location.href = '/all'; // Replace with your actual about page path
  };
  const randomPost: React.MouseEventHandler<HTMLButtonElement> = () => {
    // Implementation remains the same
  }
  return (
    <main className="flex flex-col items-center justify-between min-h-screen px-4 py-8 md:p-24">
      <section className="flex flex-col items-center w-full max-w-5xl font-mono text-sm lg:flex-row lg:justify-between">
        <div id="top-ads" className='flex flex-col items-center justify-center w-full bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:bg-none lg:static lg:flex-row lg:w-auto lg:h-auto fill bottom-0 left-0 p-4 lg:p-0'>
     
          </div>
        <div className="flex flex-col items-center justify-center w-full bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:bg-none lg:static lg:flex-row lg:w-auto lg:h-auto fill bottom-0 left-0 p-4 lg:p-0">
          <a
            href="https://panopticpen.space/bedtime-stories/"
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
          <button  onClick={handleRandomClick} className="px-4 py-2 font-bold text-white bg-purple-500 rounded hover:bg-purple-700">
              Random Pick
            </button>
            <button  onClick={handleAllPostsClick} className="px-4 py-2 font-bold text-white bg-orange-500 rounded hover:bg-orange-700">
              All Posts
            </button>
            <button className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700" onClick={handleAboutClick}>
      About
    </button>
    <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={handlePanopticClick}>
      Panoptic Pen
    </button>
          </div>
        </div>
      </section>

      <section className="grid w-full mt-32 mb-32 text-center lg:w-full lg:max-w-5xl lg:mb-2">
      <p className="text-center grid w-full lg:w-full leading-9">
      &quot;Dream away with every tale: Bedtime Stories, where every night is a journey. Unwind, dream, and explore, one story at a time.&quot; <br></br>
&quot;Under the stars of slumber, every tale whispers a journey. Welcome to Bedtime Stories, where dreams take flight.&quot;<br></br>
&quot;Close your eyes, open your imagination. Bedtime Stories: Your nightly escape into worlds unknown.&quot;<br></br>
&quot;Let the moon be your guide, and our tales your companions. Bedtime Stories, where every evening is an adventure.&quot;<br></br>
&quot;From the comfort of your pillow, to the farthest reaches of dreams. Bedtime Stories: Weave magic into your nights.&quot;<br></br>
&quot;As the night deepens, so do the tales. Bedtime Stories: Crafting dreams, one story at a time.&quot;<br></br>
&quot;Sail away on the sea of dreams with tales that enchant and soothe. Bedtime Stories: Your harbor in the night.&quot;<br></br>
&quot;Whispering tales to the stars, sharing dreams with the night. Bedtime Stories: Where every end is a new beginning.&quot;<br></br>
&quot;Let the night&apos;s embrace wrap you in tales of wonder. Bedtime Stories: Igniting imaginations, inspiring dreams.&quot;<br></br>
&quot;In the quiet of the night, our stories light the way to dreams. Bedtime Stories: Where the night whispers tales of magic.&quot;<br></br>
&quot;Dusk till dawn, our stories span the realms of imagination. Bedtime Stories: Where every night is a canvas of dreams.&quot;<br></br>

</p>
      </section>
      <div id="bottom-ads" className='flex flex-col items-center justify-center w-full bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:bg-none lg:static lg:flex-row lg:w-auto lg:h-auto fill bottom-0 left-0 p-4 lg:p-0'>
      
     </div>
    </main>
  );
}


export default Home;
