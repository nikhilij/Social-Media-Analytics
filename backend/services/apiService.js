const axios = require('axios');
require('dotenv').config();
const User = require('../models/userModel');
const Post = require('../models/postModel');
const Comment = require('../models/commentModel');

const apiClient = axios.create({
    baseURL: 'http://20.244.56.144/evaluation-service',
    headers: {
        'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`,
        'Content-Type': 'application/json'
    }
});

const fetchUsers = async () => {
    const { data } = await apiClient.get('/users');
    return Object.entries(data.users).map(([id, name]) => new User(id, name));
};

const fetchPosts = async (type) => {
    const { data } = await apiClient.get('/users');
    const users = Object.keys(data.users);

    let allPosts = [];
    for (const userId of users) {
        const { data: posts } = await apiClient.get(`/users/${userId}/posts`);
        allPosts.push(...posts.posts.map(post => new Post(post.id, post.userid, post.content)));
    }

    if (type === 'popular') {
        for (const post of allPosts) {
            const { data: comments } = await apiClient.get(`/posts/${post.id}/comments`);
            post.commentCount = comments.comments.length;
        }
        allPosts.sort((a, b) => b.commentCount - a.commentCount);
        return allPosts.filter(post => post.commentCount === allPosts[0].commentCount);
    } else if (type === 'latest') {
        return allPosts.slice(-5).reverse();
    } else {
        throw new Error('Invalid type parameter');
    }
};

const fetchComments = async (postId) => {
    const { data } = await apiClient.get(`/posts/${postId}/comments`);
    return data.comments.map(comment => new Comment(comment.id, comment.postid, comment.content));
};

module.exports = { fetchUsers, fetchPosts, fetchComments };
