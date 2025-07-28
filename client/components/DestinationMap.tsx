import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import 'leaflet-routing-machine';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import SpotlightCard from '../hooks/SpotlightCard';
import Sepinggan from'../assets/f6d00_bandar-udara-bandara-internasional-sultan-aji-muhammad-sulaiman-sepinggan-sams-Di0dZXSK.jpg';
L.Marker.prototype.options.icon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// RoutingControl component
function RoutingControl() {
  const map = useMap();

  useEffect(() => {
    const control = L.Routing.control({
      waypoints: [
        L.latLng(-1.2654, 116.8312),   // Balikpapan
        L.latLng(-0.4936, 117.1457),   // Samarinda
        L.latLng(-0.53437, 116.07845), // Kampung Wisata Mancong
      ],
      lineOptions: {
        styles: [{ color: 'blue', weight: 7 }],
      },
      routeWhileDragging: false,
      show: false,
    }).addTo(map);

    return () => map.removeControl(control);
  }, [map]);

  return null;
}

export default function DestinationMap() {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      setVisible(isInView);
    }, [isInView]);


  return (
    <motion.div className='overflow-x-hidden '
    initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1}}
    >
      <h1
        className="flex justify-center mt-20 mb-10 font-bold text-2xl font-sans"
        style={{ textShadow: '6px 10px 20px #999999' }}
      >
        Route to Kampung Wisata Mancong
      </h1>

      <MapContainer
        center={[-0.8, 116.8]}
        zoom={9}
        scrollWheelZoom={true}
        style={{ height: '400px', width: '100%' }}
        className="rounded-3xl mx-auto z-2"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />

        {/* Marker: Balikpapan */}
        <Marker position={[-1.2654, 116.8312]}>
          <Popup>Balikpapan</Popup>
        </Marker>

        {/* Marker: Samarinda */}
        <Marker position={[-0.4936, 117.1457]}>
          <Popup>Samarinda</Popup>
        </Marker>

        {/* Marker: Kampung Mancong */}
        <Marker position={[-0.53437, 116.07845]}>
          <Popup>Kampung Wisata Mancong</Popup>
        </Marker>

        {/* Routing */}
        <RoutingControl />
      </MapContainer>

<SpotlightCard className="mt-10 mx-auto w-fit h-auto">

<div className='grid grid-cols-1   lg:grid-cols-2 gap-0 p-0 mt-0 h-auto gap-x-0'>
  
<img className=" w-100  rounded-2xl mx-auto  "src={Sepinggan} alt="" />
<SpotlightCard className='h-auto w-auto mx-auto  mt-5'>
<h1 className='font-sans text-2xl font-bold' >Balikpapan, East Kalimantan</h1>
<p className='text-sm mt-16 mx-auto w-fit justify-items-center mb-10 text-gray-400 '>The journey to Kampung Wisata Mancong begins in Balikpapan, a major port city in East Kalimantan. From Balikpapan, you’ll travel approximately 115 km by land to Samarinda, the capital of East Kalimantan Province. This leg of the journey usually takes around 3 to 4 hours by car or bus.

From Samarinda, continue your journey westward to Kampung Mancong, located in Jempang District, West Kutai Regency. This overland trip covers approximately 270 km, passing through towns like Tenggarong, Kota Bangun, and Muara Pahu.

</p>

</SpotlightCard>

</div>

</SpotlightCard>











<SpotlightCard className=" mx-auto w-fit h-auto mt-20 mb-0 ">
<div className="grid grid-cols-2 gap-0 p-0 mt-0 h-auto  gap-x-0">  

        <h1 className="font-sans text-2xl font-bold w-50 mb-10">There are water and land routes</h1>
</div>

<p className='text-sm  mx-auto w-fit text-gray-400' > The travel time from Samarinda to Mancong is about 8 to 10 hours, depending on road and weather conditions.
Alternatively, you can take a combination of land and river routes, especially from Kota Bangun to Kampung Mancong, using river transport along the Mahakam River and through Lake Jempang — offering a scenic and culturally rich travel experience.</p>

<div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-8 p-0 mt-0 h-104 ">
  
   <SpotlightCard className="mt-10   md:w-auto  ">
<iframe className=" w-full  max-w-full rounded-xl"
  width="100%"
  height="100%"
  src="https://www.youtube.com/embed/0AgRmb5-x24?si=WBXK_lMdU2J5GKC_"
  title="YouTube video player"
  frameBorder="2"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
   </SpotlightCard>
   


   <SpotlightCard className="mt-10 w-auto  ">
<iframe className=" w-full max-w-full  rounded-xl"
  width="100%"
  height="100%"
  src="https://youtube.com/embed/kZD59w9q0es?si=hHLHQjT93oDdZsQA"
  title="YouTube video player"
  frameBorder="2"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
   </SpotlightCard>

</div>
</SpotlightCard>
</motion.div>
  );
}
