import React from "react";
import {
  ErrorContainer,
  ErrorH1,
  ErrorH2,
  ErrorImg,
  ErrorWrapper,
  BtnWrap,
  Button,
} from "./PageNotFoundElements";

import image from "../../images/notfound.svg";

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <ErrorWrapper>
        <ErrorImg src={image}></ErrorImg>
        <ErrorH1>Page Not Found</ErrorH1>
        <ErrorH2>The page you were looking for doesn't exist</ErrorH2>
      </ErrorWrapper>
      <BtnWrap>
        <Button to="/">Return Home</Button>
      </BtnWrap>
    </ErrorContainer>
  );
};

export default ErrorPage;
