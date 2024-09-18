'use client'

import { useCart } from '@/context/CartContext'
import { useState } from 'react'
import { useSession } from 'next-auth/react'

export default function CheckoutPage() {
    const { state } = useCart()
    const [address, setAddress] = useState('')
    const { data: session } = useSession()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the order to your backend
        console.log('Order submitted', { items: state.items, address, user: session?.user })
    }

    const total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <div className="max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
                {state.items.map(item => (
                    <div key={item.id} className="flex justify-between mb-2">
                        <span>{item.name} x {item.quantity}</span>
                        <span>${item.price * item.quantity}</span>
                    </div>
                ))}
                <div className="font-bold mt-2">Total: ${total}</div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="address" className="block mb-2">Shipping Address</label>
                    <textarea
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Place Order
                </button>
            </form>
        </div>
    )
}