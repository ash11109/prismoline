import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Gallery from "./pages/Blog";
import Contact from "./pages/Contact";
import HomeOne from "./pages/HomeOne";
import Service from "./pages/Service";
import TeamDetails from "./pages/TeamDetails";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomeOne />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/gallery' element={<Gallery />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/product' element={<Service />} />   
        <Route exact path='/certificates' element={<TeamDetails />} />
      </Routes>
      <ScrollToTop smooth color='#246BFD' />
    </BrowserRouter>
  );
}

export default App;