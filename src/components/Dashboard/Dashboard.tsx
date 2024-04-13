import { useEffect } from "react";
import styled from "styled-components";

export const Dashboard = (props: { code: string }) => {
  useEffect(() => {
    window.history.pushState({}, "", "/");
  }, []);
  return <DashboardStyled>Dashboard for Spotify</DashboardStyled>;
};

const DashboardStyled = styled.div``;
