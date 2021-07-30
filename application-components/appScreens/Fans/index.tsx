import React, { ReactElement } from "react";
import Heading from "../../../components/pageHeadings/SimpleWithActions";
import CardBody from "../../../components/shells/CardBasic";

interface Props {
  color: string;
}

export default function index({ color }: Props): ReactElement {
  return (
    <div>
      <Heading
        title="Fans"
        color={color}
        actionTitle="Create New Campaign"
        actionFunction={() => console.log("clicked")}
      />
      <CardBody>
        {/* <ActiveCampaigns data={activeCampaigns} color={color} /> */}
      </CardBody>
    </div>
  );
}
