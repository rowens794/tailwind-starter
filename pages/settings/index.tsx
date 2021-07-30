import React, { ReactElement } from "react";

import TwoColumnShell from "../../components/shells/TwoColumnShell";
import Navigation from "../../page-components/headers/header-two";
import AppNavigation from "../../application-components/sidebars/MainNavigation";
import Content from "../../application-components/appScreens/Settings";

const themeColor = "indigo";

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <TwoColumnShell>
      <Navigation color={themeColor} />
      <AppNavigation color={themeColor} />
      <Content color={themeColor} />
    </TwoColumnShell>
  );
}
