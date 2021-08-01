import React, { ReactElement } from "react";

import ThreeColumnShell from "../../components/shells/TwoColumnShell";
import Navigation from "../../page-components/headers/header-two";
import AppNavigation from "../../application-components/sidebars/MainNavigation";
import Content from "../../application-components/appScreens/Attractions";

const themeColor = "indigo";

const attractions = [
  {
    name: "The Lootbox",
    tagline: "Simple & Fun",
    gameID: "123456789",
    imageUrl:
      "https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_176/v1627760808/TailwindImages/chest.png",
    imgWidth: 176,
    imgHeight: 166,
    active: true,
  },
  {
    name: "The Wheel",
    tagline: "Take Lady Luck for a Spin",
    gameID: "234567891",
    imageUrl:
      "https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_176/v1627692509/TailwindImages/WheelImg.png",
    imgWidth: 176,
    imgHeight: 176,
    active: false,
  },
  {
    name: "The Hammer",
    tagline: "Speed and Strength",
    gameID: "345678912",
    imageUrl:
      "https://res.cloudinary.com/dfebwzrhb/image/upload/c_scale,w_60/v1627692505/TailwindImages/HammerImg.png",
    imgWidth: 60,
    imgHeight: 179,
    active: false,
  },
  // More attractions...
];

interface Props {}
export default function index({}: Props): ReactElement {
  return (
    <ThreeColumnShell>
      <Navigation color={themeColor} />
      <AppNavigation color={themeColor} />
      <Content color={themeColor} attractions={attractions} />
    </ThreeColumnShell>
  );
}
