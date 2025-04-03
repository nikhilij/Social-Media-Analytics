import React from "react";

function Navbar (){
    return(
        <>
          <nav>
            <div className="flex justify-between items-center bg-gray-800 p-4">
                <div className="text-white text-lg font-bold">MyApp</div>
                <ul className="flex space-x-4">
                    <li><a href="#" className="text-white hover:text-gray-400">Home</a></li>
                    <li><a href="#" className="text-white hover:text-gray-400">About</a></li>
                    <li><a href="#" className="text-white hover:text-gray-400">Services</a></li>
                    <li><a href="#" className="text-white hover:text-gray-400">Contact</a></li>
                </ul>
            </div>
            <div className="bg-gray-700 p-2">
                <input type="text" placeholder="Search..." className="p-2 rounded w-full" />
            </div>
            <div className="bg-gray-600 p-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
                <button className="bg-green-500 text-white px-4 py-2 rounded ml-2">Sign Up</button>
            </div>
            <div className="bg-gray-500 p-2">
                <button className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded ml-2">Settings</button>
            </div>
            <div className="bg-gray-400 p-2">
                <button className="bg-purple-500 text-white px-4 py-2 rounded">Profile</button>
                <button className="bg-orange-500 text-white px-4 py-2 rounded ml-2">Notifications</button>
            </div>
            <div className="bg-gray-300 p-2">
                <button className="bg-pink-500 text-white px-4 py-2 rounded">Messages</button>
                <button className="bg-teal-500 text-white px-4 py-2 rounded ml-2">Friends</button>
            </div>
            <div className="bg-gray-200 p-2">
                <button className="bg-indigo-500 text-white px-4 py-2 rounded">Groups</button>
                <button className="bg-lime-500 text-white px-4 py-2 rounded ml-2">Events</button>
            </div>
            <div className="bg-gray-100 p-2">
                <button className="bg-gray-800 text-white px-4 py-2 rounded">Help</button>
                <button className="bg-gray-700 text-white px-4 py-2 rounded ml-2">Feedback</button>
            </div>
            <div className="bg-gray-50 p-2">
                <button className="bg-gray-600 text-white px-4 py-2 rounded">Terms</button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded ml-2">Privacy</button>
            </div>
            <div className="bg-gray-400 p-2">
                <button className="bg-gray-300 text-white px-4 py-2 rounded">Support</button>
                <button className="bg-gray-200 text-white px-4 py-2 rounded ml-2">Community</button>
            </div>
            <div className="bg-gray-300 p-2">
                <button className="bg-gray-200 text-white px-4 py-2 rounded">Blog</button>
                <button className="bg-gray-100 text-white px-4 py-2 rounded ml-2">Careers</button>
            </div>
            <div className="bg-gray-200 p-2">
                <button className="bg-gray-100 text-white px-4 py-2 rounded">API</button>
                <button className="bg-gray-50 text-white px-4 py-2 rounded ml-2">Developers</button>
            </div>
            <div className="bg-gray-100 p-2">
                <button className="bg-gray-50 text-white px-4 py-2 rounded">Advertise</button>
                <button className="bg-gray-200 text-white px-4 py-2 rounded ml-2">Business</button>
            </div>
          </nav>
        </>
    )
}
export default Navbar;