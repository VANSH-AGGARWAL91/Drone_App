import React from 'react';
import Login from '../components/Login';

function App() {
    return (
        <div className="flex flex-col items-center space-y-6">
            <h1 className="text-4xl font-bold" style={{ fontFamily: 'Comic Neue, sans-serif' }}>Agri Nova</h1>
            <Login />
        </div>
    );
}

export default App;
