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

interface AnimeProps {
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
  };
}

export function AnimeDetail() {
  const { id } = useParams();
  const [anime, setAnime] = useState<AnimeProps>({} as AnimeProps);
  const [loading, setLoading] = useState(true);

  async function loadAnime(id: string) {
    try {
      const response = await api.get(`/anime/${id}`);
      setAnime(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (id) {
      loadAnime(id);
    }
  }, []);
  return (
    <div>
      <Wrapper>
        <Sidebar />
        <main>
          <PageTitleContainer>
            <PageInfos>
              <InfoTitle>Detalhe do Anime</InfoTitle>
            </PageInfos>
            <NavLink to="/animes" title="Animes">
              <CreateButtom type="button">Voltar</CreateButtom>
            </NavLink>
          </PageTitleContainer>
          {!loading && (
            <BodyContent>
              <img src={anime.attributes.posterImage.medium} alt="" />

              <InfoContent>
                <TitleContent>
                  <h2>{anime.attributes.canonicalTitle}</h2>
                </TitleContent>
                <DateContent>
                  <h3>
                    Start Date :{" "}
                    {dateFormatter.format(new Date(anime.attributes.startDate))}
                  </h3>
                  <p>
                    End Sate:{" "}
                    {dateFormatter.format(new Date(anime.attributes.endDate))}
                  </p>
                </DateContent>
                <DateContent>
                  <p>Class. Etária: {anime.attributes.ageRatingGuide}</p>
                  <p>Media de Nota: {anime.attributes.averageRating}</p>
                </DateContent>

                <TextContent>
                  <h3>Synopsis</h3>
                  <p>{anime.attributes.synopsis}</p>
                </TextContent>
              </InfoContent>
            </BodyContent>
          )}
        </main>
      </Wrapper>
    </div>
  );
}
