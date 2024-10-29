import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InitPage } from "../../scenes/init/init";
import { Section1 } from "../../scenes/section1/section1";
import { Section2 } from "../../scenes/section2/section2";
import { Section3 } from "../../scenes/section3/section3";
import { Section4 } from "../../scenes/section4/section4";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitPage />}></Route>
        <Route path="/1" element={<Section1 />}></Route>
        <Route path="/2" element={<Section2 />}></Route>
        <Route path="/3" element={<Section3 />}></Route>
        <Route path="/4" element={<Section4 />}></Route>
        <Route path="/*" element={<h1>404 NOOOT FOUND!</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
