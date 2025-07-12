import { useState,useRef, useEffect } from "react";
import reactlogo from '../assets/React.png'
import vitelogo from '../assets/Vite.png'

import tailwindlogo from '../assets/Tailwind_CSS_Logo.svg.png'
import expresslogo from '../assets/ExpressJs.png'
import mongodblogo from '../assets/mongoDB.png'
import Profile from "../assets/foto di sempaja.jpg";
import SpotlightCard from "../hooks/SpotlightCard";
// React
import { motion, useInView } from "framer-motion";

// React Server Components


function MiniMenuDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);


 


  return (
    <>
      {/* Mini Icon Button */}


    
      <motion.button
  
whileTap={{
backgroundColor:'gray',
   scale: 1.8,


}}


          whileHover={{ 
          
    scale: 1.06,

    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
            
            }}
          transition={{ duration: 0.3}}
        onClick={toggleDrawer}
        className="fixed top-[600px] right-6 z-50 bg-white rounded-full p-2 hover:bg-gray-200 transition"
        aria-label="Help"
      >
        {/* SVG Icon tanda tanya */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-black"
          fill="black"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={0}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M 12 2 C 10.343 2 9 3.343 9 5 C 9 6.657 10.343 8 12 8 C 13.657 8 15 6.657 15 5 C 15 3.343 13.657 2 12 2 z M 9 10 A 1.0001 1.0001 0 1 0 9 12 L 10 12 L 10 20 L 9 20 A 1.0001 1.0001 0 1 0 9 22 L 15 22 A 1.0001 1.0001 0 1 0 15 20 L 14 20 L 14 11 C 14 10.448 13.552 10 13 10 L 11 10 L 9 10 z"
          />
        </svg>
      </motion.button>

      {/* Drawer Panel */}
     
      

     
     
 

      {/* Backdrop */}
  {isOpen && (
 <div
  className="fixed inset-0  bg-gradient bg-transparent backdrop-blur-sm  z-30 flex items-center justify-center   transition-transform duration-500 ease-in-out 
  ${isOpen ? 'translate-x-0' : 'translate-x-full "
  onClick={closeDrawer}
>
  <div
  
    onClick={(e) => e.stopPropagation()}
  >
  <motion.div className="grid grid-cols-2 gap-0"

  // Animate when this value changes:
  animate={{ scale: 0.9 }}
  // Fade in when the element enters the viewport:
  whileInView={{ opacity: 1 }}
  // Animate the component when its layout changes:
  layout
  // Style now supports indepedent transforms:
  style={{ x: 10 }}
  
  >


<SpotlightCard className="w-200">


  <div className="grid grid-cols-2 gap-0 p-0 mt-0 h-auto w-30 gap-x-0">  
    <h1 className="font-sans text-2xl font-bold w-50">Mancong Village v1.0</h1>
  </div>

  <SpotlightCard className=" h-100 mt-10">
    <p className="text-gray-500 justify-items-start text-start">On the banks of the Mahakam River, a village is hidden that holds local wisdom, customs, and stories of the past that are still alive—that is Kampung Mancong.
Through this website, we invite you to explore the corridors of time: get to know the Dayak Benuaq culture, see traditional ceremonies, explore the pristine nature, and feel the friendliness of our people.
Welcome, and enjoy exploring Kampung Mancong digitally.</p>
<h1 className="mt-5 font-bold">Disclaimer</h1>
<p className="mt-5">All images included in this assignment were obtained from various sources and are used strictly for educational purposes. Copyright and ownership remain with the original creators.</p>
  </SpotlightCard>


</SpotlightCard>

</motion.div>




    {/* <p className="text-xl font-bolder font-sans mb-6">Tech Stack</p> */}

    

      {/* Tailwind CSS */}
      {/* <div className="flex flex-col items-center ">
        <img src={tailwindlogo} alt="Tailwind CSS" className="w-35 h-auto    transition transform duration-500 ease-in-out hover:scale-110    mt-8  " />
 
      </div> */}

      {/* Express.js */}
      {/* <div className="flex flex-col items-center transition transform hover:scale-110 ">
      
  
      </div> */}

      {/* MongoDB */}
      {/* <div className="flex flex-col items-center transition transform duration-500 ease-in-out hover:scale-110">
      

      </div> */}

      {/* Vite */}
      {/* <div className="flex flex-col items-center transition transform  duration-500 ease-in-out hover:scale-110 ">
        <img src={vitelogo} alt="Vite" className="w-35 h-auto" />

      </div> */}


    </div>
  </div>


)}

    </>
  );
}

export default MiniMenuDrawer;
