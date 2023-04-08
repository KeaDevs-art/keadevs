import {
  ContentContainer,
  Exp,
  Summary,
  SummaryAvatarLeft,
  HeadingPrimary,
  About,
  SummaryAvatarRight,
  Animation,
  Button,
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
                <Button>→</Button>
            </Animation>
        </ContentContainer>
    );
};

export default Content;

/*
<section class="section-title">
                <div class="section-title-content">
                    <div class="exp">
                    </div>
                    <div class="section-title-content__summary">
                        <img class="section-title-content__summary-avatar-left"
                            src="../images/Meet_Photographic_Artist_Tim_Tadder_-_LA_Weekly-removebg-preview.png" alt="">
                        <h1 class="heading-primary">Kea Devs</h1>
                        <p class="about">Software Engineer / Front End / React Developer</p>
                        <img class="section-title-content__summary-avatar-right"
                            src="../images/WTF_Dude_NFT-removebg-preview-PhotoRoom.png-PhotoRoom.png" alt="">
                    </div>
                    <div class="section-title-content__animation">
                        <a class="btn" href="#main">→</a>
                    </div>
                </div>
            </section>

*/
