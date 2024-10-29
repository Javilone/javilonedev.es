import React from "react";
import { Section0 } from "../section0/section0";
import { Section1 } from "../section1/section1";
import { Section2 } from "../section2/section2";
import { Section3 } from "../section3/section3";
import { Section4 } from "../section4/section4";

import "../init/init_styles.css";

export const InitPage: React.FC = () => {
  return (
    <>
      <hr id="0" className="top-hr" />
      <Section0></Section0>
      <hr id="1" />
      <Section1></Section1>
      <hr id="2" />
      <Section2></Section2>
      <hr id="3" />
      <Section3></Section3>
      <hr id="4" />
      <Section4></Section4>
    </>
  );
};
