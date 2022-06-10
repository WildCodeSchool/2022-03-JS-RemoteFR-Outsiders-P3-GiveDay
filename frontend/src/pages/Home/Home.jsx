import React from "react";
import "./home.css";
import Contact from "@components/Contact/Contact";
import CreationEvenement from "@components/CreationEvenement/CreationEvenement";
// import Userback from "@components/AxiosBack/Userback"
// import Eventback from "@components/AxiosBack/Eventback"

function Home() {
  return (
    <div>
      <CreationEvenement />
      {/* <Eventback />
      <Userback /> */}
      <Contact />
    </div>
  );
}

export default Home;
