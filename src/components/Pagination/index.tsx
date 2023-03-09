import React from "react";

import { PaginationContant, PageButton } from "./styles";

interface PaginationProps {
  limit: number;
  total: number;
  offset: number;
  setOffset(pageOffset: number): void;
}

const maxItens = 9;
const maxLeft = (maxItens + 1) / 2;

export function Pagination({
  limit,
  total,
  offset,
  setOffset,
}: PaginationProps) {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - maxLeft, 1);

  function onChangePage(page: number) {
    setOffset((page - 1) * limit);
  }

  return (
    <PaginationContant>
      <ul>
        <li>
          <PageButton
            activeButton={false}
            onClick={() => onChangePage(current - 1)}
            disabled={current === 1}
          >
            Anterior
          </PageButton>
        </li>
        {Array.from({ length: Math.min(maxItens, pages) })
          .map((_, index) => index + first)
          .map((page) => (
            <li key={page}>
              <PageButton
                onClick={() => onChangePage(page)}
                activeButton={page === current}
              >
                {page}
              </PageButton>
            </li>
          ))}
        <li>
          <PageButton
            activeButton={false}
            onClick={() => onChangePage(current + 1)}
            disabled={current === pages}
          >
            Proxima
          </PageButton>
        </li>
      </ul>
    </PaginationContant>
  );
}
