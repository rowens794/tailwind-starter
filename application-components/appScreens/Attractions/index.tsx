import React, { ReactElement } from "react";
import Heading from "../../../components/pageHeadings/SimpleWithActionText";
import CardBody from "../../../components/shells/CardBasic";
import AttractionCardGroup from "../../AttractionCardGroup";

interface Props {
  color: string;
  attractions: {
    name: string;
    tagline: string;
    gameID: string;
    imageUrl: string;
    imgWidth: number;
    imgHeight: number;
    active: boolean;
  }[];
}

export default function index({ color, attractions }: Props): ReactElement {
  return (
    <div>
      <Heading
        title="Attractions"
        color={color}
        actionTitle="Create New Campaign"
        actionFunction={() => console.log("clicked")}
      />
      <CardBody>
        <AttractionCardGroup attractions={attractions} color={color} />
      </CardBody>
    </div>
  );
}
