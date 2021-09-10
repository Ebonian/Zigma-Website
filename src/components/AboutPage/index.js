import React from "react";
import {
  AboutContainer,
  AboutHero,
  AboutHeroImageWrapper,

  // Hero Image Import Elements
  ZigmaIso,
  ZigmaShadow,
  FarmWrapper,
  Farm,
  PoonWrapper,
  Poon,
  TitanWrapper,
  Titan,

  //
  AboutHeroWrapper,
  AboutRow,
  AboutColumn1,
  AboutColumn2,
  AboutMembers,
  AboutAbout,
  AboutDonate,
  AboutHeroTextWrap,
  AboutHeroH1,
  AboutHeroP,
  AboutTeamWhite,
  AboutTeamBlack,
} from "./AboutPageElements";
// Import About Image
import ZigmaIsoImg from "../../images/AboutPage/zigmaiso.svg";
import ZigmaShadowImg from "../../images/AboutPage/zigmashadow.svg";
import FarmImg from "../../images/AboutPage/farm.svg";
import PoonImg from "../../images/AboutPage/poon.svg";
import TitanImg from "../../images/AboutPage/titan.svg";

const AboutPageComponents = () => {
  return (
    <AboutContainer>
      <AboutHero id="hero">
        <AboutHeroWrapper>
          <AboutHeroImageWrapper>
            <ZigmaIso src={ZigmaIsoImg} alt="Zigma Iso" />
            <FarmWrapper
              to="farm"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              <Farm src={FarmImg} alt="Farm" />
            </FarmWrapper>
            <ZigmaShadow src={ZigmaShadowImg} alt="Zigma Shadow" />
            <PoonWrapper
              to="poon"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              <Poon src={PoonImg} alt="Poon" />
            </PoonWrapper>
            <TitanWrapper
              to="titan"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              <Titan src={TitanImg} alt="Titan" />
            </TitanWrapper>
          </AboutHeroImageWrapper>
          <AboutHeroTextWrap>
            <AboutHeroH1>Meet The Zigma Team</AboutHeroH1>
            <AboutHeroP>
              With a strong belief, we can achieve anything.
            </AboutHeroP>
          </AboutHeroTextWrap>
        </AboutHeroWrapper>
      </AboutHero>
      <AboutMembers id="members">
        <AboutTeamBlack id="farm"></AboutTeamBlack>
        <AboutTeamBlack id="b.toey"></AboutTeamBlack>
        <AboutTeamBlack id="eve"></AboutTeamBlack>
        <AboutTeamBlack id="poon"></AboutTeamBlack>
        <AboutTeamBlack id="titan"></AboutTeamBlack>
        <AboutTeamBlack id="moddaeng"></AboutTeamBlack>
        <AboutTeamBlack id="tan"></AboutTeamBlack>
        <AboutTeamBlack id="myre"></AboutTeamBlack>
        <AboutTeamBlack id="chin"></AboutTeamBlack>
      </AboutMembers>
      <AboutAbout id="about">
        <AboutTeamWhite></AboutTeamWhite>
        <AboutTeamWhite></AboutTeamWhite>
      </AboutAbout>
      <AboutDonate id="donate">
        <AboutTeamWhite></AboutTeamWhite>
        <AboutTeamWhite></AboutTeamWhite>
      </AboutDonate>
    </AboutContainer>
  );
};

export default AboutPageComponents;
