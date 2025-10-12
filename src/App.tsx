import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Booking } from "./pages/Booking";
import { AboutUs } from "./pages/AboutUs";
import { Services } from "./pages/Services";
import { ContactUs } from "./pages/ContactUs";
import { Footer } from "./components/elements/Footer";
import { Navbar } from "./components/elements/Navbar";
import { Refill } from "./pages/Refill";
import { ContactInfo } from "./components/sections/ContactInfo";

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/refill" element={<Refill />} />
        </Routes>
      </BrowserRouter>
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default App;
