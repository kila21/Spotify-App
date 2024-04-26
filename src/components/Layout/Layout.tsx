import styled from "styled-components";
import { Outlet } from "react-router";

import { Dashboard } from "../Dashboard/Dashboard";

export const Layout = () => {
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
