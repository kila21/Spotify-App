import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { getSingleArtist } from "../../Api/Api";

interface SingleArtistDataType {
  name: string;
  followers: number;
  genres: string[];
  image: string;
  popularity: number;
}

export const SingleArtist = () => {
  const location = useLocation();

  const [artistData, setArtistData] = useState<SingleArtistDataType | null>();

  useEffect(() => {
    if (!location.state) {
      getSingleArtist(location.pathname.split("/")[2]).then((data) => {
        setArtistData({
          name: data.data.name,
          image: data.data.image[0].url,
          genres: data.data.genres,
          followers: data.data.followers.total,
          popularity: data.data.popularity,
        });
      });
    } else {
      const newData = {
        name: location.state.name,
        image: location.state.images[0].url,
        genres: location.state.genres,
        followers: location.state.followers.total,
        popularity: location.state.popularity,
      };
      setArtistData(newData);
    }
  }, []);
  return (
    <SingleArtistStyled>
      <SingleArtistImage
        src={artistData?.image}
        alt={artistData?.name + "image"}
      />
      <SingleArtistName>{artistData?.name}</SingleArtistName>
      <SingleArtistDataContainer>
        <SingleArtistDatatable>
          <SingleArtistDataInfo>{artistData?.followers}</SingleArtistDataInfo>
          <SingleArtistDataTitle>Followers</SingleArtistDataTitle>
        </SingleArtistDatatable>

        <SingleArtistDatatable>
          {artistData?.genres.map((i) => {
            return (
              <SingleArtistDataInfo>
                {i} <br />
              </SingleArtistDataInfo>
            );
          })}
          <SingleArtistDataTitle>Genres</SingleArtistDataTitle>
        </SingleArtistDatatable>

        <SingleArtistDatatable>
          <SingleArtistDataInfo>{artistData?.popularity}</SingleArtistDataInfo>
          <SingleArtistDataTitle>Popularity</SingleArtistDataTitle>
        </SingleArtistDatatable>
      </SingleArtistDataContainer>
    </SingleArtistStyled>
  );
};

const SingleArtistStyled = styled.div`
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

const SingleArtistImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;

  @media (min-width: 769px) {
    width: 300px;
    height: 300px;
  }
`;

const SingleArtistName = styled.h1`
  color: white;
  font-size: 50px;
  margin-top: 30px;
`;

const SingleArtistDataContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 80px;
  margin-top: 50px;
`;

const SingleArtistDatatable = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
`;

const SingleArtistDataInfo = styled.div`
  color: rgb(80, 155, 245);
  font-size: 18px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 769px) {
    font-size: 24px;
  }
`;

const SingleArtistDataTitle = styled.div`
  color: rgb(155, 155, 155);
  font-size: 12px;
  font-weight: 700;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  @media (min-width: 769px) {
    font-size: 16px;
  }
`;
