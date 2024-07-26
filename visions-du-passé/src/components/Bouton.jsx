import React, { useState } from "react";

const anecdotes = [
  "Louis XVI souffrait d'un trouble mineur du pénis appelé phimosis. Cela empêchait son prépuce de se rétracter lorsque le pénis était en érection. Certains historiens pensent que cela a entravé ses tentatives de consommer son mariage avec Marie-Antoinette. Le phimosis de Louis fut finalement corrigé par chirurgie, mais l'intervalle de huit ans entre son mariage et la naissance de son premier enfant ne fit qu'alimenter les rumeurs sur l'impuissance du roi et l'infidélité de la reine.",
  "La cathédrale Notre-Dame, probablement l'église la plus célèbre de Paris, remonte aux années 1100. Au plus fort de la Révolution française, il fut saisi et reconverti en « temple de la liberté » et bon nombre de ses symboles religieux et de ses œuvres d'art furent détruits.",
  "La prise de la Bastille le 14 juillet 1789 est l'un des événements les plus célèbres de la Révolution française. La Bastille était une forteresse utilisée comme prison d'État par les rois de France.",
  "La Déclaration des droits de l'homme et du citoyen de 1789 est l'un des documents fondamentaux de la Révolution française, affirmant les droits naturels, inaliénables et sacrés de l'homme.",
  "Maximilien Robespierre, l'une des figures les plus influentes de la Révolution française, a joué un rôle central dans le gouvernement révolutionnaire pendant la Terreur. Il a finalement été guillotiné en 1794.",
];

function Bouton() {
  const [currentAnecdote, setCurrentAnecdote] = useState(anecdotes[0]);

  const handleButtonClick = () => {
    const randomAnecdote =
      anecdotes[Math.floor(Math.random() * anecdotes.length)];
    setCurrentAnecdote(randomAnecdote);
  };

  return (
    <div className="bouton-container">
      <button className="bouton" onClick={handleButtonClick}>
        <span className="span-mother">
          <span>B</span>
          <span>u</span>
          <span>t</span>
          <span>t</span>
          <span>o</span>
          <span>n</span>
        </span>
        <span className="span-mother2">
          <span>B</span>
          <span>u</span>
          <span>t</span>
          <span>t</span>
          <span>o</span>
          <span>n</span>
        </span>
      </button>
      <div className="current-anecdote-container">
        <p className="current-anecdote">{currentAnecdote}</p>
      </div>
    </div>
  );
}

export default Bouton;
