import axios from "axios";

export const setLocalAccesToken = (token: string) => {
  localStorage.setItem("spotify-access-token", token);
};

export const setLocalRefreshToken = (refToken: string) => {
  localStorage.setItem("spotify-refresh-token", refToken);
};

const getLocalAccessToken = () => localStorage.getItem("spotify-access-token");
const getLocalRefreshToken = () =>
  localStorage.getItem("spotify-refresh-token");

//set Access token for the first time , after authentication.
export const setAccessToken = (code: string) => {
  const url = "https://accounts.spotify.com/api/token";

  //client ID and secret string
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

  const form = {
    code: code,
    redirect_uri: "http://localhost:5173/profile",
    grant_type: "authorization_code",
  };

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
  };

  // post request for acces token
  return axios.post(url, form, { headers });
};

// get Access token
export const getAccessToken = () => {
  const localAccesToken = getLocalAccessToken();

  if (localAccesToken) {
    return localAccesToken;
  }
};

const headers = {
  Authorization: "Bearer " + getAccessToken(),
  "Content-Type": "application/json",
};

// get user profile

export const getUserInfo = () => {
  const url = "https://api.spotify.com/v1/me";

  return axios.get(url, {
    headers,
  });
};

// get UserFollowedArtists

export const getUserFollowing = () => {
  return axios.get(
    "https://api.spotify.com/v1/me/following?type=artist&limit=10",
    {
      headers,
    }
  );
};

export const getUserPlaylist = () => {
  return axios.get("https://api.spotify.com/v1/me/playlists", { headers });
};

// all data for User Profile

export const getUserProfile = () => {
  return axios.all([getUserInfo(), getUserFollowing(), getUserPlaylist()]).then(
    axios.spread((user, following, playlist) => {
      return {
        user: user?.data,
        following: following?.data.artists.total,
        playlist: playlist?.data.total,
      };
    })
  );
};
