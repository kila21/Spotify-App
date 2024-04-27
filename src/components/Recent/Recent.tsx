import { useEffect, useState } from "react";
import styled from "styled-components";
import { Loading } from "../Loading/Loading";
import { useNavigate } from "react-router";
import { getRecentlyPlayedTracks } from "../../Api/Api";
import { TracksItem } from "../../Types/ApiTypes/getTopTracksResponse";

interface ItemType {
  track: TracksItem;
  context: contextType | null;
  played_at: string;
}

interface contextType {
  type: string;
  href: string;
  external_urls: {
    spotify: string;
  };
  uri: string;
}

export const Recent = () => {
  const [recentData, setRecentData] = useState<TracksItem[] | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    getRecentlyPlayedTracks().then((data) => {
      // setRecentData(data.data.items);
      const newData = data.data.items.map((i: ItemType) => i.track);
      setRecentData(newData);
    });
  }, []);

  // for navigating
  const clickHandler = (id: string) => {
    navigate(`/top-tracks/${id}`);
  };

  return (
    <>
      {" "}
      {!recentData ? (
        <Loading />
      ) : (
        <RecentDataStyled>
          <RecentHeader>Recently Played Tracks</RecentHeader>
          <RecentList>
            {recentData &&
              recentData.map((t, i) => (
                <RecentListItem
                  onClick={() => clickHandler(t.id)}
                  key={t.name + i}
                >
                  <RecentListItemImage src={t.album.images[0].url} />
                  <RecentListItemContent>
                    <RecentListItemName>{t.name}</RecentListItemName>
                    <RecentListItemArtists>
                      {t.artists.map((a) => a.name).join(", ")}
                    </RecentListItemArtists>
                  </RecentListItemContent>
                  <RecentDuration>
                    {Math.floor(t.duration_ms / 60000)} :{" "}
                    {Math.floor((t.duration_ms / 1000) % 60) < 10
                      ? "0" + Math.floor((t.duration_ms / 1000) % 60)
                      : Math.floor((t.duration_ms / 1000) % 60)}
                  </RecentDuration>
                </RecentListItem>
              ))}
          </RecentList>
        </RecentDataStyled>
      )}{" "}
    </>
  );
};

const RecentDataStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgb(24, 24, 24);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 30px;

  @media (min-width: 769px) {
    margin-left: 100px;
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 70px;
  }
`;

const RecentHeader = styled.h2`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;

  margin-top: 40px;
  color: white;
`;

const RecentList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const RecentListItem = styled.li`
  width: 100%;
  max-height: 50px;
  list-style: none;
  display: flex;
  margin-bottom: 20px;
`;

const RecentListItemImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
`;

const RecentListItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 70%;

  height: 100%;
`;

const RecentListItemName = styled.h3`
  color: white;
  font-size: 17px;
`;

const RecentListItemArtists = styled.p`
  color: grey;
`;

const RecentDuration = styled.span`
  height: 100%;
  min-width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
`;
