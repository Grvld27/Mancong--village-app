import sungaiImg from "../assets/sungai.jpg";
import monkeyImg from "../assets/monkey.jpeg";
import humanImg from "../assets/human1.jpeg";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
interface SlideArrowButtonProps extends React.


ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  primaryColor?: string;
  href?: string;
}





export default function IntroHome({
  text = "Get Started",

  href = "/src/pages/DestinationPage.tsx",
  className = "",
  ...props
}: SlideArrowButtonProps) {


const navigate = useNavigate();

{  // Using useRef to track the visibility of the component}
 const ref = useRef(null);
  const isInView = useInView(ref);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(isInView);
  }, [isInView]);


  return (
    <div
    




      className="flex flex-col items-center px-4 py-8 md:py-16 font-[Roboto]">
       <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
       
       className="font-bold text-5xl font-sans mt-[4rem] md:mb-[5%] md:ml-[-94%] md:mr-[-50%] w-sm hover:scale-105 transition-transform duration-500 "
    
    style={{
textShadow:' 6px 10px 20px #999999'
    }} > Discover The Cultural Legacy of the Dayak Benuaq</motion.h1>




    
      <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-[13rem] w-full max-w-6xl">
        {/* Text */}
        <div>
          <motion.p

   initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}

            style={{ textShadow: "6px 10px 20px #999999" }}
   
            className=" text-m text-gray-400  mb-6 md:mb-[1] md:mt-[-2rem] drop-shadow-sm md:ml-[37%] md:mr-[-50%] text-justify max-w-[500px] "
          >
 Dayak
            Benuaq people, one of the Dayak tribes rich in traditions, culture,
            and local wisdom.
          </motion.p>
        </div>

        {/* Images */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-8 md:mt-[-22%] md:mb-[-20%] md:ml-[6%] w-full md:w-[62%]">
     
              <motion.img

                 initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
                src={sungaiImg}
                alt="Main"
       
                className="w-[383px] rounded-xl shadow-[10px_20px_20px_2px_rgba(255,255,255,0.18)] mt-[30%] md:mt-0 md:w-[57%] md:mb-2 hover:scale-105 transition-transform duration-500"
              />
         
        

          <div className="flex flex-col gap-6 md:mt-[-0%]">
            <motion.img
               initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
              src={monkeyImg}
              alt="Monkey"
            
              
     
              className="w-[309px] md:w-[13rem] rounded-xl shadow-[10px_20px_20px_2px_rgba(255,255,255,0.18)] ml-7 md:ml-2 hover:scale-105 transition-transform duration-500"
            />
            <motion.img
              src={humanImg}
              alt="Human"
  
              className="w-[22rem] md:w-[15rem] rounded-xl shadow-[10px_20px_20px_2px_rgba(255,255,255,0.18)] object-cover mt-4 ml-0 md:ml-1  hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>



<motion.div


   initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}

>
  <button

  
  
  onClick={() => navigate('/HistoryPage')}
      className={`group relative rounded-full border border-none bg-gradient-to-r from-blue-800 to-purple-500 p-2 mr-160 text-xl font-semibold  animate-none transition-all duration-700 ${className}  `}
      {...props}
    >
      <div
        className="absolute left-0 top-0 flex h-full w-11 items-center justify-end rounded-full transition-all duration-500 ease-in-out group-hover:w-full bg-gradient-to-r from-blue-800 to-purple-200"

      >
        <span className="mr-3 text-white transition-all duration-200 ease-in-out">
          <ArrowRight size={20} />
        </span>
      </div>
      <span className="relative left-4 z-10 whitespace-nowrap px-8 font-semibold text-white transition-all duration-200 ease-in-out group-hover:-left-3 group-hover:text-white">
        {text}
      </span>
    </button>
      </motion.div>
    </div>

    
  );
}

}
