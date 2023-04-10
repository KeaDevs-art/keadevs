import {
  NavigationBar,
  Brand,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuAvatar,
} from "./header.styles";

import NavAvatar from "../../../../assets/anime_avatar.jpg";

const Header = () => {
  const links = [
    {
      link: "// home",
      source: "#",
    },
    {
      link: "// expertise",
      source: "#",
    },
    {
      link: "// work",
      source: "#",
    },
    {
      link: "// experience",
      source: "#",
    },
    {
      link: "// contact",
      source: "#",
    },
  ];

  return (
    <header>
      <NavigationBar>
        <Brand>Kea.devs()</Brand>
        <NavigationMenu>
          {links.map(({ link, source }, _idx) => (
            <NavigationMenuItem key={`${source}${_idx}-${link}`}>
              <NavigationMenuLink src={source}>{link}</NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenu>
        <NavigationMenuAvatar src={NavAvatar} />
      </NavigationBar>
    </header>
  );
};

export default Header;
