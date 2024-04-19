import axios, { AxiosResponse } from "axios";
import { UserProfileResponse } from "../Types/ApiTypes/UserProfile";

const setLocalAccesToken = (token: string) => {
  localStorage.setItem("spotify-access-token", token);
};

const setLocalRefreshToken = (refToken: string) => {
  localStorage.setItem("spotify-refresh-token", refToken);
};

const getLocalAccessToken = () => localStorage.getItem("spotify-access-token");
const getLocalRefreshToken = () =>
  localStorage.getItem("spotify-refresh-token");

//set Access token for the first time , after authentication.
export const setAccessToken = async (code: string) => {
  const url = "https://accounts.spotify.com/api/token";

  //client ID and secret string
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

  const body = {
    code: code,
    redirect_uri: "http://localhost:5173/",
    grant_type: "authorization_code",
  };

  const headers = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    json: true,
  };

  // post request for acces token
  await axios.post(url, body, headers).then((d) => {
    if (d.status === 200 && d.data) {
      console.log(d.data);
      setLocalAccesToken(d.data.access_token);
      setLocalRefreshToken(d.data.refresh_token);
    }
  });
};

// get Access token
export const getAccessToken = () => {
  const localAccesToken = getLocalAccessToken();

  if (localAccesToken) {
    return localAccesToken;
  }
};

// get user profile

export const getUserProfile = async () => {
  const url = "https://api.spotify.com/v1/me";
  const accessToken = getAccessToken();

  if (accessToken) {
    const response: AxiosResponse<UserProfileResponse> = await axios.get(url, {
      headers: {
        Authorization: "Bearer " + getAccessToken(),
        "Content-Type": "application/json",
      },
    });

    return response;
  }
};
