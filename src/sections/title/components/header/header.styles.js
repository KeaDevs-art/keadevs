import styled from "styled-components";
// import { ReactComponent as Avatar } from "../../../../assets/anime_avatar.jpg";

export const NavigationBar = styled.nav`
  padding: 3rem 0;
  display: flex;
  justify-content: space-between;
`;

export const Brand = styled.h1`
  font-family: monospace;
  font-size: 2.5rem;
`;

export const NavigationMenu = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavigationMenuItem = styled.li`
  list-style-type: none;

  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export const NavigationMenuLink = styled.a`
  font-size: 1.2rem;
  text-decoration: none;
  color: #fefefe;
  font-size: 1.4rem;
  cursor: pointer;
`;

export const NavigationMenuAvatar = styled.img`
  width: 4vh;
  height: 4vh;
  border-radius: 50%;
  cursor: pointer;
`;
