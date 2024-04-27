import { useState } from "react";
import styled from "styled-components";
import { TracksData } from "./TracksData";

export const Tracks = () => {
  const [active, setActive] = useState(0);

  return (
    <TracksStyled>
      <TracksHeader>
        <TracksHeading>Top Tracks</TracksHeading>
        <TrackHeaderList>
          <TracksHeaderListItem
            $active={active === 0}
            onClick={() => setActive(0)}
          >
            All Time
          </TracksHeaderListItem>
          <TracksHeaderListItem
            $active={active === 1}
            onClick={() => setActive(1)}
          >
            Last 6 Months
          </TracksHeaderListItem>
          <TracksHeaderListItem
            $active={active === 2}
            onClick={() => setActive(2)}
          >
            Last 4 Weeks
          </TracksHeaderListItem>
        </TrackHeaderList>
      </TracksHeader>
      <TracksData load={active === 0 ? "all" : active === 1 ? "6" : "4"} />
    </TracksStyled>
  );
};

const TracksStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgb(24, 24, 24);
  overflow-y: auto;
  overflow-x: hidden;

  @media (min-width: 769px) {
    margin-left: 100px;
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 70px;
  }
`;

const TracksHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 30px;
  margin-top: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const TracksHeading = styled.h3`
  color: white;
  font-size: 25px;
  width: 60%;
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
    margin-bottom: 30px;
  }
`;

const TrackHeaderList = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  color: grey;
  width: 40%;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TracksHeaderListItem = styled.li<{ $active: boolean }>`
  outline: none;
  list-style: none;
  color: ${(props) => props.$active && "white"};
  border-bottom: ${(props) => props.$active && "1px solid white"};
  cursor: pointer;
`;
