import SpotlightCard from "../hooks/SpotlightCard";
import { useState,useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

export default function SpotlightSection1() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [visible, setVisible] = useState(false);

useEffect(() => {
  setVisible(isInView);
}, [isInView]);

  
  return (
    <motion.div
    
       initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1}}
    
    
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-10 h-200">


      <h1 className='text-5xl font-sans font-bold w-70  mt-0 ml-10 mb-30'>Keep Tour Guide</h1>

      

      <SpotlightCard className="h-100 ">
      <div className="grid grid-cols-2 gap-0 p-0 mt-0 h-auto w-30 gap-x-0">  

        <h1 className="font-sans text-2xl font-bold w-50">Kalimantan Tour Guide</h1>
</div>

   <SpotlightCard className="mt-10">
<p>Our lovely clients from German, Frank & Andi asking for visiting the famous Pampang village.
They are so happy could meet one of local Dayak man</p>

   </SpotlightCard>
<a href="https://web.facebook.com/kalimantantourguide?ref=embed_page">
   <svg className="mt-[-7%]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="150" viewBox="0,0,256,256">
<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path></g></g>
</svg>
</a>

      </SpotlightCard>


      <SpotlightCard className="h-100 ">
      <div className="grid grid-cols-2 gap-0 p-0 mt-0 h-auto w-30 gap-x-0">  

        <h1 className="font-sans text-2xl font-bold w-50">Mahakam Explore</h1>
</div>

   <SpotlightCard className="mt-10 h-40">
<p >Experienced and reliable tour guide in East Kalimantan: My special tour for mahakam dolphin observation and also other tour like orang utan, birdwatching, local culture & event, fishing,</p>

   </SpotlightCard>
   <div className="grid grid-cols-3 gap-4 p-0 mt-[-7%] h-auto w-60 gap-x-0">
<a href="https://www.instagram.com/mahakam_explore/">
<svg className="mt-[-7%]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="55" height="150" viewBox="0,0,256,256">
<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(4,4)"><path d="M21.58008,7c-8.039,0 -14.58008,6.54494 -14.58008,14.58594v20.83203c0,8.04 6.54494,14.58203 14.58594,14.58203h20.83203c8.04,0 14.58203,-6.54494 14.58203,-14.58594v-20.83398c0,-8.039 -6.54494,-14.58008 -14.58594,-14.58008zM47,15c1.104,0 2,0.896 2,2c0,1.104 -0.896,2 -2,2c-1.104,0 -2,-0.896 -2,-2c0,-1.104 0.896,-2 2,-2zM32,19c7.17,0 13,5.83 13,13c0,7.17 -5.831,13 -13,13c-7.17,0 -13,-5.831 -13,-13c0,-7.169 5.83,-13 13,-13zM32,23c-4.971,0 -9,4.029 -9,9c0,4.971 4.029,9 9,9c4.971,0 9,-4.029 9,-9c0,-4.971 -4.029,-9 -9,-9z"></path></g></g>
</svg>
</a>

<a href="https://web.facebook.com/juhur.juhur.3">

 <svg className="mt-[-7%]" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="150" viewBox="0,0,256,256">
<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path></g></g>
</svg>
</a>
<a href="https://www.youtube.com/c/MahakamExplore">
  <svg className="mt-[-6%]"  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="66" height="150" viewBox="0,0,256,256">
<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M44.89844,14.5c-0.39844,-2.19922 -2.29687,-3.80078 -4.5,-4.30078c-3.29687,-0.69922 -9.39844,-1.19922 -16,-1.19922c-6.59766,0 -12.79687,0.5 -16.09766,1.19922c-2.19922,0.5 -4.10156,2 -4.5,4.30078c-0.40234,2.5 -0.80078,6 -0.80078,10.5c0,4.5 0.39844,8 0.89844,10.5c0.40234,2.19922 2.30078,3.80078 4.5,4.30078c3.5,0.69922 9.5,1.19922 16.10156,1.19922c6.60156,0 12.60156,-0.5 16.10156,-1.19922c2.19922,-0.5 4.09766,-2 4.5,-4.30078c0.39844,-2.5 0.89844,-6.10156 1,-10.5c-0.20312,-4.5 -0.70312,-8 -1.20312,-10.5zM19,32v-14l12.19922,7z"></path></g></g>
</svg>
</a>
</div>
      </SpotlightCard>


    </motion.div>



  );
}
