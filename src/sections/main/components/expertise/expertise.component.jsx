import HeadingSecondary from "../../../../Typography/heading-secondary/heading-secondary.component";
import HeadingTertiary from "../../../../Typography/heading-tertiary/heading-tertiary.component";
import Detail from "../../../../Typography/detail/detail.component";
import {
  ExpertiseContainer,
  CardGroup,
  PreviousButton,
  Scroller,
  ScrollerItemShown,
  ScrollerItemHidden,
  CardTitle,
  CardContent,
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
            <tbody>
              <tr>
                <CardTitle>
                  <HeadingTertiary>Frontend Developer</HeadingTertiary>
                </CardTitle>
                <CardContent>
                  <Detail>
                    Passionate about UI aesthetics. Experienced in React
                    framework development.
                  </Detail>
                </CardContent>
              </tr>
            </tbody>
          </ScrollerItemShown>
          <ScrollerItemHidden>
            <tbody>
              <tr>
                <CardTitle>
                  <HeadingTertiary>Software Engineer</HeadingTertiary>
                </CardTitle>
                <CardContent>
                  <Detail>
                    Experienced in both functional and OOP: Python, Java,
                    JavaScript, TypeScript.
                  </Detail>
                </CardContent>
              </tr>
            </tbody>
          </ScrollerItemHidden>
        </Scroller>
        <NextButton>&#10095;</NextButton>
      </CardGroup>
    </ExpertiseContainer>
  );
};

export default Expertise;
