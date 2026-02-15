"use client";

import React from 'react';


const Store: React.FC = () => {
    return (
        <section 
            className="min-h-screen relative overflow-hidden flex flex-col items-center justify-end bg-cover bg-center"
            style={{
                backgroundImage: "url('/bg_store.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* section Container */}
            {/* <div className="relative z-10 bottom-8 pb-12 sm:pb-16">
                <button 
                    className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-gray-900 text-gray-900 font-bold text-lg sm:text-xl rounded-lg sm:rounded-xl"
                >
                    ENTER STORE
                </button>
            </div> */}
        </section>
    );
};

export default Store;