import { useEffect, useState } from "react";
import styled from "styled-components";
import { getUserTopTracks } from "../../Api/Api";
import { TracksItem } from "../../Types/ApiTypes/getTopTracksResponse";

export const TracksData = (props: { load: string }) => {
  const [tracks, setTracks] = useState<TracksItem[] | null>(null);

  useEffect(() => {
    getUserTopTracks(props.load).then((data) => {
      console.log(data.data);
      setTracks(data.data.items);
    });
  }, [props.load]);

  return (
    <TracksDataStyled>
      {tracks &&
        tracks.map((t, i) => (
          <TracksListItem key={t.name + i}>
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
    </TracksDataStyled>
  );
};

const TracksDataStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  margin-top: 50px;
`;

const TracksListItem = styled.li`
  width: 100%;
  max-height: 50px;
  list-style: none;
  display: flex;
  margin-bottom: 20px;
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
