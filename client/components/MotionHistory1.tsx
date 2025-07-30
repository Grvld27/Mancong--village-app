import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import SpotlightCard from "../hooks/SpotlightCard";

// Assets
import Lamin from '../assets/Lamin-cRPuzSrk.jpeg';
import sultan from '../assets/sultan aji muhammad alimuddin-Dc2QaXPI.jpg';
import keraton from '../assets/The-Keraton-Kesultanan-of-Kutai-in-the-times-of-Sultan-Aji-Muhammad-Alimuddin-r-UDDcZH3e.png';
import kumala from '../assets/laminpulaukumala-DHMagnsh.jpg';
import LaminSeberang from '../assets/Lamin-Mancong-seberang-1024x683-dk9BCdn5.jpg';
import TerasDepan from '../assets/Teras-depan-Lamin-Mancong-C1uUaQ_f.jpg';
import TiangLamin from '../assets/Tiang-panggung-Lamin-Mancong-CZZwcf8X.jpg';

export default function AnimatedText() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(isInView);
  }, [isInView]);

  const structureData = [
    { label: "Length", value: "63 meters" },
    { label: "Width", value: "12 meters" },
    { label: "Height", value: "3 meters (on stilts)" },
    { label: "Floors", value: "2" },
    { label: "Total Rooms", value: "24 (12 per floor)" },
    { label: "Floor Area", value: "Approximately 1,005 m²" },
    { label: "Capacity", value: "100 people / 25–30 families" },
    { label: "Year Built", value: "Around 1920 by Temenggung Bank" },
    { label: "Cultural Role", value: "Ceremonies, meetings, and community life" },
    { label: "Heritage Status", value: "Declared cultural heritage in 2013" },
  ];









  
  return (
    <div className=" mb-10  ">
    <SpotlightCard className=" w-auto mx-auto mt-10  lg:w-auto md:w-auto xl:w-auto ">
      {/* Section 1: Intro */}
      <div className="grid md:grid-cols-2 gap-10 mb-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}

          className="text-white"
        >
          <p ref={ref} className="text-start w-auto md:text-justify lg:text-justify xl:text-justify  ">
            Mancong Village is located in the Jempang District, West Kutai Regency, East Kalimantan, Indonesia. It serves as a cultural hub for the Dayak Benuaq indigenous people, particularly the Ohokng Sangokng subgroup. This community has a long history dating back to the pre-colonial period.
            <br /><br />
            In the 18th century, the Dayak Benuaq of the Ohokng River were forcibly displaced by the Kutai Sultanate due to their performance of a traditional ritual called Arakng Dodo, which was seen as conflicting with Islamic values. After nearly 40 years in exile, they returned to their ancestral lands around the Ohokng River and reestablished their community, giving rise to what is now Mancong Village.
          </p>
        </motion.div>
        <motion.img 
           initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1}}
        
        src={Lamin} alt="Lamin Mancong" className="rounded-2xl w-auto h-auto" />
      </div>

      {/* Section 2: History */}
      <SpotlightCard className="mb-20">
        <motion.p
          className="text-white text-start md:text-justify lg:text-justify xl:text-justify"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          A major historical milestone was the construction of the traditional longhouse Lou’ Mancukng (Lamin Mancong) in 1920, initiated by Temenggung Baang, also known as Kakah Biru. The house was built in a style resembling the Kutai Sultanate’s palace architecture. Because this design was used without royal permission, Temenggung Baang was imprisoned for three months by Sultan Aji Muhammad Alimuddin. Upon release, he continued the construction, which was completed during the reign of Sultan Aji Muhammad Parikesit. The longhouse was officially inaugurated on April 2, 1923.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <motion.img 
              initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          
          src={sultan} alt="Sultan" className="rounded-2xl" />
          <motion.img 
            initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          
          src={keraton} alt="Keraton" className="rounded-2xl" />
          <motion.img  
           initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
           src={kumala} alt="Pulau Kumala" className="rounded-2xl" />
        </div>
      </SpotlightCard>

      {/* Section 3: Function & Features */}
      <SpotlightCard className="mb-20">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.img 
          
             initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          
          src={LaminSeberang} alt="Lamin Seberang" className="rounded-2xl" />
          <motion.p
            className="text-white text-start md:text-justify lg:text-justify xl:text-justify"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Originally, Lamin Mancong functioned as a communal residence for multiple families, following traditional Dayak longhouse customs. Over time, it evolved into a central venue for indigenous governance and rituals. In front of the Lamin, wooden totem-like statues called Blontakng stand as a record of buffalo sacrifices during Kwangkai ceremonies. Each statue represents one buffalo offered.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-10 items-center">
          <motion.img  
             initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          src={TiangLamin} alt="Tiang Lamin" className="rounded-2xl" />
          <motion.p 
             initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          
          
          className="text-white text-start md:text-justify lg:text-justify xl:text-justify">
            Lamin Mancong, a traditional longhouse located in Kampung Mancong, stands as a cultural heritage site rich in Dayak Benuaq traditions. Measuring approximately 63 meters in length, 12 meters in width, and raised on stilts about 3 meters high, this two-story wooden structure is one of the largest of its kind. It consists of 24 rooms and can house up to 100 people.
        </motion.p>
        </div>

        {/* Table Section */}
       

        {/* Images */}
        <div className=" grid grid-cols-1     lg:grid-cols-2 md:grid-cols-2 gap-6 mt-10">
          <motion.img 
             initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEilXdu7EP97FGTM_y0-XqyrjgAh97OluDMuD3a8BqERoVsC-Oyzpya8C43r3TLUj_aG5mCMMUIWnauEPHxpXm9BPO0UMj_VlMexeApF-rdls7j6TdQU17U1JWNz0TZWVlvpF7kgmENDdurqzQgJcUz95tRevpPZsWDRrtLFYtJ4CpFlu7KL7yq7LeRhjmoU/s1052/Bangunan-Lamin-Mancong.jpg" alt="Bangunan Lamin" className="rounded-2xl" />
          <motion.img 
             initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          
          
          src={TerasDepan} alt="Teras Depan" className="rounded-2xl" />
        </div>
      </SpotlightCard>



















      {/* Section 4: Documentation */}
      <motion.h1
         initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
      
      className="text-2xl font-bold text-center mb-6">Docs</motion.h1>
      <motion.iframe


   initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        className="rounded-2xl w-full h-[550px]"
        src="https://youtube.com/embed/hnIYv-uIF6M?si=BkmoVjLqDuKTj0_t"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></motion.iframe>
    </SpotlightCard> 
    <motion.div 
           initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        
        
        className=" md:mx-auto xl:mx-auto mt-5 p-4 border rounded-xl shadow-lg bg-white xl:w-2xl xl:mt-20 ">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
            Structure Information
          </h2>
          <table className="table-auto w-auto border-collapse  ">
            <tbody>
              {structureData.map((item, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="px-4 py-2 font-medium text-gray-700">{item.label}</td>
                  <td className="px-4 py-2 text-gray-900">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
    </div>
  );
}
