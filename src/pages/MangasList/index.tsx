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
    };
    volumeCount: string;
  };
}

export function MangasList() {
  const [mangas, setMangas] = useState<MangaProps[]>([]);
  const [totalItens, setTotalItens] = useState(0);
  const [offset, setOffset] = useState(0);

  async function getData() {
    try {
      const response = await api.get(
        `/manga?page[limit]=20&page[offset]=${offset}`
      );

      console.log(response.data.data);
      setMangas(response.data.data);
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
              <InfoTitle>Lista de mangás</InfoTitle>
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
                      <th>Qtd. Volumes</th>
                      <th>Detalhes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mangas.map((item) => {
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
                          <td>{item.attributes.volumeCount}</td>
                          <td>
                            <NavLink to={`/manga/${item.id}`} title="Detail">
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
