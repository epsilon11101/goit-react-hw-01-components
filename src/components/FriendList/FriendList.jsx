import React from "react";
import PropTypes from "prop-types";

import FriendListItem from "./FriendListItem";

import classes from "./FriendList.module.scss";

const FriendList = ({ friends }) => {
  const friendsItems = friends.map((friend) => {
    const { id, avatar, name, isOnline } = friend;
    return (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    );
  });

  return <ul className={classes["friend-list"]}>{friendsItems}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
export default FriendList;
