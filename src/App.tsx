import { Login } from "./components/Login/Login";
import { Layout } from "./components/Layout/Layout";
import { getAccessToken } from "./Api/Api";

function App() {
  const code = new URLSearchParams(window.location.search).get("code");
  const token = getAccessToken();

  const response = () => {
    if (!code) {
      if (!token) {
        return <Login />;
      } else {
        return <Layout code={code} />;
      }
    } else {
      return <Layout code={code} />;
    }
  };

  return <>{response()}</>;
}

export default App;
