import styled, { keyframes } from "styled-components";

export const Loading = () => {
  return (
    <LoadingStyled>
      <SingleLoadingBar $index={1}></SingleLoadingBar>
      <SingleLoadingBar $index={2}></SingleLoadingBar>
      <SingleLoadingBar $index={3}></SingleLoadingBar>
      <SingleLoadingBar $index={4}></SingleLoadingBar>
      <SingleLoadingBar $index={5}></SingleLoadingBar>
    </LoadingStyled>
  );
};

const animation = keyframes`
    100% {
        height: 20px;
    }

    0% {
        height: 70px;
    }
`;

const LoadingStyled = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: rgb(24, 24, 24);
  overflow: hidden;

  @media (min-width: 769px) {
    margin-left: 100px;
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 70px;
  }
`;

const SingleLoadingBar = styled.div<{ $index: number }>`
  width: 20px;
  background-color: rgb(64, 64, 64);
  position: fixed;
  bottom: 50%;
  left: ${(props) => `calc(50% + 30px * ${props.$index})`};

  // animation
  animation: ${animation} infinite;
  animation-duration: 400ms;
  animation-delay: ${(props) => `calc(100ms * ${props.$index})`};
  animation-direction: alternate;

  @media (max-width: 768px) {
    transform: translateX(-350%);
  }
`;
