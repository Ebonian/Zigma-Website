import React from "react";
import styled from "styled-components";
import PopupImage from "../../images/SignupPage/popup.svg";
import { Link } from "react-router-dom";

function SubmitPopup(props) {
  return props.trigger ? (
    <PopupContainer>
      <PopupWrapper>
        <PopupRow>
          <PopupColumn1>
            <ImageWrap>
              <Image src={PopupImage} alt="Popup Image" />
            </ImageWrap>
          </PopupColumn1>
          <PopupColumn2>
            <PopupTextWrapper>
              <PopupH1>All Done!</PopupH1>
              <PopupP>
                Feel free to contact us if you have a question, now lets explore
                our site.
              </PopupP>
            </PopupTextWrapper>
            <PopupButtonWrapper>
              <PopupButton to="/" exact="true" primary={1} dark={1} dark2={1}>
                Explore!
              </PopupButton>
            </PopupButtonWrapper>
          </PopupColumn2>
        </PopupRow>
      </PopupWrapper>
    </PopupContainer>
  ) : (
    ""
  );
}

export default SubmitPopup;

export const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupWrapper = styled.div`
  position: relative;
  padding: 64px;
  margin: 0 24px;
  width: 100%;
  max-width: 1000px;
  background-color: #fff;

  @media screen and (max-width: 768px) {
    padding: 50px 24px;
  }
`;

export const PopupRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1" "col2";
  }
`;

export const PopupColumn1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const PopupColumn2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const PopupTextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const ImageWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Image = styled.img`
  width: 80%;
  margin: 0 0 0 30px;
  padding-right: 0;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 0 0 0;
  }
`;

export const PopupH1 = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #2c2d32;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const PopupP = styled.p`
  max-width: 440px;
  font-size: 20px;
  line-height: 24px;
  color: #2c2d32;
`;

export const PopupButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const PopupButton = styled(Link)`
  border-radius: 50px;
  background: #2cd483;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: #2c2d32;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #2c2d32;
    color: #fff;
  }
`;
