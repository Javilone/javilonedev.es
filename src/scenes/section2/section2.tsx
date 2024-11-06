import React from "react";

import "../section2/section2_styles.css";
import YullsProject from "../../pods/section2/caller_YullsBakery";
import RickMortyProject from "../../pods/section2/caller_RickMorty";
import MedacProject from "../../pods/section2/caller_MedacProject";
import MorseProject from "../../pods/section2/caller_MorseApp";
import RomanProject from "../../pods/section2/caller_RomanConverter";
import PalindromeProject from "../../pods/section2/caller_palindrome";
import SieteYMediaProject from "../../pods/section2/caller_sieteYmedia";
import TraineeProjectsContainer from "../../pods/section2/trainee_Projects";

export const Section2: React.FC = () => {
  return (
    <div className="section-global fadeIn2">
      <h3 className="section-title">{`< Proyectos />`}</h3>
      <YullsProject />
      <RickMortyProject />
      <MedacProject />
      <TraineeProjectsContainer>
        <SieteYMediaProject />
        <MorseProject />
        <RomanProject />
        <PalindromeProject />
      </TraineeProjectsContainer>
    </div>
  );
};
