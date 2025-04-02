import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import UserCard from '../components/UserCard';
import Loader from '../components/Loader';
import { getTopUsers } from '../services/api';

const TopUsers = () => {
    // You can use context if available, or manage state locally
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Alternative: use the context if properly set up
    // const { users } = useContext(DataContext);

    useEffect(() => {
        const fetchTopUsers = async () => {
            try {
                setLoading(true);
                const response = await getTopUsers();
                setUsers(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch top users');
                setLoading(false);
                console.error('Error fetching top users:', err);
            }
        };

        fetchTopUsers();
    }, []);

    if (loading) return <Loader />;
    
    if (error) return (
        <div className="flex justify-center items-center h-screen">
            <p className="text-red-500 text-xl">{error}</p>
        </div>
    );

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Top Users</h1>
            
            {users.length === 0 ? (
                <p className="text-center text-gray-500">No users found</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {users.map(user => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default TopUsers;