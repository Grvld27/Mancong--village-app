
import {Routes, Route} from 'react-router'
import HomePage from '../pages/HomePage';
import HistoryPage from '../pages/HistoryPage';
import  ProfilePage from '../pages/ProfilePage';
import GalleryPage from '../pages/GalleryPage';
import DestinationPage from '../pages/DestinationPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';
import { useEffect } from 'react';




//component
function App() {
  useEffect(() => {

     window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 1); // Scroll ke atas saat halaman dimuat
  }, []);
  
  return (
<>


<Routes>
<Route path='/' element={<HomePage/>} 
/>
<Route path='/HistoryPage' element={<HistoryPage/>}
/>

<Route path='/ProfilePage' element={<ProfilePage/>}
/>
<Route path='/GalleryPage' element={<GalleryPage/>}
/>
<Route path='/DestinationPage' element={<DestinationPage/>}
/>
<Route path='/ContactPage' element={<ContactPage/>}
/>

<Route path='*' element={<NotFoundPage/>} />
</Routes>
</>

  );
};



export default App;
