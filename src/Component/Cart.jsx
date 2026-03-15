import React, { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Cart() {

    const { cart, increaseQty, decreaseQty } = useContext(CartContext);
    const totalAmount = cart.reduce(
        (total, item) => total + item.newPrice * item.qty,
        0
    );
    return (
        <div className="p-10">

            <h1 className="text-3xl font-bold mb-5">My Cart</h1>

            {cart.map((item) => (

                <div key={item.id} className="flex gap-10 items-center ml-20">

                    <img src={item.image} className="w-100 h-50 pt-5" />

                    <div className="flex ml-10 pt-5">
                        <h2 className="text-xl font-bold">{item.name}</h2>

                        {/* Dynamic Price */}
                        <p className="text-lg font-bold text-green-600 ml-10 mt-0">
                            ₹{item.newPrice * item.qty}
                        </p>

                        <div className="flex gap-6  ml-10 items-center">

                            <button
                                onClick={() => decreaseQty(item.id)}
                                className="bg-gray-300 w-8 text-center text-xl cursor-pointer"
                            >
                                -
                            </button>

                            <p className="text-2xl font-bold">{item.qty}</p>

                            <button
                                onClick={() => increaseQty(item.id)}
                                className="bg-gray-300 w-8 text-xl font-bold cursor-pointer"
                            >
                                +
                            </button>

                        </div>

                    </div>

                </div>

            ))}
            <div className="mt-10 border-t pt-5">
                <h2 className="text-2xl font-bold">
                    Total Amount : ₹{totalAmount}
                </h2>
            </div>
        </div>
    );
}