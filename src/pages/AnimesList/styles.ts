import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  max-width: 85rem;
  margin: 2rem auto;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: 296px 1fr;
  gap: 1rem;
  align-items: flex-start;

  main {
    padding: 1.5rem;
    background-color: ${({ theme }) => theme.backgroundDark};
    border-radius: 16px;
  }
`;

export const PageTitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const PageInfos = styled.div``;

export const InfoTop = styled.p`
  color: ${({ theme }) => theme.fontColorDark};
`;

export const InfoTitle = styled.h2`
  color: ${({ theme }) => theme.fontColorLight};
  margin-top: 0.6rem;
`;

export const InfoResume = styled.p`
  color: ${({ theme }) => theme.fontColorDark};
  margin-top: 0.3rem;
`;

export const CreateButtom = styled.button`
  padding: 0.6rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.buttomPrimary};
  color: ${({ theme }) => theme.white};
  border: 0;
  cursor: pointer;
`;

export const BodyContent = styled.div``;

export const PaginateContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 1rem;
`;

export const HistoryContainer = styled.main`
  padding: 1.5rem 0;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme["gray-100"]};
  }
`;

export const HistoryList = styled.div`
  overflow: auto;
  margin-top: 1rem;
  max-width: 900px;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme["gray-600"]};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme["gray-100"]};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme["gray-700"]};
      border-top: 4px solid ${(props) => props.theme["gray-800"]};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        /* width: 20%; */
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }

      img {
        width: 30px;
      }

      button {
        padding: 0.3rem;
        border-radius: 8px;
      }
    }
  }
`;
