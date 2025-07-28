
import Masonry from "../components/Masonry";
import lamin from '../assets/Bangunan-Lamin-Mancong-Bqubs-TK.jpg';
import human2 from '../assets/human2-D4l8cMqt.jpeg';
import nari from '../assets/nari-RtvOhRBI.jpg';
import sumpit from '../assets/sumpit-Dk-glsW8.jpeg';
import gadis1 from '../assets/Gadis-Dayak-Cantik-di-Lamin-Mancong-YuXrnHST.jpg';
import gadis2 from '../assets/gadis2-BrlB1Lel.jpeg';
import human3 from '../assets/human3-BHqK8XyN.jpeg';
import patung from '../assets/patung1.jpeg';
import sungai from '../assets/sungai-DupnVGYu.jpg';
import ulapDoyo from '../assets/ulap doyo-CjRPsKuN.jpg';
import buntarDoyo from '../assets/buntardoyo-ChBRy0jW.jpg';
import kwangkai from '../assets/Kwangkai baru-Di3_VfrI.jpg'
import tariGantar from '../assets/tarigantar-_hro5Pe-.jpeg';
import belian from'../assets/belian-WrWEfshy.jpg';


import HeaderCustom from "../components/Header";
import SpotlightCard from "../hooks/SpotlightCard";


const GalleryPage = () => {

const items = [
    {
      id: "1",
      img: 'https://jejakpengembara.com/wp-content/uploads/2018/12/salah-satu-bentuk-ukiran-serta-tampilan-rumah-adat-lamin-kampong-mancong-768x505.jpg',
      url: "https://example.com/one",
      height: 600,
    },
    {
      id: "2",
      img: "https://www.infokubar.id/wp-content/uploads/2022/05/Mancong-Turis.jpg",
   url:'https://www.infokubar.id/lama-tutup-karena-pandemi-kini-lamin-mancong-mulai-diserbu-turis-asing/',
      height: 550,
    },
    {
      id: "3",
      img: "https://www.infokubar.id/wp-content/uploads/2021/06/Lamin-Mancong-seberang-1024x683.jpg",
      url: "https://www.infokubar.id/lamin-mancong-rumah-panjang-legendaris-di-kutai-barat/",
      height: 600,
    },
     {
      id: "4",
      img: "https://awsimages.detik.net.id/community/media/visual/2021/02/04/dev-pesona-dan-cerita-di-balik-rumah-adat-suku-dayak-2.jpeg?w=600&q=90",
      url: "https://travel.detik.com/cerita-perjalanan/d-5403020/pesona-dan-cerita-di-balik-rumah-adat-suku-dayak",
      height: 500,
    },
     {
      id: "5",
      img: human3,
      url: "*",
      height: 600,
    },
       {
      id: "6",
      img: lamin,
      url: "",
      height: 50,
    },
         {
      id: "7",
      img: human2,
      url: "",
      height: 900,
    },
           {
      id: "6",
      img: nari,
      url: "",
      height: 900,
    },
         {
      id: "8",
      img: sumpit,
      url: "",
      height: 900,
    },
           {
      id: "9",
      img: gadis1,
      url: "",
      height: 900,
    },
         {
      id: "10",
      img: gadis2,
      url: "*",
      height: 1000,
    },
       {
      id: "11",
      img: 'https://akcdn.detik.net.id/community/media/visual/2021/02/04/dev-pesona-dan-cerita-di-balik-rumah-adat-suku-dayak-1.jpeg?w=700&q=90',
      url: "*",
      height: 600,
    },
      {
      id: "12",
      img: 'https://akcdn.detik.net.id/community/media/visual/2021/02/04/dev-pesona-dan-cerita-di-balik-rumah-adat-suku-dayak-4.jpeg?w=700&q=90',
      url: "*",
      height: 500,
    },
      {
      id: "13",
      img: 'https://www.infokubar.id/wp-content/uploads/2022/05/Mancong-Turis-4.jpg',
      url: "*",
      height: 600,
    },
          {
      id: "14",
      img: sungai,
      url: "*",
      height: 600,
    },

];
  return (
    <div>

<HeaderCustom/>

<h1 className="text-2xl flex justify-center font-sans font-bold mb-1 mt-40">Gallery</h1>


   <p  className= "mt-20 ml-5 font-medium text-m  text-gray-300 font-sans w-m"
   


   
   >
These photographs are more than just visuals; they represent living heritage, stories passed down through generations, and the vibrant identity of the Dayak Benuaq people. The documentation aims to preserve and promote cultural awareness while serving as a reference for researchers, educators, and cultural tourism initiatives.
   </p>


<Masonry 
  items={items}
  ease="power3.out"
  duration={2}
  stagger={0.2}
  animateFrom="top"
  scaleOnHover={true}
  hoverScale={0.95}
  blurToFocus={true}
  colorShiftOnHover={true}
/>




<div className=" mt-570 md:mt-340  xl:mt-160 h-100 lg:mt-170">
<SpotlightCard className="h-auto md:h-auto ">
<h1  className="text-2xl flex justify-center font-sans font-bold mb-1 mt-0" > Ulap Doyo</h1>
<div className="grid grid-cols-1 md:grid-cols-2 mt-10">
<img  className="w-auto md:w-50 x: lg:w-80 mx-auto h-auto rounded-2xl transform hover:scale-110 transition duration-500" src={ulapDoyo} alt="" />
<div className="grid grid-cols-1">
<p className="text-sm xl:text-m md:text-sm xl:w-2xl md:w-80 text-gray-300  w-full mt-10 mb-10  "> Ulap Doyo is a traditional woven fabric made by the Dayak Benuaq people, particularly in West Kutai Regency, East Kalimantan, Indonesia. The name "Ulap Doyo" comes from the doyo plant (Curculigo latifolia), a wild plant whose fibers are spun into thread and woven manually using traditional looms.

The motifs of Ulap Doyo are deeply symbolic and inspired by nature, such as hornbills, dragons, plants, and other sacred patterns passed down through generations. The cloth is used in traditional ceremonies and is an essential part of Dayak cultural attire.</p>

<img className="w-100 xl:w-2xl xl:mt-10  lg:w-auto h-auto rounded-2xl transform hover:scale-106 transition duration-500" src={buntarDoyo} alt="" />
</div>







</div>


<h2  className="text-2xl flex justify-center font-sans font-bold mb-1 mt-10 ">Kwangkai Ceremony</h2>

<div >
<p className="text-sm xl:text-m xl:w-7xl md:text-sm text-gray-200  w-auto mt-10 mx-auto ">Kwankgkai is a sacred death ritual performed by the Dayak Benuaq community. It is held to honor and guide the spirit of the deceased to the spiritual realm, known as Liau. This ritual is not performed immediately after death but often months or even years later, depending on the family's readiness.

The ceremony involves various traditional rites such as bone purification, offerings, ritual songs, dances, and ancestral spirit communication. Kwankgkai serves as a final tribute to the deceased and strengthens social bonds within the community.</p>


<div className="grid grid-cols-1 lg:grid-cols-2 ">
<iframe  className="rounded-2xl xl:w-xl w-auto md:w-160  mt-10 transform hover:scale-105 transition lg:w-100 lg:h-100 duration-500"src="https://youtube.com/embed/YPZx7cpnkKc?si=Ji4MWHF3N_px0Y5k" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
width={600}
height={400}

></iframe>
<img className="rounded-2xl mx-auto mt-11 w-auto  xl:w-300 lg:w-200 transform hover:scale-102 transition duration-500"src={kwangkai} alt="" />
</div> 
</div>


<h3 className="text-2xl flex justify-center font-sans font-bold mb-1 mt-10" >Berinukg Ritual</h3>



   <p className="text-sm xl:text-m md:text-sm text-gray-200 mt-10 xl:w-m mx-auto">
  Berinukg is a traditional spiritual ritual of the Dayak Benuaq people. The term refers to a practice of communicating with ancestral spirits or supernatural beings to seek healing, protection, or guidance.

Led by a Beli’an (ritual leader or shaman), Berinukg includes chants, offerings, ritual dances, and sacred invocations. It reflects the Dayak people's deep connection with nature and the spiritual world.
</p>


 <div className="grid lg:grid-cols-1  md:grid-cols-1  xl:grid-cols-2">
  <div>
 

<iframe className="      w-auto  rounded-2xl mt-10 lg:w-224 md:w-160 xl:w-2xl" src="https://youtube.com/embed/4kcyoSboryk?si=-YOg3v0Bb-q3Yyw-" 
width={600}
height={400}
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
frameborder="0"></iframe>
</div>



<img  className="  md:mx-auto  md:w-200 rounded-2xl mt-10 lg:w-180 xl:mt-10   xl:w-xl"  src={belian} alt="" />
</div> 


<h3 className="text-2xl flex justify-center font-sans font-bold mb-1 mt-10" >Gantar Dance</h3>


<div className="grid grid-cols-1 md:grid-cols-1   xl:grid-cols-2 lg:gap-5">



<p 
    className="text-sm xl:text-m md:text-m   text-gray-200 mt-10 mx-auto  w-auto lg:w-auto ">The Gantar Dance is a traditional Dayak dance originating from East Kalimantan, particularly among the Dayak Benuaq and Tunjung tribes. It symbolizes farming activities, especially the act of planting rice.

Dancers use bamboo sticks (gantar) filled with seeds, shaking them rhythmically to traditional music. The dance features graceful yet purposeful movements, representing hard work, harmony, and cooperation. Gantar Dance is often performed to welcome guests, during ceremonies, and at cultural festivals.</p>

 <img className="rounded-2xl mt-10 mx-auto transform hover:scale-105 transition duration-500 " src={tariGantar} alt="" /> 

</div>

</SpotlightCard>

</div>








    </div>
  );
}
export default GalleryPage