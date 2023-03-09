import React from "react";
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
              <InfoTop>Overview</InfoTop>
              <InfoTitle>Bom dia, William</InfoTitle>
              <InfoResume>Resumo da pagina vai aqui!</InfoResume>
            </PageInfos>
            <CreateButtom type="button">Nova transacao</CreateButtom>
          </PageTitleContainer>
          <BodyContent>
            <BalanceCard />
            <BalanceCard />
          </BodyContent>
        </main>
      </Wrapper>
    </div>
  );
}
