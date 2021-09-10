import styled from "styled-components";

export const FeaturesContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding-bottom: 80px;
`;

export const FeaturesWrapper = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 20px;
  padding: 0 50px;

  @media screen and (max-width: 1150px) {
    padding: 0 20px;
  }

  @media screen and (max-width: 860px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const FeaturesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 430px;
  width: 330px;
  padding: 60px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 1150px) {
    width: 250px;
    height: 370px;
    padding: 20px 20px 0 20px;
  }

  @media screen and (max-width: 860px) {
    width: 330px;
    height: 430px;
    padding: 60px;
  }

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const FeaturesIcon = styled.img`
  height: 160px;
  width: auto;
  margin-bottom: 10px;

  @media screen and (max-width: 1150px) {
    width: 90%;
  }

  @media screen and (max-width: 860px) {
    width: auto;
  }
`;

export const FeaturesH1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: #fff;
  margin: 64px 0;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const FeaturesH2 = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 10px;
`;

export const FeaturesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const LearnMoreWrapper = styled.div`
  text-align: center;
  color: #fff;
  padding: 70px 0 35px 0;
`;

export const LearnMoreP2 = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
`;
