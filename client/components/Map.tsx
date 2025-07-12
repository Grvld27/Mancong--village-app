import { MapContainer, TileLayer, Marker, Popup,Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { useState, useRef, useEffect } from "react";
import {  motion, useInView, easeInOut } from "framer-motion"; 

// Perbaiki ikon marker (jika kosong di Vite/CRA)
L.Marker.prototype.options.icon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MyMap() {
 const ref = useRef (null);
    const isInView = useInView (ref, );
const [visible,setVisible] = useState(false);



useEffect(() => {

setVisible(isInView);
}, [isInView]);
  
  return (
    
    <motion.div
  initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1}}
    
    >
     <h1 className='flex justify-center mt-50 mb-20 font-bold text-3xl font-sans'
      style={{textShadow:' 6px 10px 20px #999999'}}
     >Geographics</h1>  
    <MapContainer className='  rounded-4xl ml-27 mt-6'
      center={[-0.53437, 116.07845]} // 
      zoom={12}
      scrollWheelZoom={true}
      style={{ height: '350px', width: '40%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      <Marker position={[-0.53437, 116.07845]}>
        <Popup>
          Kampung Mancong 
        </Popup>
      </Marker>
    </MapContainer>

   

    <li className='list-none pl-0 font-medium text-xl font-sans'
    style={{
      margin:'-20pc 0pc 25pc 50pc'
    }}
    >
      <ul >Location Coordinates <span className ="ml-50"style={{ fontFamily:'sans-serif',   color:'white'}}> 0.5339° N, 116.1861° E  </span></ul>
      <ul>Total Area <span className ="ml-75"style={{ fontFamily:'sans-serif',  color:'white'}}>  ± 62.50 km² (6,250 hectares)   </span></ul>
      <ul>Elevation <span className ="ml-77"style={{ fontFamily:'sans-serif',  color:'white'}}> 35 meters above sea level      </span> </ul>
       <ul>Annual Rainfal  <span className ="ml-65"style={{ fontFamily:'sans-serif',   color:'white'}}>  2,500–3,500 mm/year   </span></ul>
      <ul>Average Daily Temperature <span className ="ml-37"style={{ fontFamily:'sans-serif',   color:'white'}}>  23°C – 32°C     </span></ul>
      <ul> Distance to Subdistrict Capital (Jempang) <span className ="ml-5"style={{ fontFamily:'sans-serif', color:'white'}}>  12 km      </span></ul>
      <ul>Distance to District Capital (Sendawar)  <span className ="ml-12"style={{ fontFamily:'sans-serif', color:'white'}}>  80 km   </span></ul>
      <ul>Forest and Swamp Coverage <span className ="ml-35"style={{ fontFamily:'sans-serif',  color:'white'}}> 60% of total area   </span></ul>
    </li>
    </motion.div>
  );
}
