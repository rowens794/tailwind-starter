import React, { ReactElement } from "react";
import Heading from "../../../components/pageHeadings/SimpleWithActionText";
import CardBody from "../../../components/shells/CardBasic";
import RightAlign from "../../../components/shells/FullWidthRightAlign";
import DateSelector from "../../../components/buttons/ButtonGroup";
import StatCards from "../../../application-components/StatisticCardGroup";
import ActiveGames from "../../../components/tables/ActiveGames";

const stats = [
  { name: "Games Played", stat: "1,423" },
  { name: "Prizes Claimed", stat: "1,231" },
  { name: "Revenue Generated", stat: "$23,423" },
];

const activeGames = [
  {
    name: "Loot Box Game #1",
    gameType: "Loot Box",
    prizes: "1,213",
    revenue: "$13,245",
  },
  {
    name: "Loot Box Game #2",
    gameType: "Loot Box",
    prizes: "13",
    revenue: "$23,245",
  },
  {
    name: "Loot Box Game #3",
    gameType: "Loot Box",
    prizes: "213",
    revenue: "$323,245",
  },
  {
    name: "Loot Box Game #4",
    gameType: "Loot Box",
    prizes: "113",
    revenue: "$3,245",
  },
  {
    name: "Loot Box Game #5",
    gameType: "Loot Box",
    prizes: "1,553",
    revenue: "$245",
  },
];

interface Props {
  color: string;
}

export default function index({ color }: Props): ReactElement {
  return (
    <div>
      <Heading
        title="Dashboard"
        color={color}
        actionTitle="Create New Campaign"
        actionFunction={() => console.log("clicked")}
      />
      <CardBody>
        <RightAlign>
          <DateSelector buttonItems={dateSelectorButtons} />
        </RightAlign>

        <StatCards color={color} data={stats} />
        <ActiveGames data={activeGames} color={color} />
      </CardBody>
    </div>
  );
}

const dateSelectorButtons = [
  { name: "today", handler: () => console.log("clicked today") },
  { name: "week", handler: () => console.log("clicked week") },
  { name: "month", handler: () => console.log("clicked month") },
  {
    name: "all time",
    handler: () => console.log("clicked all time"),
  },
];
