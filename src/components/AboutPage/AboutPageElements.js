import styled from "styled-components";
import { Link } from "react-scroll";

export const AboutContainer = styled.div``;

export const AboutHero = styled.div`
  background: #010606;
  color: #fff;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const AboutHeroWrapper = styled.div`
  display: grid;
  height: auto;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1";
  }
`;

export const AboutColumn1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const AboutColumn2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const AboutHeroImageWrapper = styled.div`
  max-width: 555px;
  height: 120vh;
  padding: 150px 0 250px 0;

  @media screen and (max-width: 768px) {
    padding: 50px 0 250px 0;
  }
`;

// Hero Image Elements

export const ZigmaIso = styled.img`
  position: relative;
  width: 620px;
  left: 50px;
  z-index: 2;

  @media screen and (max-width: 768px) {
  }
`;

export const ZigmaShadow = styled.img`
  position: relative;
  width: 653px;
  left: 550px;
  bottom: 372px;
  margin-bottom: -378px;
  z-index: 0;
`;

export const FarmWrapper = styled(Link)`
  position: relative;
  margin-left: -500px;
  z-index: 3;

  &:hover {
    cursor: pointer;
  }
`;

export const Farm = styled.img`
  position: relative;
  width: 140px;
  bottom: 30px;
  left: 870px;
  margin-left: -500px;
`;

export const PoonWrapper = styled(Link)`
  position: relative;
  z-index: 3;

  &:hover {
    cursor: pointer;
  }
`;

export const Poon = styled.img`
  position: relative;
  width: 140px;
  bottom: -13px;
  left: -429px;
`;

export const TitanWrapper = styled(Link)`
  position: relative;
  z-index: 3;

  &:hover {
    cursor: pointer;
  }
`;

export const Titan = styled.img`
  position: relative;
  width: 170px;
  bottom: 115px;
  left: 100px;
  z-index: 3;
`;

//

export const AboutMembers = styled.div``;

export const AboutAbout = styled.div``;

export const AboutDonate = styled.div``;

export const AboutHeroTextWrap = styled.div`
  text-align: center;
`;

export const AboutHeroH1 = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: 0.2px;
`;

export const AboutHeroP = styled.p`
  color: #2cd483;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 150px;
`;

export const AboutTeamBlack = styled.div`
  background: #010606;
  color: #2c2d32;
  height: 600px;
`;

export const AboutTeamWhite = styled.div`
  background: #f9f9f9;
  color: #2c2d32;
  height: 600px;
`;
