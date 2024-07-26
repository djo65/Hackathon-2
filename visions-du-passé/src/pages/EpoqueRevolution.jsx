import React from "react";
import "../styles/EpoqueRevolution.css";
import R from "../assets/R.jpg";
import Bastille from "../assets/Bastille.jpg";
import audio from "../assets/audio.mp3";

function EpoqueRevolution() {
  return (
    <div className="background">
      <h1 className="titre">Révolution Française</h1>

      <div className="image-container photorev-container">
        <img className="photorev" src={R} alt="Image en haut à gauche" />
        <audio src={audio} className="audio " controls></audio>
        <p className="anecdote">
          Louis XVI souffrait d'un trouble mineur du pénis appelé phimosis. Cela
          empêchait son prépuce de se rétracter lorsque le pénis était en
          érection. Certains historiens pensent que cela a entravé ses
          tentatives de consommer son mariage avec Marie-Antoinette. Le phimosis
          de Louis fut finalement corrigé par chirurgie, mais l'intervalle de
          huit ans entre son mariage et la naissance de son premier enfant ne
          fit qu'alimenter les rumeurs sur l'impuissance du roi et l'infidélité
          de la reine.
        </p>
      </div>

      <div className="image-container photorevv-container">
        <img className="photorevv" src={Bastille} alt="Image en bas à droite" />
        <p className="anecodotee">
          La cathédrale Notre-Dame, probablement l'église la plus célèbre de
          Paris, remonte aux années 1100. Au plus fort de la Révolution
          française, il fut saisi et reconverti en « temple de la liberté » et
          bon nombre de ses symboles religieux et de ses œuvres d'art furent
          détruits.
        </p>
      </div>
    </div>
  );
}

export default EpoqueRevolution;
