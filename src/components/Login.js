import React from 'react';

function Login() {
    return (
        <div className="flex flex-col space-y-4">
            <input type="text" placeholder="Enter the Mobile no" className="w-full p-3 rounded-full bg-gray-200 text-center" />
            <input type="text" placeholder="Enter OTP" className="w-full p-3 rounded-full bg-gray-200 text-center" />
            <button className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                <i className="fas fa-arrow-right"></i>
            </button>
            <p className="text-black mt-6">@v_aggarwal_industries</p>
        </div>
    );
}

export default Login;
