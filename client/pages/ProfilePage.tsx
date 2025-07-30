import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Fotopetinggi from '../assets/Foto_Petinggi-removebg-preview-dHaV_VfB.png';
import sekdes from '../assets/foto_sekdes-removebg-preview-Bmn2FfQJ.png'
import kaurumum from '../assets/foto_kaur_keuangan_-removebg-preview -D1WU4lzD.png'
import kaurUang from '../assets/foto_kaur_keuangan_-removebg-preview -D1WU4lzD.png'
import kasiPelayanan from '../assets/foto_kasi_kesejahteraan-removebg-preview-B5AZD2sG.png'
import kasiPemerintahan from '../assets/foto_kasi_pemerintahan-removebg-preview-BYz9udlT.png'
import staf1 from'../assets/Staf1-removebg-preview-B06X-HbE.png'
import staf from'../assets/staf-removebg-preview-De3Ve7_Z.png'
import HeaderCustom from "../components/Header";
import Aurora from "../components/Aurora";
import IntroDemograp from "../components/IntroDemograp";
import Profile from "../components/ProfileCard2";
import MyMap from "../components/Map";
import PieChart from "../components/PieChart";
import KpiStat4 from "../components/KpiStat4";

import BarChartAge from "../components/BarChart";
import BarChart1 from "../components/BarChart1";
import CustomizedDotChart from "../components/CustomizedDotLineChart";

const ProfilePage = () => {

  const ref = useRef(null);
  const isInView = useInView(ref);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(isInView);
  }, [isInView]);



  return (
<div>
 <HeaderCustom/>

 <Aurora/>
 <IntroDemograp/>

 


<h1 className=" mx-auto xl:text-3xl text-2xl flex justify-center font-sans font-bold mb-1 mt-40">Village Government</h1>
 


<Profile/>


 <MyMap/>






 <motion.h1 

   initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
className="mx-auto xl:text-3xl text-2xl flex justify-center font-sans font-bold mb-1 mt-40">Population Composition by Gender</motion.h1>
<PieChart/>
<motion.h2 
 initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}

className="mx-auto xl:text-3xl text-2xl flex justify-center font-sans font-bold mb-1 mt-40">Population Composition by Religion</motion.h2>
<KpiStat4/>
<motion.h3
 initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}

className="text-3xl flex justify-center font-sans font-bold mt-24">Population Composition by Age</motion.h3>
<BarChartAge/>
<motion.h4 
 initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}

className="mx-auto xl:text-3xl text-2xl flex justify-center font-sans font-bold mb-1 mt-[-200px] xl:mt-[-300px] md:mt-[-100px] ">livelihood of the population</motion.h4>
<BarChart1/>

<motion.h5 

 initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}

className="text-3xl flex justify-center font-sans font-bold mt-24">last education</motion.h5>
<CustomizedDotChart/> 





    </div>
  );
}
export default ProfilePage