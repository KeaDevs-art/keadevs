import { NavigationBar, Brand, NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuAvatar } from "./header.styles";

import NavAvatar from "../../../../assets/anime_avatar.jpg";


const Header = () => {

    return (
        <header>
            <NavigationBar>
                <Brand>Kea.devs()</Brand>
                <NavigationMenu>
                    <NavigationMenuItem><NavigationMenuLink>// home</NavigationMenuLink></NavigationMenuItem>
                    <NavigationMenuItem><NavigationMenuLink>// expertise</NavigationMenuLink></NavigationMenuItem>
                    <NavigationMenuItem><NavigationMenuLink>// work</NavigationMenuLink></NavigationMenuItem>
                    <NavigationMenuItem><NavigationMenuLink>// experience</NavigationMenuLink></NavigationMenuItem>
                    <NavigationMenuItem><NavigationMenuLink>// contact</NavigationMenuLink></NavigationMenuItem>
                </NavigationMenu>
                <NavigationMenuAvatar src={NavAvatar} />
            </NavigationBar>
        </header>
    );
}

export default Header;
