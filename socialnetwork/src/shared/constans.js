import { getAuthHeader } from "./utilities";

const HEADERS = () => {
  return {
    "Content-type": "application/json; charset=UTF-8",
    "x-api-key": "1vaHd3v",
    Authorization: getAuthHeader(),
  };
};

const handlePostTypeDisplay = (post) => {
  if (post.type === "image") {
    const buffer = post.src?.data;

    const b64 = Buffer.from(buffer).toString("base64");
    post.src = buffer ? "data:image/png;base64," + b64 : null;
  } else {
    const stringSrc = Buffer.from(post.src.data).toString();
    post.src = stringSrc;
  }
};

const handleImageDisplay = (user) => {
  const buffer = user.avatarUrl?.data || "";
  const b64 = Buffer.from(buffer).toString("base64");
  user.avatarUrl = buffer ? "data:image/png;base64," + b64 : null;
};

const customStyles = (width) => {
  if (window.innerWidth < 541) {
    width = "86%";
  }
  return {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(218, 218, 218, 0.9)",
    },
    content: {
      width: width,
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
};

export { HEADERS, handlePostTypeDisplay, handleImageDisplay, customStyles };
