import styled from "styled-components";

export const Artists = () => {
  return (
    <ArtistsStyled>
      <ArtistsHeader>
        <ArtistsHeading>Top Artists</ArtistsHeading>
        <ArtistHeaderList>
          <ArtistsHeaderListItem>All Time</ArtistsHeaderListItem>
          <ArtistsHeaderListItem>Last 6 Months</ArtistsHeaderListItem>
          <ArtistsHeaderListItem>Last 4 Weeks</ArtistsHeaderListItem>
        </ArtistHeaderList>
      </ArtistsHeader>
    </ArtistsStyled>
  );
};

const ArtistsStyled = styled.div`
  display: flex;
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

const ArtistsHeaderListItem = styled.li`
  outline: none;
  list-style: none;
`;
