import styled, { css } from "styled-components";

interface ButtonProps {
  activeButton: boolean;
}

export const PaginationContant = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  ul {
    display: flex;
    list-style: none;
  }

  li + li {
    margin-left: 1rem;
  }
`;

export const PageButton = styled.button<ButtonProps>`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.fontColorLight};
  padding: 1rem;

  ${(props) =>
    props.activeButton &&
    css`
      border-bottom: 1px solid white;
      color: ${({ theme }) => theme.fontColorLight};
    `};
`;
