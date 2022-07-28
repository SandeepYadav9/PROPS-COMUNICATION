import React, { Fragment, useState } from "react";
import Title from "./components/Title/Title";
import NewTitle from "./components/TitleList/NewTitle";

const App = () => {
  const [titleData, setTitleData] = useState([]);
  const onAddTitleHandler = (title) => {
    setTitleData((prevData) => {
      return [title, ...prevData];
    });
  };
  return (
    <Fragment>
      <NewTitle onAddTitle={onAddTitleHandler} />

      <Title items={titleData} />
    </Fragment>
  );
};

export default App;
