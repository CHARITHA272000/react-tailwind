import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <div className="bg-yellow-500">

      <div className='  bg-yellow-500 text-black static bottom-0 p-3 '>
      <div className=' flex justify-center items-center space-x-28 p-2 '>
      <Link><i class="icon-foter fab fa-twitter fa-2x "></i></Link>
      <Link><i class="icon-foter fab fa-facebook fa-2x"></i></Link>
      <Link><i class="icon-foter fab fa-instagram fa-2x"></i></Link>
      </div>
      <div className='text-center bg-yellow-500'><p className='pt-2  font-medium text-2xl leading-4 font-mono'> ©CultIndia</p></div>
      </div>
          
      </div>
  );
};
    


export default Footer

