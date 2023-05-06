import Button from "../../../../components/button/button.component";
import HeadingPrimary from "../../../../typography/heading-primary/heading-primary";
import About from "../../../../Typography/about/about-paragraph";
import {
  ContentContainer,
  Exp,
  Summary,
  SummaryAvatarLeft,
  SummaryAvatarRight,
  Animation,
} from "./title-content.styles";

import AvatarLeft from "../../../../assets/Meet_Photographic_Artist_Tim_Tadder_-_LA_Weekly-removebg-preview.png";
import AvatarRight from "../../../../assets/WTF_Dude_NFT-removebg-preview-PhotoRoom.png-PhotoRoom.png";

const Content = () => {

    return (
        <ContentContainer>
            <Exp />
            <Summary>
                <SummaryAvatarLeft src={AvatarLeft} />
                <HeadingPrimary>Kea Devs</HeadingPrimary>
                <About>Software Engineer / Front End / React Developer</About>
                <SummaryAvatarRight src={AvatarRight} />
            </Summary>
            <Animation>
                <Button href="#expertise">→</Button>
            </Animation>
        </ContentContainer>
    );
};

export default Content;
