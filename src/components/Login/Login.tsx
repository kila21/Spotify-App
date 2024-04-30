import styled from "styled-components";

export const Login = () => {
  const loginUrl = `https://accounts.spotify.com/authorize?client_id=${
    import.meta.env.VITE_SPOTIFY_CLIENT_ID
  }&response_type=code&redirect_uri=http://localhost:5173/profile&scope=user-read-private%20user-read-email%20user-follow-read%20user-top-read%20user-read-recently-played%20playlist-read-private`;

  return (
    <LoginStyled>
      <LoginTitle>Spotify Profile</LoginTitle>
      <LoginButton href={loginUrl}>Log In to Spotify</LoginButton>
    </LoginStyled>
  );
};

const LoginStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.bgBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LoginTitle = styled.h1`
  color: white;
  margin-bottom: 30px;
`;

const LoginButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  border-radius: 20px;
  width: 250px;
  height: 45px;
  background-color: ${(props) => props.theme.colors.green};
  font-weight: 700;
  letter-spacing: 1px;
`;
