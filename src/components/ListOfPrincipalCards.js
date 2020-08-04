import React, { Fragment } from "react";
import { PrincipalCard } from "./PrincipalCard";

export const ListOfPrincipalCards = () => {
  const defaultUser = "@nathanf";
  const socialNetworks = [
    {
      socialNetwork: "Facebook",
      user: defaultUser,
      followerCount: 1987,
      followerName: "followers",
      isUp: true,
      countFollowersToday: 12,
    },
    {
      socialNetwork: "Twitter",
      user: defaultUser,
      followerCount: 1044,
      followerName: "followers",
      isUp: true,
      countFollowersToday: 99,
    },

    {
      socialNetwork: "Instagram",
      user: defaultUser,
      followerCount: "11k",
      followerName: "followers",
      isUp: true,
      countFollowersToday: 1099,
    },

    {
      socialNetwork: "Youtube",
      user: defaultUser,
      followerCount: 8239,
      followerName: "subscribers",
      isUp: false,
      countFollowersToday: 144,
    },
  ];

  return (
    <Fragment>
        {
            socialNetworks.map((socialNetwork, key) => <PrincipalCard key={key} {...socialNetwork} />)
        }
    </Fragment>
  );
};
