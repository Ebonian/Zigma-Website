import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaDiscord, FaFacebook, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinkR,
  FooterLinkS,
  FooterLinkA,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Features</FooterLinkTitle>
              <FooterLinkR to="/features">Overview</FooterLinkR>
              <FooterLinkR to="/features">Function</FooterLinkR>
              <FooterLinkS
                to="features"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-80}
              >
                Team Plan
              </FooterLinkS>
              <FooterLinkS
                to="pricing"
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-80}
              >
                Pricing
              </FooterLinkS>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Get Started</FooterLinkTitle>
              <FooterLinkR to="/support">Support</FooterLinkR>
              <FooterLinkR to="/support">Tutorials</FooterLinkR>
              <FooterLinkR to="/support">Docs</FooterLinkR>
              <FooterLinkR to="/support">Terms & Conditions</FooterLinkR>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About</FooterLinkTitle>
              <FooterLinkR to="/about">Our Team</FooterLinkR>
              <FooterLinkR to="/about">Stories</FooterLinkR>
              <FooterLinkR to="/about">Community</FooterLinkR>
              <FooterLinkR to="/about">Feedback</FooterLinkR>
              <FooterLinkR to="/about">Donate</FooterLinkR>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLinkA
                href="about:blank"
                target="_blank"
                aria-label="Facebook"
              >
                Facebook
              </FooterLinkA>
              <FooterLinkA
                href="//www.youtube.com/channel/UCxHVIG4QippqASV1-fqL3vA"
                target="_blank"
                aria-label="YouTube"
              >
                YouTube
              </FooterLinkA>
              <FooterLinkA
                href="//www.discord.gg/WZk8wecY"
                target="_blank"
                aria-label="Discord"
              >
                Discord
              </FooterLinkA>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              ZIGMA
            </SocialLogo>
            <WebsiteRights>Working continuously since 2020.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="about:blank"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="//www.youtube.com/channel/UCxHVIG4QippqASV1-fqL3vA"
                target="_blank"
                aria-label="YouTube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="//www.discord.gg/WZk8wecY"
                target="_blank"
                aria-label="Discord"
              >
                <FaDiscord />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
