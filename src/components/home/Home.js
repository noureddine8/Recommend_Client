import React from "react";

function Home(props) {
  const userData = JSON.parse(localStorage.getItem("profile"));
  if (!userData) {
    return (
      <div>
        <h1>Please log in</h1>
      </div>
    );
  } else
    return (
      <div style={{ marginTop: "100px" }}>
        <h1>{userData.user.name}</h1>
      </div>
    );
}

export default Home;
