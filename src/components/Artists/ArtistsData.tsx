import { useEffect, useState } from "react";
import styled from "styled-components";
import { getUserTopArtists } from "../../Api/Api";
import { artistsItem } from "../../Types/ApiTypes/getTopArtistsResponse";

export const ArtistsData = (props: { load: string }) => {
  const [artistsData, setArtistsData] = useState<artistsItem[] | null>(null);

  useEffect(() => {
    getUserTopArtists(props.load)
      .then((data) => {
        setArtistsData(data.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.load]);

  const openArtistSpotify = (artist: artistsItem) => {
    window.open(artist.external_urls.spotify, "_blank");
  };

  return (
    <ArtistsDataStyled>
      {artistsData &&
        artistsData.map((artist, index) => {
          return (
            <ArtistsItem
              onClick={() => openArtistSpotify(artist)}
              key={artist?.name + index}
            >
              <ArtistsImg
                src={artist.images[0].url}
                alt={artist.name + "profile"}
              />
              <ArtistsName>{artist.name}</ArtistsName>
            </ArtistsItem>
          );
        })}
    </ArtistsDataStyled>
  );
};

const ArtistsDataStyled = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 50px;
  justify-content: space-evenly;
`;

const ArtistsItem = styled.li`
  display: flex;
  min-height: 150px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  margin-right: 20px;
  cursor: pointer;
`;

const ArtistsImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 500px) {
    width: 120px;
    height: 120px;
  }
`;

const ArtistsName = styled.h3`
  color: white;
`;
