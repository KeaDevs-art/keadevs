import styled from "styled-components";

export const ExpertiseContainer = styled.section`
  text-align: center;
  margin: 5rem 0;
`;

export const HeadingSecondary = styled.h2`
  line-height: 1.5;
  letter-spacing: 2.2;
  font-size: 5vw;
`;

export const CardGroup = styled.div`
  display: grid;
  grid-template-columns: -webkit-min-content -webkit-max-content -webkit-min-content;
  grid-template-columns: min-content max-content min-content;
  align-items: center;
  justify-content: center;
  grid-column-gap: 15rem;
  margin-top: 4rem;
`;

export const PreviousButton = styled.button`
  font-size: 2rem;
  text-decoration: none;
  color: #fefefe;
  text-decoration: none;
  display: inline-block;
  position: relative;
  border: none;
  border-radius: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const Scroller = styled.div`
  display: grid;
  grid-auto-flow: column;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ScrollerItemShown = styled.table`
  margin: 0.5rem auto;
  position: relative;
  -webkit-animation: show-shown 0.5s ease;
  animation: show-shown 0.5s ease;
`;

export const CardTitle = styled.td`
  padding: 8rem 5rem;
  border: 1px solid #fefefe;
  background-color: #1a1615;
  border-radius: 2rem 0 0 2rem;
`;

export const HeadingTertiary = styled.h3`
  font-size: 1.8rem;
`;

export const CardContent = styled.td`
  padding: 8rem 5rem;
  border: 1px solid #fefefe;
  background-color: rgba(183, 133, 123, 0.9333333333);
  border-radius: 0 2rem 2rem 0;
`;

export const DetailNormal = styled.p`
  font-size: 1.4rem;
`;

export const ScrollerItemHidden = styled.table`
  margin: 0.5rem auto;
  position: relative;
  display: none;
  -webkit-animation: show-hidden 0.5s ease;
  animation: show-hidden 0.5s ease;
`;

export const NextButton = styled.button`
  font-size: 2rem;
  text-decoration: none;
  color: #fefefe;
  text-decoration: none;
  display: inline-block;
  position: relative;
  border: none;
  border-radius: 0;
  background-color: transparent;
  cursor: pointer;
`;
