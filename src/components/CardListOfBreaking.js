import React from "react";

const CardOfBreaking = ({ img, name, category, status }) => {
  return (
    <div className="containerCard">
      <div className="img">
        <img className="img" src={img} />
      </div>
      <div className="info">
        <ul className="ul">
          <li className="li">{`name ${name}`}</li>
          <li className="li">{`category ${category}`}</li>
          <li className="li">{`status ${status}`}</li>
        </ul>
      </div>
    </div>
  );
};

export default CardOfBreaking;
