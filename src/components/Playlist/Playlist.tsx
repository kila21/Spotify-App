import { useEffect, useState } from "react";
import styled from "styled-components";
import { getPlaylist } from "../../Api/Api";
import { PlaylistItem } from "../../Types/ApiTypes/getPlaylistResponse";
import { useNavigate } from "react-router";

export const Playlist = () => {
  const [playlists, setPlaylists] = useState<PlaylistItem[] | null>();

  const navigate = useNavigate();

  useEffect(() => {
    getPlaylist().then((d) => setPlaylists(d.data.items));
  }, [playlists?.length]);

  return (
    <PlaylistStyled>
      <PlaylistHeading>Your Playlist</PlaylistHeading>
      {playlists &&
        playlists.map((item) => (
          <PlaylistContainer
            onClick={() => navigate(`/playlist/${item.id}`, { state: item })}
            key={item.id}
          >
            <PlaylistImage src={item.images[0]?.url} />
            <PlaylistName>{item.name}</PlaylistName>
            <PlaylistTrackNumber>
              {item.tracks.total} tracks
            </PlaylistTrackNumber>
          </PlaylistContainer>
        ))}
    </PlaylistStyled>
  );
};

const PlaylistStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  @media (min-width: 1440px) {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }
`;

const PlaylistHeading = styled.h2`
  color: white;
  font-size: 22px;
  margin-top: 50px;
  letter-spacing: 1.5px;
  width: 100%;
  text-align: center;
`;

const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: auto;
  margin-top: 30px;
  margin-bottom: 50px;
  @media (min-width: 1440px) {
    width: 40%;
  }
`;

const PlaylistImage = styled.img`
  width: 100%;
  cursor: pointer;
  @media (min-width: 1440px) {
    width: 70%;
  }
`;

const PlaylistName = styled.h4`
  color: white;
  font-size: 18px;
  margin-top: 15px;
`;

const PlaylistTrackNumber = styled.p`
  margin-top: 10px;
  color: rgb(155, 155, 155);
  text-transform: uppercase;
  font-size: 16px;
`;
