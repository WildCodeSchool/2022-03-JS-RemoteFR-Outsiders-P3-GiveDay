import React from "react";
import "./home.css";
import CreationEvenement from "@components/CreationEvenement/CreationEvenement";
// import Userback from "@components/AxiosBack/Userback"
// import Eventback from "@components/AxiosBack/Eventback"

function Home() {
  return (
    <div>
      Home
      <CreationEvenement />
      {/* <Eventback />
      <Userback /> */}
    </div>
  );
}

export default Home;
