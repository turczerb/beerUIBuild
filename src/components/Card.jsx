import Beer from "./Beer";
import { useState, useEffect } from "react";

const Card = (props) => {
  return (
    <ul className="card">
      {props.data.map((data, index) => {
        return (
          <Beer
            title={data.title}
            sub={data.sub}
            text={data.text}
            key={index}
            test={index}
          />
        );
      })}
    </ul>
  );
};

export default Card;
