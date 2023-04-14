import HeadingSecondary from "../../../../Typography/heading-secondary/heading-secondary.component";
import HeadingTertiary from "../../../../Typography/heading-tertiary/heading-tertiary.component";
import { ExpertiseItem } from "./expertise-item.component";
import {
  ExpertiseContainer,
  CardGroup,
  PreviousButton,
  Scroller,
  ScrollerItemShown,
  ScrollerItemHidden,
  NextButton,
} from "./expertise.styles";

const Expertise = () => {
  const Next = () => {
    document.querySelector(".shown").style.display = "none";
    document.querySelector(".hidden").style.display = "block";
  };

  const Previous = () => {
    document.querySelector(".shown").style.display = "block";
    document.querySelector(".hidden").style.display = "none";
  };

  return (
    <ExpertiseContainer id="expertise">
      <HeadingSecondary>My Expertise</HeadingSecondary>
      <CardGroup>
        <PreviousButton onClick={Previous}>&#10094;</PreviousButton>
        <Scroller>
          <ScrollerItemShown className="shown">
            <ExpertiseItem
              cardTitle="Frontend Developer"
              detail="Passionate about UI aesthetics. Experienced in React framework development."
            />
          </ScrollerItemShown>
          <ScrollerItemHidden className="hidden">
            <ExpertiseItem
              cardTitle="Software Engineer"
              detail="Experienced in both functional and OOP: Python, Java, JavaScript, TypeScript."
            />
          </ScrollerItemHidden>
        </Scroller>
        <NextButton onClick={Next}>&#10095;</NextButton>
      </CardGroup>
    </ExpertiseContainer>
  );
};

export default Expertise;
