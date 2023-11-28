import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Contato from "./pages/Contato";
import Navbar from "./components/Navbar";
import Noticia from "./pages/Noticia";
import Produtos from "./pages/Produtos";
 // importação do swiper como pedido na documentação
import { register } from "swiper/element/bundle";

import 'swiper/css/bundle';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import PreLoader from "./components/PreLoader";

register();

function App() {
  return (
    <Router>
      <PreLoader />
      <Navbar />
      <Routes className="App">
        <Route path="/noticia/:titulo" element={<Noticia />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/produtos" element={<Produtos />} />

        <Route path="/ReactApp" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
