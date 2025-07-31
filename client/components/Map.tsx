import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { motion } from "framer-motion";

// Perbaiki ikon marker (jika kosong di Vite/CRA)
L.Marker.prototype.options.icon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

  const structureData = [
    { label: "Coordinates", value: "0.5339° N, 116.1861° E" },
    { label: "Total Area", value: "62.50 km² (6,250 hectares)" },
    { label: "Elevation", value: "35 meters above sea level" },
    { label: "Annual Rainfall", value: "2,500–3,500 mm/year" },
    { label: "Avg. Daily Temp", value: "23°C – 32°C" },
    { label: "To Subdistrict (Jempang)", value: "12 km" },
    { label: "To District (Sendawar)", value: "80 km" },
    { label: "Forest & Swamp", value: "60% of total area" },

  ];






export default function MyMap() {
  return (
    <>


    
      <h1
        className='     mx-auto xl:text-4xl text-2xl flex justify-center font-sans font-bold mb-20 mt-20'
        style={{ textShadow: '6px 10px 20px #999999' }}
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Geographics
      </h1>

<div className=' grid grid-cols-1 xl:grid-cols-2 gap-0  '>
      <div className="flex  h-90 z-2">
        <MapContainer
          center={[-0.53437, 116.07845]}
          zoom={12}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%' }}
          className="rounded-4xl"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          />
          <Marker position={[-0.53437, 116.07845]}>
            <Popup>Kampung Mancong</Popup>
          </Marker>
        </MapContainer>
      </div>

 <motion.div 
           initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        
        
        className="md:mx-auto xl:mx-auto mt-5 p-4 border rounded-xl shadow-lg bg-white">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
            Geo Information
          </h2>
          <table className="table-auto w-auto border-collapse">
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
    </>
  );
}
