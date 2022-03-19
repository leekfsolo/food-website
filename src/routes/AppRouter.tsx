import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../common/ui/layout/main-layout/header";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
