import { HEADERS } from "../shared/constants";
import { Comment } from '../entities/CommentObj';
const { baseURL } = require("../shared/baseURL");

class CommmentService {

    async getAllComments() {
        return await baseURL.get('comments', {
            headers: HEADERS()
        })
        .then(response => {
            const comments = response.data.data.map(comment => new Comment(comment))
            return comments;
        })
    }
    
    async createComment({ postId, body }) {
        return await baseURL.post('comments', { postId, body }, {
            headers: HEADERS()
        })
        .catch(error => console.log(error))
    }

    async deleteComment(id){
        return await baseURL.delete(`comments/${id}`, {
            headers: HEADERS()
        })
        .catch(()=> alert('This is not your comment. You can not delete it!'))
    }
}

export const commentService = new CommmentService();