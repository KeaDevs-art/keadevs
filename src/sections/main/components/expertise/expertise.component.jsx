import {
  ExpertiseContainer,
  HeadingSecondary,
  CardGroup,
  PreviousButton,
  Scroller,
  ScrollerItemShown,
  ScrollerItemHidden,
  CardTitle,
  CardContent,
  DetailNormal,
  NextButton,
  HeadingTertiary,
} from "./expertise.styles";

const Expertise = () => {
  return (
    <ExpertiseContainer id="expertise">
      <HeadingSecondary>My Expertise</HeadingSecondary>
      <CardGroup>
        <PreviousButton>&#10094;</PreviousButton>
        <Scroller>
          <ScrollerItemShown>
            <tr>
              <CardTitle>
                <HeadingTertiary>Frontend Developer</HeadingTertiary>
              </CardTitle>
              <CardContent>
                <DetailNormal>
                  Passionate about UI aesthetics. Experienced in React framework
                  development.
                </DetailNormal>
              </CardContent>
            </tr>
          </ScrollerItemShown>
          <ScrollerItemHidden>
            <tr>
              <CardTitle>
                <HeadingTertiary>Software Engineer</HeadingTertiary>
              </CardTitle>
              <CardContent>
                <DetailNormal>
                  Experienced in both functional and OOP: Python, Java,
                  JavaScript, TypeScript.
                </DetailNormal>
              </CardContent>
            </tr>
          </ScrollerItemHidden>
        </Scroller>
        <NextButton>&#10095;</NextButton>
      </CardGroup>
    </ExpertiseContainer>
  );
};

export default Expertise;
