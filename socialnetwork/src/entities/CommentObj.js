class Comment{
    constructor(comment){
        this.id=comment._id;
        this.body=comment.body;
        this.createdAt=comment.createdAt;
        this.owner=comment.owner;
        this.postId=comment.postId;
        this.updatedAt=comment.updatedAt;
    }
}

export { Comment };