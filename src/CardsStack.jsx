import { useState, useEffect, useRef } from "react";
import CardComponent from "./CardComponent";

const CardsStack = ({ shape }) => {
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const [visibleCards, setVisibleCards] = useState([]);
  const currentCardIndexRef = useRef(0);

  useEffect(() => {
    const delay = 100; // Adjust the delay between card appearances (in milliseconds)

    const addNextCard = () => {
      if (currentCardIndexRef.current < values.length) {
        const value = values[currentCardIndexRef.current % values.length];

        setVisibleCards(prevVisibleCards => [
          ...prevVisibleCards,
          { shape, value }
        ]);

        currentCardIndexRef.current++;

        setTimeout(addNextCard, delay);
      }
    };

    addNextCard();
  }, []);

  return (
    <div>
      <div className="cardsStackWrapper">
        {visibleCards.map((card, index) => (
          <div
            key={`${card.shape}-${card.value}`}
            className="card-item"
            style={{
              animationDuration: "1s",
              animationFillMode: "both",
              animationTimingFunction: "ease-in-out",
              animationPlayState: "running",
              animationName: `fadeIn-${card.shape}-${card.value}`,
              animationDelay: `${index * 1}s`
            }}
          >
            <CardComponent shape={card.shape} number={card.value} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsStack;
