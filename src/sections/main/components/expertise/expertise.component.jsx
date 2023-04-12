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
  return (
    <ExpertiseContainer id="expertise">
      <HeadingSecondary>My Expertise</HeadingSecondary>
      <CardGroup>
        <PreviousButton>&#10094;</PreviousButton>
        <Scroller>
          <ScrollerItemShown>
            <ExpertiseItem
              cardTitle="Frontend Developer"
              detail="Passionate about UI aesthetics. Experienced in React framework development."
            />
          </ScrollerItemShown>
          <ScrollerItemHidden>
            <ExpertiseItem
              cardTitle="Software Engineer"
              detail="Experienced in both functional and OOP: Python, Java, JavaScript, TypeScript."
            />
          </ScrollerItemHidden>
        </Scroller>
        <NextButton>&#10095;</NextButton>
      </CardGroup>
    </ExpertiseContainer>
  );
};

export default Expertise;
