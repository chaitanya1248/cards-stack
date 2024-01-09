import "./index.css";

const CardComponent = ({ number, shape }) => {
  return (
    <div className="card-wrapper">
      {number} {shape}
    </div>
  );
};

export default CardComponent;
