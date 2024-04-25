import { useEffect, useState } from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faUser,
  faMusic,
  faClockRotateLeft,
  faList,
} from "@fortawesome/free-solid-svg-icons";

import { Link, useLocation } from "react-router-dom";

export const Dashboard = () => {
  const [activeItem, setActiveItem] = useState<number>(0);
  const location = useLocation();

  useEffect(() => {
    switch (window.location.pathname) {
      case "/profile":
        return setActiveItem(0);
      case "/top-artists":
        return setActiveItem(1);
      case "/top-tracks":
        return setActiveItem(2);
      case "/recent":
        return setActiveItem(3);
      case "/playlist":
        return setActiveItem(4);
    }
  }, [location]);

  const navList = [
    { title: "profile", icon: faUser },
    { title: "top artists", icon: faMicrophone },
    { title: "top tracks", icon: faMusic },
    { title: "recent", icon: faClockRotateLeft },
    { title: "playlist", icon: faList },
  ];

  return (
    <DashboardStyled>
      <DashboardList>
        {navList &&
          navList.map((item, index) => (
            <DashboardListItem
              onClick={() => setActiveItem(index)}
              key={index + item.title}
              $active={activeItem === index}
            >
              <Link to={`/${item.title.split(" ").join("-")}`}>
                <FontAwesomeIcon icon={item.icon} />
                <DashboardItemTitle>{item.title}</DashboardItemTitle>
              </Link>
            </DashboardListItem>
          ))}
      </DashboardList>
    </DashboardStyled>
  );
};

const DashboardStyled = styled.div`
  position: fixed;
  background-color: rgb(4, 3, 6);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: 70px;
    bottom: 0;
    left: 0;
  }

  @media (min-width: 769px) {
    width: 100px;
    height: 100%;
    top: 0;
  }
`;

const DashboardList = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  height: 100%;

  @media (min-width: 769px) {
    flex-direction: column;
  }
`;

const DashboardListItem = styled.li<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.$active ? "white" : "rgb(155, 155, 155)")};
  background-color: ${(props) => props.$active && "rgb(24, 24, 24)"};

  @media (max-width: 768px) {
    width: 20%;
    height: 100%;
    border-top: ${(props) => props.$active && "3px solid rgb(30, 215, 96)"};
  }
  @media (min-width: 769px) {
    width: 100%;
    height: 20%;
    border-left: ${(props) => props.$active && "5px solid rgb(30, 215, 96)"};
  }

  & > a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: inherit;

    & > svg {
      width: 20px;
      height: 20px;
      margin-bottom: 10px;
    }
  }
`;

const DashboardItemTitle = styled.div`
  text-transform: capitalize;
  font-size: 11px;
`;
