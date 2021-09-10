import React, { Component } from "react";
import styled from "styled-components";
import SignupImage from "../../images/SignupPage/signup.svg";
import { Link } from "react-router-dom";
import {
  Column1,
  Column2,
  Subtitle,
  TextWrapper,
  TopLine,
} from "../InfoSection/InfoElements";
import SubmitPopup from "../Signup/SubmitPopup";

import fire from "../../fire";

class Signup extends Component {
  //Database Function
  state = {
    text: "",
  };

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  handleSubmit = (e) => {
    let messageRef = fire.database().ref("email").orderByKey().limitToLast(100);
    fire.database().ref("email").push(this.state.text);
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <SignupContainer>
        <SubmitPopup trigger={false} />
        <LogoWrapper>
          <Logo to="/">ZIGMA</Logo>
        </LogoWrapper>
        <SignupWrapper>
          <SignupRow>
            <Column1>
              <ImgWrap>
                <Img src={SignupImage} alt="Be The First" />
              </ImgWrap>
            </Column1>
            <Column2>
              <TextWrapper>
                <TopLine>Signup</TopLine>
                <Heading>Be The First</Heading>
                <Subtitle>
                  The epicness has not arrive yet, at least for now.
                  <br />
                  So sign yourself up using your preferred email and get ready
                  for the release. We will send the announcement to you right
                  away!
                </Subtitle>

                <SubmitButtonWrap>
                  <SignupInput
                    type="email"
                    placeholder="Your Email..."
                    id="inputEmail"
                    onChange={this.handleText}
                  />
                  <SubmitButton
                    to="/submit"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={1}
                    dark={1}
                    dark2={1}
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </SubmitButton>
                </SubmitButtonWrap>
              </TextWrapper>
            </Column2>
          </SignupRow>
        </SignupWrapper>
      </SignupContainer>
    );
  }
}

export default Signup;

export const SignupContainer = styled.div`
  color: #fff;
  background: #010606;
`;

export const SignupWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  margin-top: -64px;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

export const SignupRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #f7f8fa;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const SignupInput = styled.input`
  width: 300px;
  height: 50px;
  border-radius: 1000px;
  border: none;
  box-sizing: border-box;
  padding: 0 20px;
  margin-right: 15px;
  font-size: 1.05rem;
`;

export const SubmitButtonWrap = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 480px) {
    display: grid;
  } ;
`;

export const SubmitButton = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#2CD483" : "#2C2D32")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#2C2D32" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  width: 110px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#2CD483")};
  }

  @media screen and (max-width: 480px) {
    margin-top: 20px;
  } ;
`;

export const LogoWrapper = styled.div`
  margin-left: 22.15vw;
  padding-top: 16px;

  @media screen and (max-width: 1500px) {
    margin-left: 50px;
    padding-top: 16px;
  }
  @media screen and (max-width: 480px) {
    margin-left: 20px;
    padding-top: 16px;
  }
`;

export const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  letter-spacing: 2.5px;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 80%;
  margin: 0 0 10px 0;
  padding-right: 0;

  @media screen and (max-width: 768px) {
    margin-top: 64px;
    width: 100%;
  }
`;
