import Home from "./components/home";
import NavBar from "./components/navbar/index";
import Benefits from "./components/benefits/index";
import OurClasses from "./components/ourClasses/index";

function App() {
  return (
    <div className="app text-gray-500 bg-gray-50">
      <NavBar />
      <Home />
      <Benefits />
      <OurClasses />
    </div>
  );
}

export default App;
