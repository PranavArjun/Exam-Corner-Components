import React from 'react';

export default function Headbar(props) {
  return <div className='main bg-orange-900 h-24 flex justify-center items-center'>
      <h2 className='text-white font-san text-5xl'> {props.heading}</h2>
  </div>;
}
