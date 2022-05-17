import React from "react";
import { Col } from "react-materialize";

const style = { width: "50px", height: "45px" };

const InputProfileImage = ({ setImage, imagePreview }) => {
  const posting = (event) => {
    const post = event.target.files;
    const preview = URL.createObjectURL(event.target.files[0]);
    const formData = new FormData();
    formData.append("image", post[0], post[0].name);
    imagePreview(preview);
    setImage(formData);
  };

  return (
    <Col s={12} m={6} l={6}>
      <div className="file-field input-field">
        <div className="btn red red">
          <i className="fa fa-upload"></i>
          <input
            type="file"
            onChange={posting}
            accept="image/png, image/jpeg"
            style={style}
          />
        </div>
      </div>
    </Col>
  );
};

export { InputProfileImage };
