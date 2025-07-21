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
      className="  mt-50 font-bold text-2xl font-sans"



      >  A Closer Look at Our People</motion.h1>


<div 



className="grid grid-cols-2 gap-2">
   <motion.p
     initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
   
   className= "mt-20   text-m font-sans text-gray-400 w-2xl">
 Discover how population data reveals the dynamics of our society — from age and gender to education, employment, and more. 
 These insights help shape informed decisions and smarter development.
   </motion.p>


<motion.img
  initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}

 
className=" h-auto w-150 rounded-2xl  "src={KantorDesa} alt="" 
/>

</div>


      </div>

    )
}



export default IntroDemograp;