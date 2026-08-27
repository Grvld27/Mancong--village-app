//components
import { useState, useRef, useEffect } from "react";

import { style } from "framer-motion/client";
import SpotlightCard from "../hooks/SpotlightCard";
import KantorDesa from "../assets/Demograp-BCOJeXac.jpeg"
import { motion, useInView } from "framer-motion";
function IntroDemograp () {

  const ref = useRef(null);
  const isInView = useInView(ref);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(isInView);
  }, [isInView]);


    return(

      
      <div >

      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
      className=" text-4xl sm:text-5xl font-bold font-sans   mt-50 "



      >  A Closer Look at Our People</motion.h1>


<div 



className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-2">
   <motion.p
     initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
   
   className= "mt-20 mb-10 xl:text-xl    text-auto font-sans text-white w-auto  xl:w-2xl">
 Discover how population data reveals the dynamics of our society — from age and gender to education, employment, and more. 
 These insights help shape informed decisions and smarter development.
   </motion.p>



   <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg xl:mt-[-140px] xl:w-130">
      {/* Gambar dengan animasi */}
      <motion.img
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        src={KantorDesa}
        alt="Kantor Desa"
        className="w-full h-auto object-cover"
      />

      {/* Overlay gradasi hitam di atas */}
      <div className="absolute top-0 left-0 w-full  h-3/3 bg-gradient-to-t from-black/90 to-transparent opacity-100 z-20" />
    </div>

{/* 
<motion.img
  initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}

 
className=" h-auto w-auto md:w-lg md:mx-auto rounded-2xl   "src={KantorDesa} alt="" 
/> */}

</div>


      </div>

    )
}



export default IntroDemograp;