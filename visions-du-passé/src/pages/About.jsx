import "../styles/About.css"

import Equipes from "../components/Equipes"

function About () {
    
    return(
        <div className="about-container">
            <div className="titre">
                <h1>A propos</h1>
            </div>
            <div className="sous-titre">
                <h2>Equipe de dev</h2>
            </div>
            <div>
                <Equipes />
            </div>

        </div>
    )
}

export default About;