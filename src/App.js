import React from "react";
//pages and components
import Home from "./pages/Home";
import Nav from "./components/Nav";

//router
import { Route, Routes } from "react-router-dom";
//styles
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/*" element={<Home />}></Route>
      </Routes>

      {/* <Home /> */}
    </div>
  );
}

export default App;
