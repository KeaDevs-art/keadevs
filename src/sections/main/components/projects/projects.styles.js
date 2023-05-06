import styled from "styled-components";

export const ProjectsHeading = styled.div`
  text-align: center;
  margin: 4rem auto;
`;

export const ProjectsContainer = styled.section`
  display: grid;
  grid-template-rows: repeat(4, -webkit-min-content);
  grid-template-rows: repeat(4, min-content);
  grid-template-columns: repeat(6, 1fr);
  align-items: start;
  grid-column-gap: 2.5rem;
  grid-row-gap: 2.5rem;
  margin: 5rem 0 10rem 0;
`;

export const Project = styled.figure`
position: relative;

  ${'' /* &:hover {
    &::after {
      content: "";
      color: red;
      background-color: rgba(255, 255, 255, .4);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  } */}
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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeadingTertiary = styled.h3`
  font-size: 1.8rem;
`;
