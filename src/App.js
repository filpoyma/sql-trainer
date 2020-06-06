import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainScreen from "./screens/MainScreen";
import Header from "./components/Header";

export default () => (
  <>
    <Header />
    <MainScreen />
  </>
);

// export default () => (
//   <Provider store={store}>
//     <BrowserRouter>
//       <Header />
//       <Routers />
//     </BrowserRouter>
//   </Provider>
// );
