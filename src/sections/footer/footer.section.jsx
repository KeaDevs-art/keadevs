import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import DetailHeading from "../../Typography/detail-heading/detail-heading.component";
import HeadingSecondary from "../../Typography/heading-secondary/heading-secondary.component";

import {
  FooterContainer,
  MediaPlatforms,
  Platform,
  GetInTouch,
} from "./footer.styles";

const Footer = () => {
  return (
    <section id="section-footer">
      <FooterContainer>
        <MediaPlatforms>
          <Platform>
            <GitHubIcon sx={{ fontSize: 80 }} />
            <HeadingSecondary>Github</HeadingSecondary>
          </Platform>
          <Platform>
            <TwitterIcon sx={{ fontSize: 80 }} />
            <HeadingSecondary>Twitter</HeadingSecondary>
          </Platform>
          <Platform>
            <LinkedInIcon sx={{ fontSize: 80 }} />
            <HeadingSecondary>LinkedIn</HeadingSecondary>
          </Platform>
        </MediaPlatforms>
        <GetInTouch>
          <DetailHeading>Would love to join your team</DetailHeading>
          <button className="btn">Get in touch &nbsp; →</button>
        </GetInTouch>
      </FooterContainer>
    </section>
  );
};

export default Footer;
