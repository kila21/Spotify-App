import styled from "styled-components";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { getPlaylistTracks } from "../../Api/Api";
import { TracksItem } from "../../Types/ApiTypes/getTopTracksResponse";
import { SinglePlaylistTrack } from "../../Types/ApiTypes/getPlaylistResponse";

export const SinglePlaylist = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [tracks, setTracks] = useState<null | TracksItem[]>();

  useEffect(() => {
    getPlaylistTracks(location.state.tracks.href).then((d) => {
      if (d.status === 200) {
        const newArray: TracksItem[] = [];
        d.data.items.map((item: SinglePlaylistTrack) => {
          const newData = {
            ...item.track,
          };
          newArray.push(newData);
        });
        setTracks(newArray);
      }
    });
  }, [location.state.tracks.href]);

  const clickHandler = (id: string) => {
    navigate(`/top-tracks/${id}`);
  };
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
      </SinglePlaylistHeader>

      <SinglePlaylistTracksStyled>
        {tracks &&
          tracks.map((t, i) => (
            <TracksListItem onClick={() => clickHandler(t.id)} key={t.name + i}>
              <TracksListItemImage src={t.album.images[0].url} />
              <TracksListItemContent>
                <TracksListItemName>{t.name}</TracksListItemName>
                <TrackListItemArtists>
                  {t.artists.map((a) => a.name).join(", ")}
                </TrackListItemArtists>
              </TracksListItemContent>
              <TracksDuration>
                {Math.floor(t.duration_ms / 60000)} :{" "}
                {Math.floor((t.duration_ms / 1000) % 60) < 10
                  ? "0" + Math.floor((t.duration_ms / 1000) % 60)
                  : Math.floor((t.duration_ms / 1000) % 60)}
              </TracksDuration>
            </TracksListItem>
          ))}
      </SinglePlaylistTracksStyled>
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
  min-height: 200px;
  margin-top: 50px;
  @media (min-width: 769px) {
    width: 40%;
    margin-left: 50px;
    max-height: 600px;
  }
`;

const SinglePlaylistImage = styled.img`
  width: 100%;
  display: none;
  @media (min-width: 769px) {
    display: flex;
  }
  @media (min-width: 1440px) {
    width: 70%;
  }
`;

const SinglePlaylistHeading = styled.h1`
  font-size: 22px;
  color: white;
  margin-bottom: 10px;

  @media (min-width: 1440px) {
    font-size: 2vw;
  }
`;

const SinglePlaylistOwner = styled.span`
  color: rgb(155, 155, 155);
  font-size: 18px;
  margin-bottom: 10px;
`;

const SinglePlaylistQuantity = styled.span`
  color: white;
  font-size: 16px;
`;

const SinglePlaylistTracksStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  margin-top: 50px;
  overflow-y: scroll;
`;

const TracksListItem = styled.li`
  width: 100%;
  max-height: 50px;
  list-style: none;
  display: flex;
  margin-bottom: 20px;
  cursor: pointer;
`;

const TracksListItemImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

const TracksListItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 70%;

  height: 100%;
`;

const TracksListItemName = styled.h3`
  color: white;
  font-size: 17px;
`;

const TrackListItemArtists = styled.p`
  color: grey;
`;

const TracksDuration = styled.span`
  height: 100%;
  min-width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
`;
