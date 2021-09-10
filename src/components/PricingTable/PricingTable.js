import React from "react";
import {
  PricingTr,
  PricingTdFunction,
  PricingTdPlan,
} from "./PricingTableElements";

const PricingTableLib = ({ feature, standardMark, proMark, teamMark }) => {
  return (
    <PricingTr>
      <PricingTdFunction>{feature}</PricingTdFunction>
      <PricingTdPlan>{standardMark}</PricingTdPlan>
      <PricingTdPlan>{proMark}</PricingTdPlan>
      <PricingTdPlan>{teamMark}</PricingTdPlan>
    </PricingTr>
  );
};

export default PricingTableLib;
