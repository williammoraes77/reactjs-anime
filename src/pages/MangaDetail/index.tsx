import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../server/api";

import { dateFormatter } from "../../utils/formatter";

import {
  Wrapper,
  PageTitleContainer,
  PageInfos,
  InfoTitle,
  CreateButtom,
  BodyContent,
  InfoContent,
  TitleContent,
  DateContent,
  TextContent,
} from "./styles";

interface MangaProps {
  id: number;
  type: string;
  links: {
    self: string;
  };
  attributes: {
    canonicalTitle: string;
    averageRating: string;
    ageRatingGuide: string;
    posterImage: {
      small: string;
      large: string;
      medium: string;
    };
    synopsis: string;
    startDate: string;
    endDate: string;
    volumeCount: string;
    status: string;
  };
}

export function MangaDetail() {
  const { id } = useParams();
  const [manga, setManga] = useState<MangaProps>({} as MangaProps);
  const [loading, setLoading] = useState(true);

  async function loadManga(id: string) {
    try {
      const response = await api.get(`/manga/${id}`);

      console.log(response.data);
      setManga(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (id) {
      loadManga(id);
    }
  }, []);
  return (
    <div>
      <Wrapper>
        <Sidebar />
        <main>
          <PageTitleContainer>
            <PageInfos>
              <InfoTitle>Detalhe do Manga</InfoTitle>
            </PageInfos>
            <NavLink to="/mangas" title="Mangas">
              <CreateButtom type="button">Voltar</CreateButtom>
            </NavLink>
          </PageTitleContainer>
          {!loading && (
            <BodyContent>
              <img src={manga.attributes.posterImage.medium} alt="" />

              <InfoContent>
                <TitleContent>
                  <h2>{manga.attributes.canonicalTitle}</h2>
                </TitleContent>
                <DateContent>
                  <h3>
                    Start Date :{" "}
                    {dateFormatter.format(new Date(manga.attributes.startDate))}
                  </h3>
                  <p>
                    End Sate:{" "}
                    {dateFormatter.format(new Date(manga.attributes.endDate))}
                  </p>
                </DateContent>
                <DateContent>
                  <p>Quantidade de volumes: {manga.attributes.volumeCount}</p>
                  <p>Status: {manga.attributes.status}</p>
                </DateContent>

                <TextContent>
                  <h3>Synopsis</h3>
                  <p>{manga.attributes.synopsis}</p>
                </TextContent>
              </InfoContent>
            </BodyContent>
          )}
        </main>
      </Wrapper>
    </div>
  );
}
