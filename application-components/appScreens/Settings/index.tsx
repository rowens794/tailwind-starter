import React, { ReactElement } from "react";
import Heading from "../../../components/pageHeadings/Simple";
import CardBody from "../../../components/shells/CardBasic";

interface Props {
  color: string;
}

export default function index({ color }: Props): ReactElement {
  return (
    <div>
      <Heading title="Settings" />
      <CardBody>
        {/* <ActiveCampaigns data={activeCampaigns} color={color} /> */}
      </CardBody>
    </div>
  );
}
