import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Card from './components/Card';
import './App.css';
const App = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <Header />
            <div className="flex">
                <Sidebar />
                <main className="flex-1 p-4">
                    <Card title="Welcome" content="This is your social media analytics dashboard." />
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default App;
