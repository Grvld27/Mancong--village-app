
import Masonry from "../components/Masonry";
import lamin from '../assets/Bangunan-Lamin-Mancong.jpg'
import human2 from '../assets/human2.jpeg';
import nari from '../assets/nari.jpg';
import sumpit from '../assets/sumpit.jpeg';
import gadis1 from '../assets/Gadis-Dayak-Cantik-di-Lamin-Mancong.jpg';
import gadis2 from '../assets/gadis2.jpeg';
import human3 from '../assets/human3.jpeg';
import patung from '../assets/patung1.jpeg';
import sungai from '../assets/sungai.jpg';
import ulapDoyo from '../assets/ulap doyo.jpg';
import buntarDoyo from '../assets/buntardoyo.jpg';
import kwangkai from '../assets/18.-Kwangkai-Adat-Kematian-Suku-Dayak-1.jpg'
import tariGantar from '../assets/tarigantar.jpeg';
import belian from'../assets/belian.jpg';


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


   <p  className= "mt-20 ml-5 font-medium text-m  text-gray-400 font-sans w-m"
   


   
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




<div className="mt-160 h-100">
<SpotlightCard className="h-700">
<h1  className="text-2xl flex justify-center font-sans font-bold mb-1 mt-0" > Ulap Doyo</h1>
<div className="grid grid-cols-2 mt-10">
<img  className="w-90  mx-auto h-auto rounded-2xl transform hover:scale-110 transition duration-500" src={ulapDoyo} alt="" />
<div className="grid grid-cols-1">
<p className="text-sm text-gray-400  w-120 mr-50  "> Ulap Doyo is a traditional woven fabric made by the Dayak Benuaq people, particularly in West Kutai Regency, East Kalimantan, Indonesia. The name "Ulap Doyo" comes from the doyo plant (Curculigo latifolia), a wild plant whose fibers are spun into thread and woven manually using traditional looms.

The motifs of Ulap Doyo are deeply symbolic and inspired by nature, such as hornbills, dragons, plants, and other sacred patterns passed down through generations. The cloth is used in traditional ceremonies and is an essential part of Dayak cultural attire.</p>

<img className="w-100 h-auto rounded-2xl transform hover:scale-110 transition duration-500" src={buntarDoyo} alt="" />
</div>







</div>


<h2  className="text-2xl flex justify-center font-sans font-bold mb-1 mt-10 ">Kwangkai Ceremony</h2>

<div >
<p className="text-sm text-gray-400 w-200 mt-10 mx-auto ">Kwankgkai is a sacred death ritual performed by the Dayak Benuaq community. It is held to honor and guide the spirit of the deceased to the spiritual realm, known as Liau. This ritual is not performed immediately after death but often months or even years later, depending on the family's readiness.

The ceremony involves various traditional rites such as bone purification, offerings, ritual songs, dances, and ancestral spirit communication. Kwankgkai serves as a final tribute to the deceased and strengthens social bonds within the community.</p>


<div className="grid grid-cols-2">
<iframe  className="rounded-2xl mt-10 transform hover:scale-105 transition duration-500"src="https://youtube.com/embed/YPZx7cpnkKc?si=Ji4MWHF3N_px0Y5k" frameborder="0"

width={600}
height={400}

></iframe>
<img className="rounded-2xl mx-auto mt-11 w-300 transform hover:scale-102 transition duration-500"src={kwangkai} alt="" />
</div>
</div>


<h3 className="text-2xl flex justify-center font-sans font-bold mb-1 mt-10" >Berinukg Ritual</h3>

<div className="grid grid-cols-2">
  <div>
    <p className="text-sm text-gray-400 mt-10 w-150">
  Berinukg is a traditional spiritual ritual of the Dayak Benuaq people. The term refers to a practice of communicating with ancestral spirits or supernatural beings to seek healing, protection, or guidance.

Led by a Beli’an (ritual leader or shaman), Berinukg includes chants, offerings, ritual dances, and sacred invocations. It reflects the Dayak people's deep connection with nature and the spiritual world.
</p>

<iframe className="rounded-2xl mt-10" src="https://youtube.com/embed/4kcyoSboryk?si=-YOg3v0Bb-q3Yyw-" 
width={600}
height={400}
frameborder="0"></iframe>
</div>



<img  className="rounded-2xl mt-10 "  src={belian} alt="" />
</div>


<h3 className="text-2xl flex justify-start font-sans font-bold mb-1 mt-10 " >Gantar Dance</h3>


<div className="grid grid-cols-2">


<img className="rounded-2xl mt-10 mx-auto" src={tariGantar} alt="" />
<p 
    className="text-sm text-gray-400 mt-10 w-150 mx-auto">The Gantar Dance is a traditional Dayak dance originating from East Kalimantan, particularly among the Dayak Benuaq and Tunjung tribes. It symbolizes farming activities, especially the act of planting rice.

Dancers use bamboo sticks (gantar) filled with seeds, shaking them rhythmically to traditional music. The dance features graceful yet purposeful movements, representing hard work, harmony, and cooperation. Gantar Dance is often performed to welcome guests, during ceremonies, and at cultural festivals.</p>
</div>

</SpotlightCard>

</div>








    </div>
  );
}
export default GalleryPage