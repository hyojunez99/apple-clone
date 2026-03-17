import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import AppleLandingPage from "./pages/AppleLandingPage";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppleLandingPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
