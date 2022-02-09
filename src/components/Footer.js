import React from 'react';
import { MailIcon,LocationMarkerIcon } from "@heroicons/react/solid";

export default function Footer() {
  return <div>
      <div className='main bg-orange-900 h-14 flex items-center justify-center text-white'>
          <address className='mx-32 '>
              <a href="mailto:examcorner@gmail.com" className='flex items-center justify-center'> <MailIcon className='h-6 w-6 mx-1' /> examcorner@gmail.com</a>
          </address>
          <div className='mx-32 text-2xl '>exam corner</div>
          <div className='mx-32'>
              <a href="https://www.google.com/maps/place/AISSMS+Institute+of+Information+Technology/@18.531246,73.8649474,17z/data=!4m12!1m6!3m5!1s0x3bc2c0f55639f89f:0x22ed3d7c6b61cdf3!2sAISSMS+Institute+of+Information+Technology!8m2!3d18.531246!4d73.8671361!3m4!1s0x3bc2c0f55639f89f:0x22ed3d7c6b61cdf3!8m2!3d18.531246!4d73.8671361" className='flex items-center justify-center' target={'_blank'} rel="noopener noreferrer"> <LocationMarkerIcon className='h-5 w-5 mx-2'/> AISSMS IOIT</a>
          </div>
      </div>
  </div>;
}
