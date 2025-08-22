import "./App.css";
import "./index.css";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import About from "./Components/About";
import Mission from "./Components/Mission";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="h-screen bg-black">
      <Navbar />
      <Slider />
      <About />
      <Mission />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
