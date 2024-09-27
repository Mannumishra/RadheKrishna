
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import AboutPage from './Pages/AboutPage/AboutPage';
import Image from './Pages/Gallerypage/Image';
import Video from './Pages/Gallerypage/Video';
import ContactPage from './Pages/ContactPage/ContactPage';
import ObjectivePage from './Pages/Objective/Objective';
import FeedBack from './Pages/FeedBack/FeedBack';
import Registration from './Pages/Registration/Registration';
import SrkGroup from './Pages/SrkGroup/SrkGroup';
import SrkGroup1 from './Pages/SrkGroup/SrkGroup1';
import SrkGroup2 from './Pages/SrkGroup/SrkGroup2';
import UpcomingEvents from './Pages/UpcomingEvents/UpcomingEvents';
import ViewMoreEvents from './Pages/UpcomingEvents/ViewMoreEvent';
import SrkProducts from './Pages/SrkProducts/SrkProducts';
import Donation from './Pages/Donation/Donation';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import toast, { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/images' element={<Image/>} />
          <Route path='/video' element={<Video/>} />
          <Route path='/contact' element={<ContactPage/>} />
          <Route path='/objectives' element={<ObjectivePage/>} />
          <Route path='/feedback' element={<FeedBack/>} />
          <Route path='/registration' element={<Registration/>} />
          <Route path='/srk-groups' element={<SrkGroup/>} />
          <Route path='/srk-groups1' element={<SrkGroup1/>} />
          <Route path='/srk-groups2' element={<SrkGroup2/>} />
          <Route path='/upcoming-events' element={<UpcomingEvents/>} />
          <Route path='/SrkProducts' element={<SrkProducts/>} />
          <Route path='/Donation' element={<Donation/>} />
          <Route path='/ViewEvent/:id' element={<ViewMoreEvents/>} />

        </Routes>
        <Footer/>
        <Toaster />
      </BrowserRouter>

    </>
  );
};

export default App;
