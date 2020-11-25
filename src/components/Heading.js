import React from "react";
import { FaArtstation } from "react-icons/fa";

const Heading = () => {
  return (
    <div className="title">
      <h1>
        <FaArtstation className="logo" />
        ArtGram
      </h1>
      <h2>Welcome To ArtGram</h2>
      <p>
        Here is the collection of artworks posted by various art enthusiasts.
        <br />
        You can upload your favourite artworks if interested.
      </p>
    </div>
  );
};

export default Heading;
