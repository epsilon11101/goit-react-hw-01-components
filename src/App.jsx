import React from "react";

import Profile from "./components/Profile/Profile";

import user from "./json/user.json";

import "./App.css";

function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  );
}

export default App;
