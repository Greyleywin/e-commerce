'use client'

import { useCart } from '@/context/CartContext'

export default function AddToCartButton({ product }: { product: any }) {
    const { dispatch } = useCart()

    const handleAddToCart = () => {
        dispatch({
            type: 'ADD_ITEM',
            payload: {
                id: product.sys.id,
                name: product.fields.name,
                price: product.fields.price,
                quantity: 1,
            },
        })
    }

    return (
        <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
            Add to Cart
        </button>
    )
}