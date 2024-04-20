import { Login } from "./components/Login/Login";
import { Layout } from "./components/Layout/Layout";
import {
  getAccessToken,
  setAccessToken,
  setLocalAccesToken,
  setLocalRefreshToken,
} from "./Api/Api";
import { useEffect } from "react";

function App() {
  const code = new URLSearchParams(window.location.search).get("code");
  const token = getAccessToken();

  useEffect(() => {
    if (code) {
      setAccessToken(code)
        .then((data) => {
          if (data.status === 200) {
            setLocalAccesToken(data.data.access_token);
            setLocalRefreshToken(data.data.refresh_token);
            window.location.reload();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const response = () => {
    if (!code) {
      if (!token) {
        return <Login />;
      } else {
        return <Layout />;
      }
    } else {
      return <Layout />;
    }
  };

  return response();
}

export default App;
