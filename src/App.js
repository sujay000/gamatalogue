import React from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      {/* <Routes>
        <Route path={["/game/:id", "/"]} element={<Home />} />
      </Routes> */}
      <Routes>
        <Route path="/*" element={<Home />}></Route>
      </Routes>

      {/* <Home /> */}
    </div>
  );
}

export default App;
