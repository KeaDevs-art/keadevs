import { Fragment } from "react";

import HeaderContainer from "./components/header/header.component";
import Content from "./components/title-content/title-content.component";

import  { TitleSectionContainer } from "./title.styles.js";

const TitleSection = () => {
  return (
    <TitleSectionContainer>
      <HeaderContainer />
      <Content />
    </TitleSectionContainer>
  );
};

export default TitleSection;
