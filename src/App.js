import { BrowserRouter as Router} from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <Hero/>
    </Router>
  );
}

export default App;
