import { Comment } from "../entities/CommentObj";
import { Post } from "../entities/PostObj";
import { storageService } from "./storageService";
const { baseURL } = require("../shared/baseURL");
const { HEADERS, handlePostTypeDisplay } = require("../shared/constants");

class PostService {

    async getAllPosts() {
        return await baseURL.get('posts', {
            headers: HEADERS()
        })
            .then(response => {
                const posts = response.data.data.map(post => {
                    handlePostTypeDisplay(post)
                    return new Post(post)
                })
                return posts
            })
            .catch(error => console.log(error))

    }

    async getSinglePost(id) {
        return await baseURL.get(`posts/${id}`, {
            headers: HEADERS()
        })
            .then(response => {
                const post = response.data.data;
                handlePostTypeDisplay(post)
                return new Post(post)
            })
    }

    async getSinglePostComments(id) {
        return await baseURL.get(`posts/${id}/comments`, {
            headers: HEADERS()
        })
            .then(response => {
                const comments = response.data.data.map(comment => new Comment(comment))
                return comments
            })
    }

    async createPost(type, src) {
        return await baseURL.post('posts', { type, src }, {
            headers: HEADERS()
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    async createImagePost({ src }) {
        const token = storageService.get('token');
        return await baseURL.post('posts?type=image', src, {
            headers: {
                "x-api-key": "1vaHd3v",
                Authorization: token,
            }
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }

    async deletePost(id) {
        return await baseURL.delete(`posts/${id}`, {
            headers: HEADERS()
        })
        .then(response => console.log(response))
        .catch(() => alert('This is not your post. You can not delete it!'))
    }
}

export const postService = new PostService()