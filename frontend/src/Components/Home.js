import React from "react";
import Notes from "./Notes";
import Addnote from "./Addnote";

const Home = () => {
  return (
    <div>
      {localStorage.getItem('token')?<Addnote />:""}

      {/* Display all notes */}
      <Notes />
    </div>
  );
};

export default Home;
