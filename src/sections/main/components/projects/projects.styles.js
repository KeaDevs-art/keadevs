import styled from "styled-components";

export const ProjectsContainer = styled.section`
  display: grid;
  grid-template-rows: repeat(4, -webkit-min-content);
  grid-template-rows: repeat(4, min-content);
  grid-template-columns: repeat(6, 1fr);
  align-items: start;
  grid-column-gap: 2.5rem;
  grid-row-gap: 2.5rem;
  margin: 10rem 0;
`;

export const ProjectOne = styled.figure`
  grid-column: 1 / span 2;
  grid-row: 1/2;
`;

export const ProjectTwo = styled.figure`
  grid-column: 3/span 2;
  grid-row: 1/2;
`;

export const ProjectThree = styled.figure`
   grid-column: 5/-1;
  grid-row: 1/2;
`;

export const ProjectFour = styled.figure`
  grid-column: 1/5;
  grid-row: 2/span 2;
`;

export const ProjectFive = styled.figure`
  grid-column: 5/-1;
  grid-row: 2/3;
`;

export const ProjectSix = styled.figure`
  grid-column: 5/-1;
  grid-row: 3/4;
`;

export const ProjectSeven = styled.figure`
   grid-column: 1/span 2;
  grid-row: 4/5;
`;

export const ProjectEight = styled.figure`
grid-column: 3/span 2;
  grid-row: 4/5;
`;

export const ProjectNine = styled.figure`
  grid-column: 5/-1;
  grid-row: 4/5;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
  border-radius: 0.5rem 0.5rem 0 0;
`;

export const ProjectAbout = styled.figcaption`
  background-color: #201f23;
  padding: 3rem;
  border-radius: 0 0 0.5rem 0.5rem;
`;

export const HeadingTertiary = styled.h3`
  font-size: 1.8rem;
`;
