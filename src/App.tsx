import Home from "./components/home";
import NavBar from "./components/navbar/index";

function App() {
  return (
    <div className="app text-gray-500 bg-gray-50">
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
