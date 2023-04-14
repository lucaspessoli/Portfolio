import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home'
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NavBar from "./components/navegacao/NavBar";
import Curriculo from "./pages/Curriculo";
import Github from "./pages/Github";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/curriculo" element={<Curriculo />} />
        <Route path="/github" element={<Github />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;