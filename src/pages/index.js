'use client'
import React from 'react';
import { toPng } from 'html-to-image';

const Home = () => {

  const handleDownload = () => {
    const card = document.getElementById('card-template');

    toPng(card, { pixelRatio: 2 }) // Increase pixelRatio for higher resolution
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `card-template.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error('Failed to download image:', err);
      });
  };

  return (
    <div className='flex flex-col items-center justify-center lg:gap-6 gap-4 w-full h-screen lg:px-0 md:px-6 px-4'>

      <div id="card-template" className='lg:w-[460px] h-80 w-full mx-auto bg-[#121212] flex flex-col lg:gap-4 gap-2 lg:p-6 p-4'>

        <div className='flex items-start justify-between w-full'>

          <h1 className='font-serif lg:text-3xl text-2xl w-3/12 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#D0A847] via-[#FCF6BA] to-[#B58727]'>GAP INC.</h1>

          <img
            src="/qr.svg"
            alt="qr"
            className='w-24 h-24'
          />

        </div>

        <div className='flex flex-col'>

          <h2 className='uppercase lg:text-xl md:text-lg text-base font-semibold tracking-wide font-serif bg-clip-text text-transparent bg-gradient-to-r from-[#D0A847] via-[#FCF6BA] to-[#B58727]'>Kumar Gourav</h2>

          <p className='font-sans lg:text-base md:text-sm text-xs bg-clip-text text-transparent bg-gradient-to-r from-[#D0A847] via-[#FCF6BA] to-[#B58727]'>Lead Support</p>

        </div>

        <div className='flex flex-col gap-2'>

          <div className='flex items-center gap-1'>

            <img src="pin.svg" alt="pin" className='w-5 h-5' />

            <p className='text-sm font-sans bg-clip-text text-transparent bg-gradient-to-r from-[#D0A847] via-[#FCF6BA] to-[#B58727]'>Delhi, India</p>

          </div>

          <div className='flex items-center gap-1'>

            <img src="whatsapp.svg" alt="whatsapp" className='w-5 h-5' />

            <p className='text-sm font-sans bg-clip-text text-transparent bg-gradient-to-r from-[#D0A847] via-[#FCF6BA] to-[#B58727]'>+91 9731816547</p>

          </div>

          <div className='flex items-center gap-1'>

            <img src="mail.svg" alt="mail" className='w-5 h-5' />

            <p className='text-sm font-sans bg-clip-text text-transparent bg-gradient-to-r from-[#D0A847] via-[#FCF6BA] to-[#B58727]'>kumar@gap.com</p>

          </div>

        </div>

      </div>

      <div className='flex items-center justify-center lg:gap-4 gap-2 w-44 mx-auto'>

        <button onClick={handleDownload} className='bg-blue-600 text-white lg:text-base text-sm py-3 px-6 cursor-pointer'>
          Download
        </button>

      </div>



    </div>
  )
}

export default Home

