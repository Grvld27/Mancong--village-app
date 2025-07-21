import SpotlightCard from "../hooks/SpotlightCard";

import CountUp from "../components/CountUp";
import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function SpotlightSection() {
  
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
    
    
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-12 mb-[-20pc] h-200">
      <a href="https://www.infokubar.id/lamin-mancong-rumah-panjang-legendaris-di-kutai-barat/">

      <SpotlightCard className="h-100">
      
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
 



className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-0 p-0 mt-0 h-104">
      <SpotlightCard 
      className="bg-gradient-to-r from-blue-800 to-purple-500 h-45 ">




        <h3 className="text-white font-extrabold text-2xl mb-2">Tourism At 2023 </h3>

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

  
 <span className="font-bold text-5xl text-white ">People</span>
      
      </SpotlightCard>



      <SpotlightCard className="h-50">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-0 p-0 mt-0 h-auto w-100 gap-x-6">
      <img className="h-30 rounded-2xl w-40" src="https://www.borneotourguide.com/wp-content/uploads/2020/04/mahakam-river-tour-www.borneotourguide-212.jpg" alt="" /> 

      <p className="text-sm">The Mancong dayak village has one attraction to welcome every visitors in front of the grand traditional longhouse.</p>


      
</div>
      </SpotlightCard>
</motion.div>

<motion.div
   initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1}}

className="grid grid-cols-2 gap-0 p-0 mt-0 h-auto w-100 gap-x-6">
            <SpotlightCard className="bg-gradient-to-r from-blue-800 to-purple-500 h-45">
  <img className="rounded-2xl w-70 h-20 mt-4.5" src="https://indonesiakaya.com/wp-content/uploads/2020/10/7__IMG_2534_Serat-serat_daun_doyo_dijalin_dan_dilinting_menjadi_benang_kasar_seperti_ini.jpg" alt="" />
      </SpotlightCard>

      <SpotlightCard className="bg-gradient-to-r from-blue-800 to-purple-500 h-45 ">
<img className="rounded-2xl mt-2.5 w-xl" src="https://1001indonesia.net/asset/2019/01/Tenun-ULap-Doyo-696x513.jpg" alt="" />
      </SpotlightCard>

      

      <SpotlightCard className="mt-[-142%] bg-gradient-to-r from-blue-800 to-purple-500 h-50 w-100">
        <h3 className="text-white font-bold text-xl mb-2">Ulap Doyo</h3>
        <p className="text-white">Ulap Doyo weaving has been famous since the time of the Kutai Kingdom, when social differentiation based on class and strata still applied.</p>
      </SpotlightCard>
      </motion.div>

    </motion.div>



  );
}
