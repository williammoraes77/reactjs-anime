import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.background};
`;
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1370px;
  margin: 0 auto;
  padding: 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 3rem;
  }

  nav {
    align-items: center;
    display: flex;

    gap: 2rem;
  }
`;
