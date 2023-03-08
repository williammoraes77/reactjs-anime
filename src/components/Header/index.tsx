import React from "react";
import { Bell, Users, MagnifyingGlass } from "@phosphor-icons/react";
import { HeaderContainer, HeaderContent } from "./styles";

import logoImg from "../../assets/logo.png";
import { UserImage } from "../UserImage";
import { useTheme } from "styled-components";

export function Header() {
  const theme = useTheme();
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <nav>
          <a href="">
            <MagnifyingGlass size={32} color={theme.fontColor} weight="fill" />
          </a>
          <a href="">
            <Users size={32} color={theme.fontColor} weight="fill" />
          </a>
          <a href="">
            <Bell size={32} color={theme.fontColor} weight="fill" />
          </a>
          <a href="">
            <UserImage />
          </a>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  );
}
