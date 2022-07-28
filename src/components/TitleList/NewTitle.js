import React from "react";

import TitleForm from "./TitleForm";
import style from "./NewTitle.module.css";

const NewTitle = (props) => {
  const saveTitleDataHandler = (enteredTitleData) => {
    const titleData = {
      ...enteredTitleData,
      id: Math.random().toString(),
    };
    props.onAddTitle(titleData);
  };

  return (
    <div className={style.title}>
      <TitleForm onSaveTitleData={saveTitleDataHandler} />
    </div>
  );
};

export default NewTitle;
