import "bootstrap/dist/css/bootstrap.min.css";
import About from "./elements/About";
import Contact from "./elements/Contact";
import Experience from "./elements/Experience";
import Projects from "./elements/Projects";
import Topnav from "./elements/Topnav";

function App() {
    return (
        <div class="App">
            <Topnav />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
