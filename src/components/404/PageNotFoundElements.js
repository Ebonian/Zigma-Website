import styled from "styled-components";
import { Link } from "react-router-dom";

export const ErrorContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
  height: 100vh;
`;

export const ErrorWrapper = styled.div`
  text-align: center;
`;

export const ErrorImg = styled.img`
  width: 640px;
  height: auto;
  margin: 32px;
`;

export const ErrorH1 = styled.h1`
  color: #2c2d32;
  font-size: 3rem;
  font-weight: 600;
`;

export const ErrorH2 = styled.h2`
  color: ;
  font-weight: 400;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Button = styled(Link)`
  border-radius: 50px;
  background-color: #2cd483;
  white-space: nowrap;
  padding: 12px 30px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  margin: 32px 0;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #a4a4a4;
  }
`;
