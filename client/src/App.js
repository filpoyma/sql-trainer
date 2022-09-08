import React from "react";
import MainScreen from "./screens/MainScreen";

const loader = document.querySelector(".loader");
// const showLoader = () => loader.classList.remove("loader--hide");
const hideLoader = () => loader.classList.add("loader--hide");

const App = () => {
  React.useEffect(hideLoader, []);
  return <MainScreen />;
};
export default App;
