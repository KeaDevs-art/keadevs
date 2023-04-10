import styled from "styled-components";

export const ContentContainer = styled.div`
  text-align: center;
`;

export const Exp = styled.div`
  position: absolute;
  top: 13%;
  right: 35%;
  margin-top: 3rem;
  background-color: rgb(245, 201, 121);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: inset 0 0 30px 0 #fff, inset 20px 0 30px #ffd400,
    inset -20px 0 30px red, inset 20px 0 300px #ff40d6,
    inset -20px 0 300px #e3ff4b, 0 0 50px #fff, -10px 0 100px #fbff00,
    10px 0 80px #f55;
`;

export const Summary = styled.div`
  margin-top: 20rem;
  position: relative;
`;

export const SummaryAvatarLeft = styled.img`
  width: 10vw;
  position: absolute;
  top: 0;
  left: 0;
`;

export const SummaryAvatarRight = styled.img`
  width: 10.5vw;
  position: absolute;
  top: 0;
  right: 0;
`;

export const Animation = styled.div`
  margin: 100px auto;
`;
