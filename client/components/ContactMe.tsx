import SpotlightCard from "../hooks/SpotlightCard";
import { useState,useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";``
import CountUp from "../components/CountUp";
import InputForm from "../components/FormInput";



export default function ContactMe() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(isInView);
  }, [isInView]);
  
  return (
    
    <motion.div 
        initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
    
    className="grid  lg:grid-cols-1 gap-0 overflow-hidden lg:mx-auto lg:w-150">

 <h1 className='text-5xl  lg:text-2xl  font-sans font-bold mx-auto mb-10 '>Contact Me</h1>
      <SpotlightCard className="lg:h-auto lg:w-full lg:mx-auto mb-70 ">
      

<SpotlightCard className="lg:w-full lg:h-auto">
    <InputForm/>
</SpotlightCard>
      </SpotlightCard>





    </motion.div>



  );
}
