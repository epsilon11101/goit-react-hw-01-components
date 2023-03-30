import React from "react";

import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";

import user from "./json/user.json";
import data from "./json/data.json";

import "./App.css";

function App() {
  return (
    <section>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </section>
  );
}

export default App;
