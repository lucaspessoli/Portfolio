import { Link } from "react-router-dom";
import NavBar from "../components/navegacao/NavBar";

function Home() {
  return (
    <div>
    <NavBar />
    <main>
    <div>
      <img class="imag" src="https://avatars.githubusercontent.com/u/115120374?v=4"/>
      <h1>BEM-VINDO!</h1>
      <h2>Analise e Desenvolvimento de Sistemas</h2>
    </div>
    </main>
    </div>
  );
}

export default Home;
