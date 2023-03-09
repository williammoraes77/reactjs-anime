import React from "react";

import { PaginationContant } from "./styles";

interface PaginationProps {
  setCurrentPage: () => void;
  pages: number;
}

export function Pagination({ pages, setCurrentPage }: PaginationProps) {
  return (
    <PaginationContant>
      {Array.from(Array(pages), (item, index) => {
        return (
          <button
            value={index}
            onClick={(e) => setCurrentPage(Number(e.target.value))}
          >
            {index + 1}
          </button>
        );
      })}
    </PaginationContant>
  );
}
