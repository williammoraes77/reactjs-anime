import React from "react";
import {
  Bell,
  Users,
  MagnifyingGlass,
  House,
  ChartBar,
} from "@phosphor-icons/react";
import { UserCard } from "../UserCard";

import {
  SideBarContainer,
  SideBarCardContent,
  SidebarTitle,
  Options,
  CardLinkOption,
  OptionTitle,
} from "./styles";
import { useTheme } from "styled-components";

export function Sidebar() {
  const theme = useTheme();
  return (
    <SideBarContainer>
      <SideBarCardContent>
        <UserCard />
      </SideBarCardContent>
      <SidebarTitle>Geral</SidebarTitle>
      <Options>
        <nav>
          <a href="">
            <CardLinkOption>
              <House size={22} color={theme.fontColor} weight="fill" />
              <OptionTitle>Home</OptionTitle>
            </CardLinkOption>
          </a>

          <a href="">
            <CardLinkOption>
              <ChartBar size={22} color={theme.fontColor} weight="fill" />
              <OptionTitle>List</OptionTitle>
            </CardLinkOption>
          </a>
        </nav>
      </Options>
    </SideBarContainer>
  );
}
