import React, { useState, useEffect, useRef } from "react";
import CardsStack from "./CardsStack";

const CardShapes = () => {
  const shapes = ["♠️", "♣️", "❤️", "♦️"];
  const [visibleShapes, setvisibleShapes] = useState([]);
  const currentShapeIndexRef = useRef(0);

  useEffect(() => {
    const delay = 1000; // Adjust the delay between card appearances (in milliseconds)
    let intervalId;

    const addNextShape = () => {
      if (currentShapeIndexRef.current < shapes.length) {
        const shape = shapes[currentShapeIndexRef.current % shapes.length];
        setvisibleShapes(prevvisibleShapes => [...prevvisibleShapes, shape]);
        currentShapeIndexRef.current++;
      } else {
        clearInterval(intervalId);
      }
    };

    intervalId = setInterval(addNextShape, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, [shapes]);

  return (
    <div>
      {visibleShapes.map((shape, index) => {
        return <CardsStack key={index} shape={shape} />;
      })}
    </div>
  );
};

export default CardShapes;
