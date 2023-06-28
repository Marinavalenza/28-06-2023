import "./Card.css";
const Card = () => {
  return (
    <div class="myCard">
      <div class="innerCard">
        <div class="frontSide">
          <p class="title">FRONT SIDE</p>
          <p>Hover Me</p>
        </div>
        <div class="backSide">
          <p class="title">BACK SIDE</p>
          <p>Leave Me</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
