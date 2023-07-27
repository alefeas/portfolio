import { NavBar } from "./components/navBar/NavBar.jsx";
import { Home } from "./components/home/Home.jsx";
import { AboutMe } from "./components/aboutMe/AboutMe.jsx";
import { MyProjects } from "./components/myProjects/MyProjects.jsx";
import { Skills } from "./components/skills/Skills.jsx";
import { Studies } from "./components/studies/Studies.jsx";
import { Footer } from "./components/footer/Footer.jsx";
import './styles/styles.scss'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <AboutMe/>
      <MyProjects/>
      <Skills/>
      <Studies/>
      <Footer></Footer>
    </div>
  );
}

export default App;
