import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import HeroSection from "./components/HeroSection";
import RadioSection from "./components/RadioSection";
import Footer from "./components/Footer";
import Explore from "./components/Explore";
import NewEntries from "./components/NewEntries";

function App() {
  return (
    <>
      <MyNavbar />
      <HeroSection />
      <RadioSection />
      <NewEntries />
      <Explore />
      <Footer />
    </>
  );
}

export default App;
