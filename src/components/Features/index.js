import React from "react";
import Icon1 from "../../images/efficient.svg";
import Icon2 from "../../images/all in one.svg";
import Icon3 from "../../images/secured.svg";
import {
  FeaturesContainer,
  FeaturesH1,
  FeaturesWrapper,
  FeaturesCard,
  FeaturesIcon,
  FeaturesH2,
  FeaturesP,
  LearnMoreWrapper,
  LearnMoreP2,
} from "./FeaturesElements";
import { BtnWrap } from "../InfoSection/InfoElements";
import { ButtonR } from "../ButtonElements";

const Features = () => {
  return (
    <FeaturesContainer id="features">
      <FeaturesH1>Our Features</FeaturesH1>
      <FeaturesWrapper>
        <FeaturesCard>
          <FeaturesIcon src={Icon1} />
          <FeaturesH2>Efficient</FeaturesH2>
          <FeaturesP>
            Design for you - Track your daily money in just a few clicks.
          </FeaturesP>
        </FeaturesCard>
        <FeaturesCard>
          <FeaturesIcon src={Icon2} />
          <FeaturesH2>All In One</FeaturesH2>
          <FeaturesP>
            Everything done in your one App! - History analysis, goal planner,
            budget management, team wallet, and more!
          </FeaturesP>
        </FeaturesCard>
        <FeaturesCard>
          <FeaturesIcon src={Icon3} />
          <FeaturesH2>Secure</FeaturesH2>
          <FeaturesP>
            Our first priority to you - Keep all your informations secure only
            in this app, everythings are safe.
          </FeaturesP>
        </FeaturesCard>
      </FeaturesWrapper>
      <LearnMoreWrapper>
        <LearnMoreP2>
          We think about how you can pull the best <br /> of yourself out
          through our app.
        </LearnMoreP2>
      </LearnMoreWrapper>
      <BtnWrap>
        <ButtonR to="/features" primary="1" dark="1" dark2="1">
          Learn More
        </ButtonR>
      </BtnWrap>
    </FeaturesContainer>
  );
};

export default Features;
