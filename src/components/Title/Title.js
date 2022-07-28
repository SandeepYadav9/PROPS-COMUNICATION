import React from "react";
import style from "./Title.module.css";

const Title = (props) => {
    
  return (
    <div>       
      {props.items.map((item) => {
        return (
          <div className={style.title}>
            <h3>{item.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Title;
