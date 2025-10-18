import Home from "./components/home";
import NavBar from "./components/navbar/index";
import Benefits from "./components/benefits/index";
import OurClasses from "./components/ourClasses/index";
import ContactUs from "./components/contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="app text-gray-500 bg-gray-50">
      <NavBar />
      <Home />
      <Benefits />
      <OurClasses />
      <ContactUs />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
