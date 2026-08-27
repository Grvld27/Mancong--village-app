import Aurora from '../components/Aurora';
  

import HeaderCustom from "../components/Header";
import IntroHome from "../components/IntroHome";
import MiniMenuDrawer from '../components/DrawerCustom';



import ContactMe from '../components/ContactMe';






const HomePage = () => {

return (
    <div>
   <Aurora 
  colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
  blend={0.5}
  amplitude={1.0}
  speed={1}
  height={1}
/>



    <HeaderCustom />


    <IntroHome />









<ContactMe/>


    <MiniMenuDrawer/>



{/* <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} /> */}




<footer className='mx-auto w-fit mt-0 mb-40 border-2 rounded-2xl border-transparent p-4 bg-black font-light text-gray-500'>
    <p>
    
    @ 2025 Mancong Village. All rights reserved.
    </p></footer>
    </div>
)

}
export default HomePage