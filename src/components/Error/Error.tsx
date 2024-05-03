import styled from "styled-components";

export const ErrorPage = () => {
  return <ErrorStyled>Something Went Wrong</ErrorStyled>;
};

const ErrorStyled = styled.div`
  background-color: rgb(24, 24, 24);
  color: white;
  display: flex;
  font-size: 35px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;

  @media (min-width: 769px) {
    margin-left: 100px;
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    min-height: 100vh;
    padding-bottom: 90px;
  }
`;
