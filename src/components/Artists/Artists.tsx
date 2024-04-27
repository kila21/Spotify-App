import { useState } from "react";
import styled from "styled-components";
import { ArtistsData } from "./ArtistsData";

export const Artists = () => {
  const [active, setActive] = useState(0);

  return (
    <ArtistsStyled>
      <ArtistsHeader>
        <ArtistsHeading>Top Artists</ArtistsHeading>
        <ArtistHeaderList>
          <ArtistsHeaderListItem
            $active={active === 0}
            onClick={() => setActive(0)}
          >
            All Time
          </ArtistsHeaderListItem>
          <ArtistsHeaderListItem
            $active={active === 1}
            onClick={() => setActive(1)}
          >
            Last 6 Months
          </ArtistsHeaderListItem>
          <ArtistsHeaderListItem
            $active={active === 2}
            onClick={() => setActive(2)}
          >
            Last 4 Weeks
          </ArtistsHeaderListItem>
        </ArtistHeaderList>
      </ArtistsHeader>
      <ArtistsData load={active === 0 ? "all" : active === 1 ? "6" : "4"} />
    </ArtistsStyled>
  );
};

const ArtistsStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: rgb(24, 24, 24);
  overflow-y: auto;
  overflow-x: hidden;

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

const ArtistsHeader = styled.div`
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

const ArtistsHeading = styled.h3`
  color: white;
  font-size: 25px;
  width: 60%;
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
    margin-bottom: 30px;
  }
`;

const ArtistHeaderList = styled.div`
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

const ArtistsHeaderListItem = styled.li<{ $active: boolean }>`
  outline: none;
  list-style: none;
  color: ${(props) => props.$active && "white"};
  border-bottom: ${(props) => props.$active && "1px solid white"};
  cursor: pointer;
`;
