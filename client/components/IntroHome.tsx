import sungaiImg from "../assets/sungai-DupnVGYu.jpg";
import monkeyImg from "../assets/monkey-C0jNnkSP.jpeg";
import humanImg from "../assets/human1-cbKT14Ki.jpeg";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import SpotlightCard from "../hooks/SpotlightCard";

import { Link } from "react-router-dom";


import CountUp from "../components/CountUp";




interface SlideArrowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  primaryColor?: string;
  href?: string;
  className?: string;
}

export default function IntroHome({
  text = "Get Started",
  href = "/src/pages/DestinationPage.tsx",
  className = "",
  ...props
}: SlideArrowButtonProps) {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(isInView);
  }, [isInView]);

  return (
    <div className=" w-full  mx-auto xl:mt-[-60px]  sm:px-8 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  xl:mx-30  items-center gap-8">


<div className="xl:grid-cols-1">
        {/* Heading Section */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className=" mt-10 text-3xl lg:w-full lg:mx-auto sm:text-4xl lg:text-6xl  xl:mt-50   font-bold text-white font-sans   "
          style={{ textShadow: "6px 10px 20px #999999" }}
        >
          Discover The Cultural Legacy of the Dayak Benuaq
        </motion.h1>


{/* Description & Button */}
      <div className="mt-8  md:flex-row md:items-start gap-6 md:gap-32 max-w-6xl lg:mx-auto lg:w-fit xl:ml-3 xl:grid-cols-1  ">
     


<motion.p 

 initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}


className="xl:w-xl">Explore the vibrant traditions of the Dayak Benuaq—an indigenous people of Borneo known for their deep connection to nature, spiritual rituals, and rich artistic heritage. Their legacy lives on through stories, ceremonies, and cultural resilience passed down through generations.</motion.p>




        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          
        >
          <button
            onClick={() => navigate("/HistoryPage")}
            className={`group relative rounded-full border border-none bg-gradient-to-r from-blue-800 to-purple-500 px-6 py-3 text-lg w-50 xl:mt-10 lg:mt-8 mt-5 ml-17 font-semibold transition-all duration-700    ${className}`}
            {...props}
          >
            <div className="absolute left-0 top-0 flex h-full w-14 items-center justify-end rounded-full transition-all duration-500 ease-in-out group-hover:w-full bg-gradient-to-r from-blue-800 to-purple-200">
              <span className="mr-4 text-white transition-all duration-200 ease-in-out">
                <ArrowRight size={20} />
              </span>
            </div>
            <span className="relative left-4 z-10 whitespace-nowrap font-semibold text-white transition-all duration-200 ease-in-out group-hover:-left-3 group-hover:text-white">
              {text}
            </span>
          </button>
        </motion.div>
      </div>

</div>










        {/* Images */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:ml-10 lg:w-full xl:mt-10 ">
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            src={sungaiImg}
            alt="Main"
            className="w-full  lg:w-60 xl:w-90 xl:mb-7 max-w-xs rounded-xl shadow-lg 
          
            
            
            
            lg:hover:scale-105 transition-transform duration-500"
          />
          <div className="flex flex-col gap-4">
            <motion.img
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              src={monkeyImg}
              alt="Monkey"
              className="w-full lg:w-90 xl:w-50 sm:w-100   rounded-xl shadow-lg lg:hover:scale-105 lg:transition-transform lg:duration-500"
            />
            <motion.img
              src={humanImg}
              alt="Human"
              className="w-100 lg:w-full xl:w-50 rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      


{/*spotlight Section 1 */}
<motion.div 
       initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1}}
    
    
    className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-12 max-w-full mx-auto lg:mb-10 ">
      <a href="https://www.infokubar.id/lamin-mancong-rumah-panjang-legendaris-di-kutai-barat/">

      <SpotlightCard className="h-120  md:h-161 lg:h-132 xl:h-full">
      
        {/* <img className="w-12 h-auto border-2 rounded-xl border-white"src='' alt=""  /> */}
<p>M.Kadapi</p>
        <p className="text-gray-400 ">23 Juni,2021</p>




        <h3 className="text-white font-bold text-m mb-2">Lamin Mancong, Rumah Panjang Legendaris di Kutai Barat</h3>

<SpotlightCard>
        <p className="text-white text-sm">www.infokubar.id </p>
        <p  className="text-gray-200 text-sm">Seperti halnya salah satu kampung yang terdapat di Kecamatan Jempang ini, yaitu Kampung Mancong yang terkenal luas hingga mancanegara akan bangunan megah rumah</p>
</SpotlightCard>
      </SpotlightCard>

</a>
<motion.div 
 



className="grid grid-cols-1  md:grid sm:grid-cols-1 lg:grid-cols-1 gap-3 p-0 mt-0 h-104 lg:w-68">
      <SpotlightCard 
      className="bg-gradient-to-r from-blue-800 to-purple-500 h-65 lg:h-70 xl:h-50 xl:w-100 xl:mb-1">




        <h3 className="text-white font-extrabold text-2xl mb-2">Tourism At 2023 </h3>
<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 sm:grid-cols-2 xl:grid-cols-2">
      <CountUp 
  from={0}
  to={331}
  separator=","
  direction="up"
  duration={8}
  className="count-up-text font-bold text-8xl text-white mb-2"
  onStart={() => {}} 
  onEnd={() => {}}
/>
 <span className="font-bold text-4xl sm:text-7xl lg:text-5xl xl:font-light text-white ">People</span>
      </div>
      </SpotlightCard>



      <SpotlightCard className="h-93 lg:h-58 lg:mt-1  xl:h-50 xl:w-100 xl:mt-3 lg:w-67">
        <div className=" grid grid-cols-1  sm:grid-cols-1  lg:grid-cols-1   xl:grid-cols-2 xl:mt-2 gap-0 p-0 mt-0  h-auto w-100 lg:mt-[-20px] gap-x-6">
      <img className="h-auto  ml-5 rounded-2xl w-40 lg:w-40 lg:mb-5 " src="https://www.borneotourguide.com/wp-content/uploads/2020/04/mahakam-river-tour-www.borneotourguide-212.jpg" alt="" /> 

      <p className=" w-50 mt-10   lg:w-50   xl:w-35 lg:mt-[-2px]    sm:text-sm sm:w-50 sm:mt-10  ">The Mancong dayak village has one attraction to welcome every visitors in front of the grand traditional longhouse.</p>


      
</div>
      </SpotlightCard>
</motion.div>

<motion.div
   initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1}}

className="grid grid-cols-1 md:grid-cols-2     lg:grid-cols-1 gap-4 p-0 mt-55 lg:mt-0  h-auto w-full mx-auto md:mt-0 gap-x-6 ">


      <Link to ="/GalleryPage">
<SpotlightCard className="lg:h-70 md:w-70 xl:h-auto lg:w-auto ">
  <h3 className="text-white font-bold text-xl mb-2">Sengkopeh</h3>
        <p className="text-white">is a rattan fighting tradition originating from the Dayak Benuaq and Dayak Tunjung tribes of East Kalimantan.</p>


</SpotlightCard>
  </Link>        


    <Link to ="/GalleryPage">
      <SpotlightCard className="  sm:mt-5 bg-gradient-to-r from-blue-800 to-purple-500 h-full xl:h-auto w-full xl:mt-4 lg:w-auto md:ml-40 lg:h-59 md:mt-0 md:w-70 lg:mx-auto ">
        <h3 className="text-white font-bold text-xl mb-2">Ulap Doyo</h3>
        <p className="text-white">Ulap Doyo weaving has been famous since the time of the Kutai Kingdom, when social differentiation based on class and strata still applied.</p>
      </SpotlightCard>
      </Link>
      </motion.div>

    </motion.div>
{/*spotlight section 1*/}


{/*spotilight section 2*/}
 <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="px-4 py-10 lg:mx-auto  "
    >
      <h1 className="text-4xl sm:text-5xl font-bold font-sans mb-10 text-center sm:text-left">
        Keep Tour Guide
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  gap-8">
        {/* Card 1 */}
        <SpotlightCard className="flex flex-col justify-between lg:w-auto lg:h-full ">
          <div>
            <h2 className="text-xl font-bold font-sans mb-4">Kalimantan Tour Guide</h2>
            <SpotlightCard>
              <p>
                Our lovely clients from German, Frank & Andi asking for visiting the famous
                Pampang village. They are so happy could meet one of local Dayak man
              </p>
            </SpotlightCard>
          </div>

          <div className="mt-6">
            <a href="https://web.facebook.com/kalimantantourguide?ref=embed_page">
              <svg
                className="mx-auto sm:mx-0 mt-[-7%]"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="150"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#ffffff"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                >
                  <g transform="scale(5.12,5.12)">
                    <path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </SpotlightCard>

        {/* Card 2 */}
        <SpotlightCard className="flex flex-col justify-between h-full lg:w-full lg:h-full">
          <div>
            <h2 className="text-xl font-bold font-sans mb-4">Mahakam Explore</h2>
            <SpotlightCard>
              <p>
                Experienced and reliable tour guide in East Kalimantan: My special tour
                for mahakam dolphin observation and also other tour like orang utan,
                birdwatching, local culture & event, fishing,
              </p>
            </SpotlightCard>
          </div>

          <div className="grid grid-cols-3 gap-1 mt-6">
            <a href="https://www.instagram.com/mahakam_explore/">
              <svg
                
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="55"
                height="150"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#ffffff"
                  fillRule="nonzero"
                  stroke="none"
                  strokeWidth="1"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeMiterlimit="10"
                  strokeDasharray=""
                  strokeDashoffset="0"
                  fontFamily="none"
                  fontWeight="none"
                  fontSize="none"
                  textAnchor="none"
                >
                  <g transform="scale(4,4)">
                    <path d="M21.58008,7c-8.039,0 -14.58008,6.54494 -14.58008,14.58594v20.83203c0,8.04 6.54494,14.58203 14.58594,14.58203h20.83203c8.04,0 14.58203,-6.54494 14.58203,-14.58594v-20.83398c0,-8.039 -6.54494,-14.58008 -14.58594,-14.58008zM47,15c1.104,0 2,0.896 2,2c0,1.104 -0.896,2 -2,2c-1.104,0 -2,-0.896 -2,-2c0,-1.104 0.896,-2 2,-2zM32,19c7.17,0 13,5.83 13,13c0,7.17 -5.831,13 -13,13c-7.17,0 -13,-5.831 -13,-13c0,-7.169 5.83,-13 13,-13zM32,23c-4.971,0 -9,4.029 -9,9c0,4.971 4.029,9 9,9c4.971,0 9,-4.029 9,-9c0,-4.971 -4.029,-9 -9,-9z"></path>
                  </g>
                </g>
              </svg>
            </a>


   <a href="https://web.facebook.com/juhur.juhur.3">
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="55" height="150" viewBox="0,0,256,256">
<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M25,3c-12.15,0 -22,9.85 -22,22c0,11.03 8.125,20.137 18.712,21.728v-15.897h-5.443v-5.783h5.443v-3.848c0,-6.371 3.104,-9.168 8.399,-9.168c2.536,0 3.877,0.188 4.512,0.274v5.048h-3.612c-2.248,0 -3.033,2.131 -3.033,4.533v3.161h6.588l-0.894,5.783h-5.694v15.944c10.738,-1.457 19.022,-10.638 19.022,-21.775c0,-12.15 -9.85,-22 -22,-22z"></path></g></g>
</svg>

                    </a>


<a href="https://www.youtube.com/@MahakamExplore">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="65" height="150" viewBox="0,0,256,256">
<g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" ><g transform="scale(5.12,5.12)"><path d="M44.89844,14.5c-0.39844,-2.19922 -2.29687,-3.80078 -4.5,-4.30078c-3.29687,-0.69922 -9.39844,-1.19922 -16,-1.19922c-6.59766,0 -12.79687,0.5 -16.09766,1.19922c-2.19922,0.5 -4.10156,2 -4.5,4.30078c-0.40234,2.5 -0.80078,6 -0.80078,10.5c0,4.5 0.39844,8 0.89844,10.5c0.40234,2.19922 2.30078,3.80078 4.5,4.30078c3.5,0.69922 9.5,1.19922 16.10156,1.19922c6.60156,0 12.60156,-0.5 16.10156,-1.19922c2.19922,-0.5 4.09766,-2 4.5,-4.30078c0.39844,-2.5 0.89844,-6.10156 1,-10.5c-0.20312,-4.5 -0.70312,-8 -1.20312,-10.5zM19,32v-14l12.19922,7z"></path></g></g>
</svg>

</a>



          </div>
        </SpotlightCard>
      </div>
    </motion.div>

{/*spotilight section 2*/}



{/*Spotlight section 3*/}

 <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="px-4 py-8 max-w-7xl mx-auto   "
      ref={ref}
    >
      {/* Judul utama */}
      <div className="text-center mb-10 ">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans">
          Visit Tanjung Isuy
        </h1>
      </div>

      <SpotlightCard className="overflow-x-hidden ">
        {/* Subjudul */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-sans">
            Mahakam Explore
          </h2>
        </div>

        {/* Video Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="w-full">
            <iframe
              className="w-full h-100 rounded-xl aspect-video "
              src="https://youtube.com/embed/kzeP6-qeHAc?loop=1"
              title="YouTube video player 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="w-full">
            <iframe
              className="w-full h-100 rounded-xl aspect-video"
              src="https://youtube.com/embed/YyH27GyewoA?loop=1"
              title="YouTube video player 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

       
      </SpotlightCard>
    </motion.div>
{/*Spotlight section 3*/}




    </div>




  );
}
