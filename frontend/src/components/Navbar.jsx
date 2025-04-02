import React from 'react';
import { Link, useLocation } from 'react-router';
import { FaUser, FaFire, FaRss } from 'react-icons/fa';

function Navbar () {
    const location = useLocation();
    
    // Function to determine if a link is active
    const isActive = (path) => location.pathname === path;
    
    return (
        <nav className="bg-blue-500 text-white p-4 shadow-md">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                <Link to="/" className="text-xl font-bold mb-2 sm:mb-0 hover:text-blue-200 transition-colors">
                    Social Media Analytics
                </Link>
                <ul className="flex space-x-4">
                    <li>
                        <Link 
                            to="/top-users" 
                            className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                                isActive('/top-users') 
                                    ? 'bg-blue-700 text-white' 
                                    : 'hover:bg-blue-600'
                            }`}
                        >
                            <FaUser className="mr-2" />
                            Top Users
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/trending-posts" 
                            className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                                isActive('/trending-posts') 
                                    ? 'bg-blue-700 text-white' 
                                    : 'hover:bg-blue-600'
                            }`}
                        >
                            <FaFire className="mr-2" />
                            Trending Posts
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/feed" 
                            className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                                isActive('/feed') 
                                    ? 'bg-blue-700 text-white' 
                                    : 'hover:bg-blue-600'
                            }`}
                        >
                            <FaRss className="mr-2" />
                            Feed
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;