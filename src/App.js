import React from "react";
import { useState } from "react";
import Heading from "./components/Heading";
import ImageShow from "./components/ImageShow";
import Modal from "./components/Modal";
import Upload from "./components/Upload";
function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="App">
      <Heading />
      <Upload />
      <ImageShow setSelectedImage={setSelectedImage} />
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
}

export default App;
