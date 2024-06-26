import { useEffect, useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { getUserProfile } from "../../Api/Api";
import { UserProfileInfo } from "../../Types/UserProfileInfo";
import React from "react";
import { Link } from "react-router-dom";
import { Loading } from "../Loading/Loading";

export const Profile = React.memo(() => {
  const [userProfileData, setUserProfileData] =
    useState<UserProfileInfo | null>(null);

  useEffect(() => {
    if (!userProfileData) {
      if (localStorage.getItem("spotify-access-token")) {
        getUserProfile().then((data) => {
          const newData: UserProfileInfo = {
            followers: data?.user?.followers?.total,
            image: data?.user?.images?.[0],
            display_name: data?.user?.display_name,
            following: data.following,
            playlist: data.playlist,
          };
          setUserProfileData(newData);
        });
      }
    }
  }, [userProfileData]);

  const Logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      {!userProfileData ? (
        <Loading />
      ) : (
        <ProfileStyled>
          <ProfileImageContainer>
            {userProfileData && !userProfileData.image && (
              <FontAwesomeIcon icon={faUser} />
            )}

            {userProfileData && userProfileData?.image?.url && (
              <ProfileImage
                src={userProfileData.image.url}
                alt={userProfileData.display_name + "avatar"}
              />
            )}
          </ProfileImageContainer>
          <ProfileName>{userProfileData?.display_name}</ProfileName>

          <ProfileFollowerContainer>
            <ProfileFollower>
              <span>{userProfileData?.followers || 0}</span>
              <span>FOLLOWERS</span>
            </ProfileFollower>
            <ProfileFollower>
              <span>{userProfileData?.following || 0}</span>
              <span>FOLLOWING</span>
            </ProfileFollower>
            <ProfileFollower>
              <span>{userProfileData?.playlist || 0}</span>
              <span>PLAYLIST</span>
            </ProfileFollower>
          </ProfileFollowerContainer>

          <ProfileLogoutContainer>
            <ProfileLogOut onClick={Logout}>logout</ProfileLogOut>
          </ProfileLogoutContainer>

          <ProfileNavContainer>
            <ProfileNavItem>
              <ProfileNavTitle>Top artists of all time</ProfileNavTitle>
              <ProfileLogOut>
                <Link to={"/top-artists"}>see more</Link>
              </ProfileLogOut>
            </ProfileNavItem>

            <ProfileNavItem>
              <ProfileNavTitle>Top Tracks of all time</ProfileNavTitle>
              <ProfileLogOut>
                <Link to={"/top-tracks"}>see more</Link>
              </ProfileLogOut>
            </ProfileNavItem>
          </ProfileNavContainer>
        </ProfileStyled>
      )}
    </>
  );
});

const ProfileStyled = styled.div`
  background-color: rgb(24, 24, 24);
  color: white;
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  align-items: center;
  overflow-y: scroll;

  @media (min-width: 769px) {
    margin-left: 100px;
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
    min-height: 100vh;
    padding-bottom: 90px;
  }
`;

const ProfileImageContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 50px;
  & > svg {
    width: 60%;
    height: 60%;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const ProfileName = styled.h1`
  color: ${(props) => props.theme.colors.green};
  font-size: 50px;
  margin-bottom: 20px;
`;

const ProfileFollowerContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const ProfileFollower = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 18px;

  & > span {
    font-size: 12px;
    height: 20px;
    &:first-child {
      font-size: 20px;
      color: ${(props) => props.theme.colors.green};
      margin-bottom: 15px;
    }
  }
`;

const ProfileLogoutContainer = styled.div``;
const ProfileLogOut = styled.div`
  width: 120px;
  height: 40px;
  border-radius: 20px;
  text-transform: uppercase;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 10px; */

  & > a {
    outline: none;
    text-decoration: none;
    color: white;
  }
`;

const ProfileNavContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  margin-top: 80px;
  justify-content: center;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProfileNavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 45%;
  margin-right: 15px;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const ProfileNavTitle = styled.p`
  font-size: 16px;
  text-transform: capitalize;
`;
