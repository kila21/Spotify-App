import { useEffect } from "react";
import styled from "styled-components";
import { Outlet } from "react-router";

import { Dashboard } from "../Dashboard/Dashboard";

export const Layout = () => {
  useEffect(() => {
    window.history.pushState({}, "", "/profile");
  }, []);

  return (
    <LayoutStyled>
      <Dashboard />
      <Outlet />
    </LayoutStyled>
  );
};

const LayoutStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
