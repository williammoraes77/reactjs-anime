import React from "react";
import { NavLink } from "react-router-dom";
import { BalanceCard } from "../../components/BalanceCard";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import {
  Container,
  Wrapper,
  PageTitleContainer,
  PageInfos,
  InfoTop,
  InfoTitle,
  InfoResume,
  CreateButtom,
  BodyContent,
} from "./styles";

export function Home() {
  return (
    <div>
      <Wrapper>
        <Sidebar />
        <main>
          <PageTitleContainer>
            <PageInfos>
              <InfoTitle>Bom dia, William</InfoTitle>
              <InfoResume>Escolha o que deseja ver!</InfoResume>
            </PageInfos>
          </PageTitleContainer>
          <BodyContent>
            <NavLink to="/animes" title="Animes">
              <BalanceCard />
            </NavLink>
            <NavLink to="/mangas" title="Mangas">
              <BalanceCard />
            </NavLink>
          </BodyContent>
        </main>
      </Wrapper>
    </div>
  );
}
