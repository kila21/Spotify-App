import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import styled from "styled-components";

import { getSingleTrack } from "../../../Api/Api";
import { ArtistsType } from "../../../Types/ApiTypes/getTopTracksResponse";
import { artistsItem } from "../../../Types/ApiTypes/getTopArtistsResponse";
import { TrackFeatures } from "./TrackFeatures";

interface SingleTrackDataType {
  name: string;
  date: string;
  image: string;
  artists: ArtistsType[];
  url: string;
  popularity: number;
}

export const SingleTrack = () => {
  const location = useLocation();

  const [trackData, setTrackData] = useState<SingleTrackDataType | null>();

  useEffect(() => {
    if (!location.state) {
      getSingleTrack(location.pathname.split("/")[2]).then((data) => {
        setTrackData({
          name: data.data?.name,
          image: data.data?.album.images[0].url,
          date: data.data?.album.release_date,
          artists: data.data?.artists.map((item: artistsItem) => item.name),
          url: data.data?.external_urls.spotify,
          popularity: data.data?.popularity,
        });
      });
    } else {
      setTrackData({
        name: location.state.name,
        image: location.state.album.images[0].url,
        date: location.state.album.release_date,
        artists: location.state.artists.map((item: artistsItem) => item.name),
        url: location.state.external_urls.spotify,
        popularity: location.state?.popularity,
      });
    }
  }, [location.pathname, location.state]);

  const handleClick = () => {
    window.open(trackData?.url, "_blank");
  };

  return (
    <SingleTrackStyled>
      <SingleTrackInfoContainer>
        <SingleTrackImage src={trackData?.image} alt={trackData?.name} />
        <SingleTrackInformation>
          <SingleTrackName>{trackData?.name}</SingleTrackName>
          <SingleTrackArtist>{trackData?.artists.join(", ")}</SingleTrackArtist>
          <SingleTrackDate>{trackData?.date}</SingleTrackDate>
          <SingleTrackButton onClick={handleClick}>
            play on spotify
          </SingleTrackButton>
        </SingleTrackInformation>
      </SingleTrackInfoContainer>
      <TrackFeatures
        id={location.pathname.split("/")[2]}
        popularity={trackData?.popularity}
      />
    </SingleTrackStyled>
  );
};

const SingleTrackStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
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

const SingleTrackInfoContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
  margin-left: 50px;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const SingleTrackImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 30px;

  @media (min-width: 769px) {
    width: 250px;
    height: 250px;
  }
`;

const SingleTrackInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: 501px) {
    width: 50%;
  }
`;

const SingleTrackName = styled.h3`
  color: white;
  margin-bottom: 10px;
  font-size: 25px;
`;

const SingleTrackArtist = styled.p`
  color: grey;
  font-size: 18px;
  margin-bottom: 10px;
`;

const SingleTrackDate = styled.p`
  color: grey;
`;

const SingleTrackButton = styled.button`
  background-color: ${(props) => props.theme.colors.green};
  width: 165px;
  height: 40px;
  border-radius: 20px;
  text-transform: uppercase;
  text-align: center;
  color: white;
  font-weight: 700;
  border: none;
  margin-top: 30px;
`;
