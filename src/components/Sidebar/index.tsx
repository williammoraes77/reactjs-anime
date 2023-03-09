import React from "react";
import { BookOpen, House, MonitorPlay } from "@phosphor-icons/react";
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
import { NavLink } from "react-router-dom";

export function Sidebar() {
  const theme = useTheme();
  return (
    <SideBarContainer>
      <SideBarCardContent>
        <UserCard />
      </SideBarCardContent>
      <SidebarTitle>Geral</SidebarTitle>
      <Options>
        <NavLink to="/" title="Home">
          <CardLinkOption>
            <House size={22} color={theme.fontColor} weight="fill" />
            <OptionTitle>Home</OptionTitle>
          </CardLinkOption>
        </NavLink>
        <NavLink to="/animes" title="Listar">
          <CardLinkOption>
            <MonitorPlay size={22} color={theme.fontColor} weight="fill" />
            <OptionTitle>Animes</OptionTitle>
          </CardLinkOption>
        </NavLink>
        <NavLink to="/mangas" title="Listar">
          <CardLinkOption>
            <BookOpen size={22} color={theme.fontColor} weight="fill" />
            <OptionTitle>Mangás</OptionTitle>
          </CardLinkOption>
        </NavLink>
      </Options>
    </SideBarContainer>
  );
}
