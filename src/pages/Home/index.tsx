import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HomeCard } from "../../components/HomeCard";
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
import { api } from "../../server/api";

export function Home() {
  const [animesAmount, setAnimesAmount] = useState(0);
  const [mangasAmount, setMangasAmount] = useState(0);

  async function loadAnimesAmount() {
    try {
      const response = await api.get("/anime");

      console.log(response.data.meta.count);
      setAnimesAmount(response.data.meta.count);
    } catch (error) {}
  }
  async function loadMangasAmount() {
    try {
      const response = await api.get("/manga");

      console.log(response.data.meta.count);
      setMangasAmount(response.data.meta.count);
    } catch (error) {}
  }

  useEffect(() => {
    loadAnimesAmount();
    loadMangasAmount();
  }, []);

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
              <HomeCard name="Animes" amount={animesAmount} />
            </NavLink>
            <NavLink to="/mangas" title="Mangás">
              <HomeCard name="Mangas" amount={mangasAmount} />
            </NavLink>
          </BodyContent>
        </main>
      </Wrapper>
    </div>
  );
}
