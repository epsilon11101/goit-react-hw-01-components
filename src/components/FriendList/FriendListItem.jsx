import React from "react";
import PropTypes from "prop-types";

import classes from "./FriendListItem.module.scss";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const status = isOnline ? "green" : "red";
  return (
    <li className={classes.item}>
      <span
        className={classes.status}
        style={{ backgroundColor: `${status}` }}
      ></span>
      <img className={classes.avatar} src={avatar} alt="User avatar" />
      <p className={classes.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
