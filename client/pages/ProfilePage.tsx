import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import petinggi from '../assets/Foto_Petinggi-removebg-preview.png';
import sekdes from '../assets/foto_sekdes-removebg-preview.png'
import kaurumum from '../assets/foto_kaur_umum-removebg-preview.png'
import kaurUang from '../assets/foto_kaur_keuangan_-removebg-preview .png'
import kasiPelayanan from '../assets/foto_kasi_kesejahteraan-removebg-preview.png'
import kasiPemerintahan from '../assets/foto_kasi_pemerintahan-removebg-preview.png'
import staf1 from'../assets/Staf1-removebg-preview.png'
import staf from'../assets/staf-removebg-preview.png'
import HeaderCustom from "../components/Header";
import Aurora from "../components/Aurora";
import IntroDemograp from "../components/IntroDemograp";
import ProfileCard from "../components/ProfileCard";

import PieChart from "../components/PieChart";
import KpiStat4 from "../components/KpiStat4";
import MyMap from "../components/Map";
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

 


<h1 className="text-3xl flex justify-center font-sans font-bold mb-1 mt-40">Village Government</h1>
  <div className="grid grid-cols-8 ml-50 gap-8 px-10 py-10">
  <div className="col-span-4">
    <ProfileCard
      className="ml-8 mt-8"
      name="Aspiransyah"
      title="Village Head"
      handle="Aspiransyah"
      status="Online"
      contactText="Contact Me"
      avatarUrl={petinggi}
      showUserInfo={true}
           contactHref='*'
      enableTilt={true}
      onContactClick={() => console.log("Contact clicked")}
    />
  </div>

  <div className="col-span-3">
    <ProfileCard
      className="ml-8 mt-8"
      name="Cristianus Renaldy"
      title="Village Secretary"
      handle="Cristianus Renaldy"
      status="Online"
      contactText="Contact Me"
      avatarUrl={sekdes}
      showUserInfo={true}
           contactHref='https://wa.me/6282251060456'
      enableTilt={true}
      onContactClick={() => console.log("Contact clicked")}
    />

  </div>
    <div className="col-span-4">
    <ProfileCard
      className="ml-8 mt-8"
      name="Jacksen Kamsien"
      title="Head Of general Affairs and Planning"
      handle="Jacksen Kamsien"
      status="Online"
      contactText="Contact Me"
      avatarUrl={kaurumum}
      showUserInfo={true}
      enableTilt={true}
        contactHref='https://wa.me/6281347915299'
      onContactClick={() => console.log("Contact clicked")}
    />
    
  </div>

    <div className="col-span-4">
    <ProfileCard
      className="ml-8 mt-8"
      name="Yohanes Riki M."
      title="Head Of financial affairs"
      handle="Yohanes Riki M."
      status="Online"
      contactText="Contact Me"
      avatarUrl={kaurUang}
      showUserInfo={true}
           contactHref='*'
      enableTilt={true}
      onContactClick={() => console.log("Contact clicked")}
    />
    </div>

      <div className="col-span-4">
    <ProfileCard
      className="ml-8 mt-8"
      name="Elma Yanti Magdalena"
      title="Head of Welfare and Service Section"
      handle="Elma Yanti"
      status="Online"
      contactText="Contact Me"
      avatarUrl={kasiPelayanan}
      showUserInfo={true}
           contactHref='*'
      enableTilt={true}
      onContactClick={() => console.log("Contact clicked")}
    />
    
  </div>
   <div className="col-span-4">
    <ProfileCard
      className="ml-8 mt-8"
      name="Matius Ebi"
      title="Head of Government Section"
      handle="Matius Ebi"
      status="Online"
      contactText="Contact Me"
      avatarUrl={kasiPemerintahan}
      showUserInfo={true}
           contactHref='*'
      enableTilt={true}
      onContactClick={() => console.log("Contact clicked")}
    />

  </div>
   
      <div className="col-span-4">
    <ProfileCard
      className="ml-8 mt-8"
      name="Hidayah"
      title="Staf"
      handle="Hidayah"
      status="Online"
      contactText="Contact Me"
      avatarUrl={staf1}
      showUserInfo={true}
      enableTilt={true}
      contactHref='*'
      onContactClick={() => console.log("Contact clicked")}
    />
    
  </div>
   <div className="col-span-4">
    <ProfileCard
      className="ml-8 mt-8"
      name="Rosalia Resiolla"
      title="Staf"
      handle="Rosalia Resiolla"
      status="Online"
      contactText="Contact Me"
      avatarUrl={staf}
      showUserInfo={true}
           contactHref='*'
      enableTilt={true}
      onContactClick={() => console.log("Contact clicked")}
    />

  </div>
   

 </div>
<MyMap/>
<motion.h1 

   initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
className="text-3xl flex justify-center font-sans font-bold mb-1 mt-40">Population Composition by Gender</motion.h1>
<PieChart/>
<motion.h2 
 initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}

className="text-3xl flex justify-center font-sans font-bold mt-24 mb-0">Population Composition by Religion</motion.h2>
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

className="text-3xl flex justify-center font-sans font-bold mt-24">livelihood of the population</motion.h4>
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