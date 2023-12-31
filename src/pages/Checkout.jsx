import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = () => {
    if (name && email && cardNumber && expiry && cvv) {
      toast.success("Your payment is done. Thank you for shopping.");
    } else {
      toast.error("Please fill out all payment fields.");
    }
  };
  return (
    <div className=" min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md mx-auto my-8 p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded"
              type="text"
              id="name"
              name="name"
              placeholder="name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded"
              type="email"
              id="email"
              name="email"
              placeholder="email@example.com"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="cardNumber"
            >
              Card Number
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded"
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="**** **** **** ****"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="expiry"
              >
                Expiry Date
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded"
                type="text"
                id="expiry"
                name="expiry"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="cvv"
              >
                CVV
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded"
                type="text"
                id="cvv"
                name="cvv"
                placeholder="123"
              />
            </div>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handlePayment();
            }}
            className="w-full mt-6 bg-indigo-500 text-white p-4 rounded hover:bg-indigo-700"
            type="submit"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
