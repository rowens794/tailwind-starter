import React, { ReactElement } from "react";
import Heading from "../../../components/pageHeadings/SimpleWithActionText";
import CardBody from "../../../components/shells/CardBasic";
import ActiveCampaigns from "../../../components/tables/ActiveCampaigns";

const activeCampaigns = [
  {
    name: "Loot Box Game #1",
    attraction: "Loot Box",
    fans: 1293,
    couponsGen: 1293,
    ordersRec: 24,
    active: false,
    update: () => console.log("clicked"),
  },
  {
    name: "Loot Box Game #2",
    attraction: "Loot Box",
    fans: 1293,
    couponsGen: 1293,
    ordersRec: 24,
    active: true,
    update: () => console.log("clicked"),
  },
  {
    name: "Loot Box Game #3",
    attraction: "Loot Box",
    fans: 1293,
    couponsGen: 1293,
    ordersRec: 24,
    active: true,
    update: () => console.log("clicked"),
  },
  {
    name: "Loot Box Game #4",
    attraction: "Loot Box",
    fans: 1293,
    couponsGen: 1293,
    ordersRec: 24,
    active: false,
    update: () => console.log("clicked"),
  },
  {
    name: "Loot Box Game #5",
    attraction: "Loot Box",
    fans: 1293,
    couponsGen: 1293,
    ordersRec: 24,
    active: false,
    update: () => console.log("clicked"),
  },
];

interface Props {
  color: string;
}

export default function index({ color }: Props): ReactElement {
  return (
    <div>
      <Heading
        title="Campaigns"
        color={color}
        actionTitle="Create New Campaign"
        actionFunction={() => console.log("clicked")}
      />
      <CardBody>
        <ActiveCampaigns data={activeCampaigns} color={color} />
      </CardBody>
    </div>
  );
}
