import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import PostCard from '../components/PostCard';
import Loader from '../components/Loader';
import { getTrendingPosts } from '../services/api';

const TrendingPosts = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [posts, setPosts] = useState([]);
    
    // Try to use context if available
    const contextData = useContext(DataContext);

    useEffect(() => {
        const fetchTrendingPosts = async () => {
            try {
                setLoading(true);
                
                // Use context data if available, otherwise fetch directly
                if (contextData && contextData.trendingPosts) {
                    setPosts(contextData.trendingPosts);
                } else {
                    const response = await getTrendingPosts();
                    setPosts(response.data);
                }
                
                setError(null);
            } catch (err) {
                console.error('Failed to fetch trending posts:', err);
                setError('Failed to load trending posts. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchTrendingPosts();
    }, [contextData]);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">Trending Posts</h1>
            
            {loading ? (
                <div className="flex justify-center">
                    <Loader />
                </div>
            ) : error ? (
                <div className="bg-red-100 text-red-700 p-4 rounded-md">{error}</div>
            ) : posts.length === 0 ? (
                <div className="text-gray-500 text-center py-8">No trending posts found</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TrendingPosts;