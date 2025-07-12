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
    
    className="grid  lg:grid-cols-1 gap-0   mt-[10%]  h-200 mx-auto w-fit">

 <h1 className='text-5xl font-sans font-bold mx-auto w-fit mb-30'>Contact Me</h1>
      <SpotlightCard className="h-150 w-120">
      

<SpotlightCard>
    <InputForm/>
</SpotlightCard>
      </SpotlightCard>





    </motion.div>



  );
}
