import "../styles/About.css"
import { useState } from "react"
import Equipes from "../components/Equipes"
import Footer from "./Footer";
import NavBar from "../components/NavBar"
import MusicButton from "../components/MusicButton";
import pirate from "../assets/music/Pirates des Caraïbes - Musique complète.mp3"

function About () {
    const [autoPlay, setAutoPlay] = useState(true);
    
    return(
        <div className="about-container">
            <nav>
                <NavBar />
                <MusicButton
        audioSrc={pirate}
        autoPlay={autoPlay}
        setAutoPlay={setAutoPlay}
                />
            </nav>
            <div className="titre">
                <h1>Y paraît qu'on est dev</h1>
            </div>
            <div className="sous-titre">
                <h2>Les meilleurs</h2>
            </div>
            <div>
                <Equipes />
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default About;