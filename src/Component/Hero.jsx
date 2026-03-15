import React from "react";

export default function Hero() {
    return (
        <div className="relative w-full h-60   bg-black">

            
            <img
                className="absolute right-50 bottom--4 w-100 h-60 rounded-[50%]"
                src="https://img.freepik.com/free-photo/young-girl-dressed-up-black-t-shirt-leather-trousers-holding-blank-craft-shopping-bags-with-handles-isolated-white_231208-4952.jpg?semt=ais_hybrid&w=740&q=80"
                
            />

           
            <div className="absolute left-80 top-10">
                <h1 className="text-3xl font-bold text-pink-500">New Fashion Collection</h1>
                <p className="text-2xl font-bold mt-2  text-pink-500">Discover latest trends</p>

                <button className="mt-3 bg-red-500 px-4 py-2 rounded">
                    Shop Now
                </button>
            </div>

        </div>
    );
}