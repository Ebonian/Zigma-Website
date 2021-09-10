import React from "react";
import styled from "styled-components";

function PopUp(props) {
  return props.trigger ? (
    <Popup>
      <PopupInner>
        <CloseBtn onClick={() => props.setTrigger(false)}>close</CloseBtn>
        {props.children}
      </PopupInner>
    </Popup>
  ) : (
    ""
  );
}

export default PopUp;

export const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const PopupInner = styled.div`
  position: relative;
  padding: 32px;
  width: 100%;
  max-width: 640px;
  background-color: #fff;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
`;
