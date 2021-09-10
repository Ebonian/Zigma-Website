import React from "react";
import {
  PricingContainer,
  PricingH1,
  PricingWrapper,
  PricingTable,
  PricingTr,
  PricingThFunction,
  PricingThPlan,
  FreePricing,
  PaidPricing,
  Price,
  BtnWrap,
  Button,
} from "./PricingTableElements";
import PricingTableLib from "./PricingTable";
import {
  Typing,
  SpeechToText,
  PhotoScanning,
  Analysis,
  Transaction,
  Exporting,
  Goal,
  DeptLoan,
  Investment,
  News,
  Promotion,
  Comparison,
  Team,
  Budget,
  Chats,
  Wallets,
} from "./Data";

const Pricing = () => {
  return (
    <PricingContainer id="pricing">
      <PricingH1>Pricing</PricingH1>
      <PricingWrapper>
        <PricingTable>
          <PricingTr>
            <PricingThFunction></PricingThFunction>
            <PricingThPlan>
              <FreePricing>Standard</FreePricing>
              <Price>Free</Price>
            </PricingThPlan>
            <PricingThPlan>
              <PaidPricing>Pro</PaidPricing>
              <Price>19 THB / Month</Price>
            </PricingThPlan>
            <PricingThPlan>
              <PaidPricing>Team</PaidPricing>
              <Price>49 THB / Month</Price>
            </PricingThPlan>
          </PricingTr>
          <PricingTableLib {...Typing} />
          <PricingTableLib {...SpeechToText} />
          <PricingTableLib {...PhotoScanning} />
          <PricingTableLib {...Analysis} />
          <PricingTableLib {...Transaction} />
          <PricingTableLib {...Exporting} />
          <PricingTableLib {...Goal} />
          <PricingTableLib {...DeptLoan} />
          <PricingTableLib {...Investment} />
          <PricingTableLib {...News} />
          <PricingTableLib {...Promotion} />
          <PricingTableLib {...Comparison} />
          <PricingTableLib {...Team} />
          <PricingTableLib {...Budget} />
          <PricingTableLib {...Chats} />
          <PricingTableLib {...Wallets} />
        </PricingTable>
      </PricingWrapper>
      <BtnWrap>
        <Button to="/pricing" primary={"1"} dark={"1"} dark2={"1"}>
          Learn More
        </Button>
      </BtnWrap>
    </PricingContainer>
  );
};

export default Pricing;
