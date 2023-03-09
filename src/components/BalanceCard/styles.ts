import styled, { css } from "styled-components";

export const BalanceContent = styled.div`
  background: ${({ theme }) => theme.background};
  border-radius: 6px;
  padding: 2rem;

  header {
    flex: 1;
    color: ${({ theme }) => theme["gray-300"]};
    margin-left: 20px;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }
`;

export const TopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3rem;
`;

export const BottomContent = styled.div`
  border-top: 1px solid ${({ theme }) => theme["gray-300"]};
  padding-top: 1rem;
`;

export const BottomLink = styled.p``;
