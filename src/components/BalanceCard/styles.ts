import styled, { css } from "styled-components";

export const BalanceContent = styled.div`
  background: ${({ theme }) => theme["gray-600"]};
  border-radius: 6px;
  padding: 2rem;

  header {
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
  padding-bottom: 2rem;
`;

export const BottomContent = styled.div`
  border-top: 1px solid ${({ theme }) => theme["gray-300"]};
  padding-top: 2rem;
`;

export const BottomLink = styled.p``;
