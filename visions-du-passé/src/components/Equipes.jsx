import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "../styles/Equipes.css"


const peoples = [
    {id: 1,
    name: "Jessy Marolle",
    description: "Encore développeur, devenu fou après quelques heures de code.",
    imageId: "./public/Jessy.jpg"
    },
    {id: 2,
    name: "Paul Bonidon",
    description: "Sous le poids de la fatigue, chaque ligne de code devenant une bataille.",
    imageId: "./public/Paul.png"
    },
    {id: 3,
    name: "Mehdi Samtal",
    description: "Un développeur fantôme, fatigué la journée en forme la nuit mais garde toujours le sourir",
    imageId: "./public/Mehdi.jpg"},
    {id: 4,
    name: "Joris Camus",
    description: "Le plus sérieux de tous!",
    imageId: "./public/moi1.jpg"},
];

function Equipes() {
    const container = useRef();

    useGSAP(
      () => {
        const tl = gsap.timeline();
  
        tl.from(container.current.firstChild, {
          opacity: 0,
          x: 300,
          duration: 1.5,
          ease: "power2.inOut",
        });
        tl.from(container.current.children[1], {
          opacity: 0,
          x: -300,
          duration: 1,
          ease: "power2.inOut",
        });
        tl.from(container.current.children[2], {
          opacity: 0,
          x: 300,
          duration: 1,
          ease: "power2.inOut",
        });
        tl.from(container.current.children[3], {
          opacity: 0,
          x: -300,
          duration: 1,
          ease: "power2.inOut",
        });
        tl.from(container.current.children[4], {
          opacity: 0,
          x: 300,
          duration: 1,
          ease: "power2.inOut",
        });
      },
      { scope: container }
    );
    return (
        <div className="box0"> 
            <ul ref={container}>         
                {peoples.map((person) => (                   
                    <div className="box1"key={person.id}>
                        <img src={person.imageId} />
                        <div className="data">
                            <h1>{person.name}</h1>
                            <p>{person.description}</p>
                        </div>                                           
                    </div>
                ))} 
            </ul>                
        </div>
    )
}

export default Equipes