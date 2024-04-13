import styled from "styled-components";

export const Login = () => {
  const loginUrl = `https://accounts.spotify.com/authorize?client_id=${
    import.meta.env.VITE_SPOTIFY_CLIENT_ID
  }&response_type=code&redirect_uri=http://localhost:5173/`;

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
  background-color: rgb(24, 24, 24);
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
  background-color: rgb(29, 185, 84);
  font-weight: 700;
  letter-spacing: 1px;
`;
