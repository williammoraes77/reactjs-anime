import React, { useEffect, useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { api } from "../../server/api";

import {
  Wrapper,
  PageTitleContainer,
  PageInfos,
  InfoTitle,
  BodyContent,
  PaginateContainer,
  HistoryContainer,
  HistoryList,
} from "./styles";
import { Pagination } from "../../components/Pagination";
import { NavLink } from "react-router-dom";

interface Animes {
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
    };
  };
}

export function AnimeList() {
  const [animes, setAnimes] = useState<Animes[]>([]);
  const [totalItens, setTotalItens] = useState(0);
  const [offset, setOffset] = useState(0);

  async function getData() {
    try {
      const response = await api.get(
        `/anime?page[limit]=20&page[offset]=${offset}`
      );

      console.log(response.data);
      setAnimes(response.data.data);
      setTotalItens(response.data.meta.count);
    } catch (error) {}
  }

  useEffect(() => {
    getData();
  }, [offset]);
  return (
    <div>
      <Wrapper>
        <Sidebar />
        <main>
          <PageTitleContainer>
            <PageInfos>
              <InfoTitle>Lista de animes</InfoTitle>
            </PageInfos>
          </PageTitleContainer>
          <BodyContent>
            <PaginateContainer>
              <Pagination
                limit={25}
                total={totalItens}
                offset={offset}
                setOffset={setOffset}
              />
            </PaginateContainer>

            <HistoryContainer>
              <HistoryList>
                <table>
                  <thead>
                    <tr>
                      <th>Foto</th>
                      <th>Name</th>
                      <th>Nota</th>
                      <th>Class. Etária</th>
                      <th>Detalhes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {animes.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>
                            <img
                              src={item.attributes.posterImage.small}
                              alt=""
                            />
                          </td>
                          <td>{item.attributes.canonicalTitle}</td>
                          <td>{item.attributes.averageRating}</td>
                          <td>{item.attributes.ageRatingGuide}</td>
                          <td>
                            <NavLink to={`/anime/${item.id}`} title="Detail">
                              <button>Detalhes</button>
                            </NavLink>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </HistoryList>
            </HistoryContainer>
          </BodyContent>
        </main>
      </Wrapper>
    </div>
  );
}
