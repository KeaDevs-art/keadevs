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
import Button from "../../components/button/button.component";
import Detail from "../../Typography/detail/detail.component";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <section id="section-footer">
      <FooterContainer>
        <GetInTouch>
          <DetailHeading>
            Let's enrich lives through the application of technology
          </DetailHeading>
          <Button className="btn"><Detail>Get in touch &nbsp; →</Detail></Button>
        </GetInTouch>
        <MediaPlatforms>
          <Platform>
            <GitHubIcon sx={{ fontSize: 80 }} />
            <HeadingSecondary>Github</HeadingSecondary>
          </Platform>
          <Platform>
            <LinkedInIcon sx={{ fontSize: 80 }} />
            <HeadingSecondary>LinkedIn</HeadingSecondary>
          </Platform>
          <Platform>
            <TwitterIcon sx={{ fontSize: 80 }} />
            <HeadingSecondary>Twitter</HeadingSecondary>
          </Platform>
        </MediaPlatforms>
        <Detail>&copy; {year} Shadow products by KeaDevs</Detail>
      </FooterContainer>
    </section>
  );
};

export default Footer;
