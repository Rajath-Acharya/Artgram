import React, { useState } from "react";
import Progress from "./Progress";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const imageType = ["image/png", "image/jpeg", "image/jpg"];

  const inputHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && imageType.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Select the image file of type (png / jpeg / jpg) only ");
    }
  };

  return (
    <>
      <form>
        <label>
          <input onChange={inputHandler} type="file" />
          <span>Add Image</span>
        </label>
        <div className="Show-file">
          {error && <div className="Error-file">{error}</div>}
          {file && <div className="Exist-file">{file.name}</div>}
          {file && <Progress file={file} setFile={setFile} />}
        </div>
      </form>
    </>
  );
};

export default Upload;
