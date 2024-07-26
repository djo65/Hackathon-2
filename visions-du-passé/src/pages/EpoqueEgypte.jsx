import egypt from "../assets/egypt.jpg";
import sphinx from "../assets/The_amazing_Sphinx.jpg";
import pyramide from "../assets/Pyramide.jpg";
import stele from "../assets/steleEgypt.jpg";
import "../styles/EpoqueEgypte.css";
import audioEgypt from "../assets/music/Tout comprendre sur  lancienne Égypte.mp3";

function EpoqueEgypte() {
  return (
    <>
      <audio controls src={audioEgypt}></audio>
      <div className="header">
        <h1 className="Title">Egypte Antique</h1>
        <img className="Bg-Img" src={egypt} alt="" />
      </div>
      <article>
        <img className="sphinxForm" src={sphinx} alt="" />
        <h2>Sphinx de Gizeh</h2>
        <p>
          Le Sphinx de Gizeh est la statue thérianthrope qui se dresse devant
          les grandes pyramides du plateau de Gizeh, en Basse-Égypte.
        </p>
      </article>
      <article>
        <img className="pyramideForm" src={pyramide} alt="" />
        <h2>Pyramide de Khéphren</h2>
        <p>
          La pyramide de Khéphren est la deuxième pyramide d'Égypte en taille.
          Dominant un complexe composé de deux temples reliés par une chaussée
          et d'une pyramide satellite, elle est de type à faces lisses et fut
          élevée sous la IVe dynastie durant l'Ancien Empire pour le pharaon
          Khéphren, fils de Khéops.
        </p>
      </article>
      <article>
        <img className="steleForm" src={stele} alt="" />
        <h2>Religion de l'Égypte antique</h2>
        <p>
          La religion de l'Égypte antique est un système complexe de croyances
          et de rituels polythéistes qui faisaient partie intégrante de la
          culture égyptienne antique. Il est centré sur les interactions des
          Égyptiens avec de nombreuses divinités censées être présentes et
          contrôler le monde.
        </p>
      </article>
    </>
  );
}
export default EpoqueEgypte;
