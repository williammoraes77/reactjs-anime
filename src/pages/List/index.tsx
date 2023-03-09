import React, { useEffect, useState } from "react";
import { BalanceCard } from "../../components/BalanceCard";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { api } from "../../server/axios";

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
  HistoryContainer,
  HistoryList,
} from "./styles";
// import { Pagination } from "../../components/Pagination";

interface Contract {
  id: number;
  licitacao_numero: string;
  categoria: string;
  fornecedor_nome: string;
  vigencia_inicio: string;
  vigencia_fim: string;
  valor_global: string;
  valor_parcela: string;
  data_publicacao: string;
}

export function List() {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [offset, setOffset] = useState(0);
  const [itensPerPage, setItensPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(0);
  const [paginateSequency, setPaginateSequency] = useState(1);

  // console.log(contracts.length);

  const pages = Math.ceil(contracts.length / itensPerPage);

  const startIndex = currentPage * itensPerPage;

  const endIndex = startIndex + itensPerPage;

  const currentItens = contracts.slice(startIndex, endIndex);

  const paginateAmount = offset / paginateSequency;

  async function getData() {
    try {
      const response = await api.get(`/contratos.json?offset=${offset}`);

      // console.log(response.data._embedded.contratos);
      console.log("offset:" + offset);
      setContracts(response.data._embedded.contratos);
    } catch (error) {}
  }

  function handleChangePage(e: number) {
    const numitens = (e + 1) * itensPerPage;
    // console.log(e * itensPerPage);
    // console.log(contracts.length);
    console.log(e);
    if (numitens === contracts.length) {
      console.log("Ultimo");
      let offSetoten = offset + 500;
      let addPaginateSequency = paginateSequency + 20;
      // console.log(addPaginateSequency);
      setPaginateSequency(addPaginateSequency);
      setOffset(offSetoten);
    }

    if (e === 0 && offset > 0) {
      console.log("Ultimo");
      let offSetoten = offset - 500;
      let addPaginateSequency = paginateSequency - 20;
      setPaginateSequency(addPaginateSequency);
      setOffset(offSetoten);
    }

    setCurrentPage(e);
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
              <InfoTitle>Listar dados</InfoTitle>
            </PageInfos>
          </PageTitleContainer>
          <BodyContent>
            <div>
              {Array.from(Array(pages), (item, index) => {
                return (
                  <button
                    key={index}
                    value={index}
                    onClick={() => handleChangePage(Number(index))}
                    // onClick={(e) => setCurrentPage(Number(e.target.value))}
                  >
                    {paginateSequency + index}
                  </button>
                );
              })}
            </div>

            <HistoryContainer>
              <HistoryList>
                <table>
                  <thead>
                    <tr>
                      <th>licitacao_numero</th>
                      <th>Categoria</th>
                      <th>fornecedor_nome</th>
                      <th>vigencia_inicio</th>
                      <th>vigencia_fim</th>
                      <th>valor_global</th>
                      <th>valor_parcela</th>
                      <th>data_publicacao</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItens.map((item) => {
                      return (
                        <tr key={item.id}>
                          <td>{item.licitacao_numero}</td>
                          <td>{item.categoria}</td>
                          <td>{item.fornecedor_nome}</td>
                          <td>{item.vigencia_inicio}</td>
                          <td>{item.vigencia_fim}</td>
                          <td>{item.valor_global}</td>
                          <td>{item.valor_parcela}</td>
                          <td>{item.data_publicacao}</td>
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
