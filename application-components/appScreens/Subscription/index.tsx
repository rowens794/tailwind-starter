import React, { ReactElement } from "react";
import Heading from "../../../components/pageHeadings/Simple";
import CardBody from "../../../components/shells/CardBasic";
import Pricing from "../../../page-components/pricing/CarnivalCustom";

interface Props {
  color: string;
  currentPlan: string;
}

export default function index({ color, currentPlan }: Props): ReactElement {
  return (
    <div>
      <Heading title="Subscription" />
      <CardBody>
        <Pricing color={color} currentPlan={currentPlan} />
      </CardBody>
    </div>
  );
}
