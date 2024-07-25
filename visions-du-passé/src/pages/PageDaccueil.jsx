import React from "react";
import Slider from "react-slick"; // Importez react-slick
import "../styles/PageDaccueil.css";
import "slick-carousel/slick/slick.css"; // Importez les styles de slick-carousel
import "slick-carousel/slick/slick-theme.css"; // Importez les thèmes de slick-carousel
import OIP from "../assets/OIP.jpg";
import egyote from "../assets/egyote.jpg";

function PageDaccueil() {
  return (
    <section className="backgroundd">
      <div className="container"></div>
      <div className="background"></div>
      <div className="content"></div>
      <h1 className="titre">Past Vision</h1>
      <img className="photorev" src={OIP}></img>
      <img className="egypte" src={egyote}></img>
    </section>
  );
}

export default PageDaccueil;
