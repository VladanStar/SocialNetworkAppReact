import { embed } from "../shared/utilities";

class Post {
  constructor(post) {
    this.id = post._id;
    this.createdAt = post.createdAt;
    this.owner = post.owner;
    this.type = post.type;
    this.updatedAt = post.updatedAt;
    if (post.type === "video") {
      this.src = embed(post.src);
    } else {
      this.src = post.src;
    }
  }
}

export { Post };
