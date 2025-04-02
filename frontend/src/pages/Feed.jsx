import React, { useState, useEffect } from 'react';
import { getLatestPosts } from '../services/api';
import PostCard from '../components/PostCard';
import Loader from '../components/Loader';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newPostsAvailable, setNewPostsAvailable] = useState(false);
    const [lastFetchTime, setLastFetchTime] = useState(Date.now());

    const fetchPosts = async (initial = false) => {
        try {
            setLoading(initial);
            const response = await getLatestPosts();
            
            if (initial) {
                setPosts(response.data);
            } else {
                // Check if there are new posts
                const hasNewPosts = response.data.some(post => 
                    !posts.find(p => p.id === post.id)
                );
                
                if (hasNewPosts) {
                    setNewPostsAvailable(true);
                }
            }
            
            setLastFetchTime(Date.now());
            setError(null);
        } catch (err) {
            setError('Failed to fetch latest posts. Please try again later.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const loadNewPosts = () => {
        getLatestPosts().then(response => {
            setPosts(response.data);
            setNewPostsAvailable(false);
        });
    };

    useEffect(() => {
        // Initial fetch
        fetchPosts(true);
        
        // Set up polling for real-time updates
        const pollingInterval = setInterval(() => fetchPosts(), 10000); // Poll every 10 seconds
        
        return () => clearInterval(pollingInterval);
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
            
            {newPostsAvailable && (
                <button 
                    onClick={loadNewPosts}
                    className="w-full py-2 mb-4 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
                >
                    New posts available! Click to refresh
                </button>
            )}
            
            {loading && posts.length === 0 ? (
                <Loader />
            ) : posts.length === 0 ? (
                <p className="text-center text-gray-500 my-12">No posts available at the moment.</p>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map(post => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            )}
            
            {error && (
                <div className="text-center text-red-500 mt-4">{error}</div>
            )}
        </div>
    );
};

export default Feed;