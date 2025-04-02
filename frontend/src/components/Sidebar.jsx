import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
    FaChartLine, 
    FaUsers, 
    FaFire, 
    FaRss, 
    FaCog, 
    FaTachometerAlt 
} from 'react-icons/fa';

const Sidebar = () => {
    const location = useLocation();
    
    // Function to determine if a link is active
    const isActive = (path) => location.pathname === path;
    
    return (
        <aside className="bg-gray-100 w-60 p-4 h-screen shadow-md hidden md:block">
            <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Dashboard</h2>
            </div>
            
            <nav>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Analytics</h3>
                <ul className="space-y-2 mb-6">
                    <li>
                        <Link 
                            to="/dashboard" 
                            className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                                isActive('/dashboard') 
                                    ? 'bg-blue-500 text-white' 
                                    : 'text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            <FaTachometerAlt className="mr-3 text-lg" />
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/analytics" 
                            className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                                isActive('/analytics') 
                                    ? 'bg-blue-500 text-white' 
                                    : 'text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            <FaChartLine className="mr-3 text-lg" />
                            Analytics
                        </Link>
                    </li>
                </ul>
                
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Content</h3>
                <ul className="space-y-2 mb-6">
                    <li>
                        <Link 
                            to="/top-users" 
                            className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                                isActive('/top-users') 
                                    ? 'bg-blue-500 text-white' 
                                    : 'text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            <FaUsers className="mr-3 text-lg" />
                            Top Users
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/trending-posts" 
                            className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                                isActive('/trending-posts') 
                                    ? 'bg-blue-500 text-white' 
                                    : 'text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            <FaFire className="mr-3 text-lg" />
                            Trending Posts
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/feed" 
                            className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                                isActive('/feed') 
                                    ? 'bg-blue-500 text-white' 
                                    : 'text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            <FaRss className="mr-3 text-lg" />
                            Feed
                        </Link>
                    </li>
                </ul>
                
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Preferences</h3>
                <ul className="space-y-2">
                    <li>
                        <Link 
                            to="/settings" 
                            className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                                isActive('/settings') 
                                    ? 'bg-blue-500 text-white' 
                                    : 'text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            <FaCog className="mr-3 text-lg" />
                            Settings
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;