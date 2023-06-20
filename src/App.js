import { BrowserRouter as Router, Routes, Route  } from "react-router-dom"
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Home from "./pages/Home";
import Navbar from "./Navbar";

function App() {
  return (

  
    <div className="App">
      
      <Router>
      <Navbar />
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
      
    </div>
  
  )
    
  ;
  
    
  
}

export default App;
