import React, { ReactElement } from "react";

import ThreeColumnShell from "../../components/shells/ThreeColumnShell";
import Navigation from "../../page-components/headers/header-two";
import AppNavigation from "../../application-components/sidebars/MainNavigation";
import AppNotifications from "../../application-components/sidebars/AppNotifications";
import Content from "../../application-components/appScreens/Dashboard";

const themeColor = "indigo";

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <ThreeColumnShell>
      <Navigation color={themeColor} />
      <AppNavigation color={themeColor} />
      <Content color={themeColor} />
      <AppNotifications />
    </ThreeColumnShell>
  );
}
