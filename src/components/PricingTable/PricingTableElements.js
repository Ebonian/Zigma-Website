import styled from "styled-components";
import { Link } from "react-router-dom";

export const PricingContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f9f9;
`;

export const PricingH1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: #000;
  margin: 64px 0;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const PricingWrapper = styled.div`
  margin: 0 20px 64px 20px;

  @media screen and (max-width: 480px) {
    margin: 0 5px 64px 5px;
  }
`;

export const PricingTable = styled.table`
  border-collapse: collapse;
  color: #2c2d32;
  width: 100%;
`;

export const PricingTr = styled.tr`
  height: auto;
`;

export const PricingThFunction = styled.th`
  font-size: 1.4rem;
  font-weight: 600;
  text-align: left;
  text-transform: uppercase;
  padding: 8px;
  height: ;
  width: 500px;
`;

export const PricingThPlan = styled.th`
  text-align: center;
  padding: 8px;
  height: ;
  width: 150px;
`;

export const PricingTdFunction = styled.td`
  border-bottom: 1px solid #dddddd;
  font-size: 1.3rem;
  font-weight: 300;
  text-align: left;
  padding: 8px;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const PricingTdPlan = styled.td`
  border-bottom: 1px solid #dddddd;
  font-size: 1.8rem;
  text-align: center;
  padding: 8px;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const FreePricing = styled.h3`
  font-size: 1.7rem;
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const PaidPricing = styled.h3`
  color: #11be94;
  font-size: 1.7rem;
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const Price = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 32px;

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Button = styled(Link)`
  border-radius: 50px;
  background-color: #2c2d32;
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
  margin-bottom: 64px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #2cd483;
  }
`;
