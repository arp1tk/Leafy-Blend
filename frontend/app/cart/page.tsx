"use client";

import { useCart } from "@/context/cartContext/context";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
        <p className="mt-2 text-gray-500">Add some products to your bag.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-10 px-6 md:px-20">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between border rounded-lg p-4"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.image.trim()} 
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-md object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500">₹{item.price} x {item.quantity}</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => removeFromCart(item._id)}
              >
                Remove
              </Button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <p className="text-gray-700 mb-2">Subtotal: ₹{totalPrice}</p>
          <Button className="w-full bg-[#394931] hover:bg-[#2f3b2b] text-white mt-4">
            Proceed to Checkout
          </Button>
          <Button
            variant="outline"
            className="w-full mt-2"
            onClick={clearCart}
          >
            Clear Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
