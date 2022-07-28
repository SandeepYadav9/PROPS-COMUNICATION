import React, { useState } from "react";

import style from "./TitleForm.module.css";

const TitleForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const titleData = {
      title: enteredTitle,
    };
   
    props.onSaveTitleData(titleData);
    setEnteredTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={style.titles}>
        <div className={style.title}>
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
      </div>
      <div className={style.actions}>
        <button type="submit">Add Title</button>
      </div>
    </form>
  );
};

export default TitleForm;
