import "../styles/Equipes.css"

const peoples = [
    {id: 1,
    name: "Jessy Marolle",
    description: "texte",
    imageId: "./public/bae25201b13c4adf85ed7fbbf05f779e.jpeg"
    },
    {id: 2,
    name: "Paul Bonion",
    description: "texte",
    imageId: ""
    },
    {id: 3,
    name: "Mehdi Samtal",
    description: "texte",
    imageId: ""},
    {id: 4,
    name: "Joris Camus",
    description: "texte",
    imageId: ""},
];

function Equipes() {
    return (
        <div className="box0">           
                {peoples.map((person) => (                   
                    <div className="box1"key={person.id}>
                        <img src={person.imageId} />
                        <div className="data">
                            <h1>{person.name}</h1>
                            <p>{person.description}</p>
                        </div>                                           
                    </div>
                ))}                
        </div>
    )
}

export default Equipes