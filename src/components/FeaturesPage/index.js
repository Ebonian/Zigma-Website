import React from "react";
import {
  MainFunction,
  MainFunctionWrap,
  MainFunctionImage,
} from "./FeaturesPageElements";

import FunctionImage from "../../images/FeaturesPage/add.png";

const FeaturesPageComponents = () => {
  return (
    <MainFunction>
      <MainFunctionWrap>
        <MainFunctionImage src={FunctionImage}></MainFunctionImage>
      </MainFunctionWrap>
    </MainFunction>
  );
};

export default FeaturesPageComponents;
