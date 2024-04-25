import styled from "styled-components";

export const SingleTrack = () => {
  return <SingleTrackStyled>Single Track</SingleTrackStyled>;
};

const SingleTrackStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgb(24, 24, 24);
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
