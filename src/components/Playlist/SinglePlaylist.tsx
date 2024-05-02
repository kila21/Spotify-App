import styled from "styled-components";
import { useEffect } from "react";
import { useLocation } from "react-router";

export const SinglePlaylist = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, []);
  return (
    <SinglePlaylistStyled>
      <SinglePlaylistHeader>
        <SinglePlaylistImage
          src={location.state.images[0].url}
          alt={location.state.name + "playlist"}
        />
        <SinglePlaylistHeading>{location.state.name}</SinglePlaylistHeading>
        <SinglePlaylistOwner>
          By {location.state.owner.display_name}
        </SinglePlaylistOwner>
        <SinglePlaylistQuantity>
          {location.state.tracks.total} tracks
        </SinglePlaylistQuantity>
        <SinglePlaylistRecomendation>
          get recomendation
        </SinglePlaylistRecomendation>
      </SinglePlaylistHeader>
    </SinglePlaylistStyled>
  );
};

const SinglePlaylistStyled = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  background-color: rgb(24, 24, 24);
  overflow-y: auto;
  overflow-x: hidden;

  @media (min-width: 769px) {
    margin-left: 100px;
    width: 100%;
    flex-direction: row;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 70px;
  }
`;

const SinglePlaylistHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  min-height: 150px;
  margin-top: 50px;
  @media (min-width: 769px) {
    width: 30%;
    margin-left: 50px;
    height: 450px;
  }
`;

const SinglePlaylistImage = styled.img`
  width: 100%;
  display: none;
  @media (min-width: 769px) {
    display: flex;
  }
`;

const SinglePlaylistHeading = styled.h1`
  font-size: 22px;
  color: white;

  @media (min-width: 1440px) {
    font-size: 2vw;
  }
`;

const SinglePlaylistOwner = styled.span`
  color: rgb(155, 155, 155);
  font-size: 18px;
`;

const SinglePlaylistQuantity = styled.span`
  color: white;
  font-size: 16px;
`;

const SinglePlaylistRecomendation = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 20px;
  color: white;
  background-color: ${(props) => props.theme.colors.green};
  border: none;
  text-transform: uppercase;
  font-size: 15px;
  @media (max-width: 768px) {
    width: 220px;
    height: 30px;
    font-size: 14px;
  }
`;
