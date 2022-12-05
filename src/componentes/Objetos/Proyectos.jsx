import React from "react";
import Skills from "../Card/Skills";
import useCount from "../hooks/useCount";
import "./Style/Style.css";

const cards = [
  {
    id: 0,
    title: "Rick and mort",
    Photo: "/img/Rick and morty.png",
    Url: 'https://rickandmorty-feiberth.netlify.app/',
    description:
      "Find your favorite character from the rick and mort series and check out his or her full potential. ",
  },
  {
    id: 1,
    title: "Weather",
    Photo: '/img/Weather.png',
    Url: 'https://weatherfromfeiberth.netlify.app/',
    description:
      "Check the weather status from our application that uses your location in real time thanks to the use of APIs.",
  },
  {
    id: 2,
    title: " E-commerce",
    Photo: '/img/ECommer.png',
    Url: 'https://ease-shop-feiberth.netlify.app/',
    description:
      "Come and try our online store layout where the resources used were also taken from the use of APIs.",
  },
  {
    id: 3,
    title: "Card random Generator",
    Photo: '/img/Random.png',
    Url: 'https://user-cards-feiberth.netlify.app/',
    description:
      "Interact with these cards where the operation is to give you random values thanks to the use of API.",
  },
];
const quantity = cards.length;

const Proyectos = () => {
  const { rightText, leftText, count } = useCount(quantity);
  if (!Array.isArray(cards) || quantity === 0) return;

  return (
    <div className="Proyectos">
      <div className="Degradado">
        <div className="Cuadro-negro">
          <h1>Preyectos</h1>
          
          <div className="Cuadros-diseño">
            <button onClick={leftText}>
              <i className="fas fa-angle-left"></i>
            </button>
            <div className="cuadros-gris-1">

              {cards.map((card) => {
                return (
                  <div className={count === card.id ? `active slide` : "slide"}>
                    {count === card.id && (
                      <Skills key={card.id} title={card.title} Url={card.Url} Photo={card.Photo}/>
                    )}
                  </div>
                );
              })}
            </div>
            <button onClick={rightText}>
              <i className="fas fa-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
