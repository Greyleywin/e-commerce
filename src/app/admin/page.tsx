import { getProducts } from '@/lib/contentful'
import Link from 'next/link'

export default async function AdminDashboard() {
    const products = await getProducts()

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <h2 className="text-xl font-semibold mb-2">Products</h2>
            <ul>
                {products.map((product: any) => (
                    <li key={product.sys.id} className="mb-2">
                        <Link href={`/admin/products/${product.sys.id}`} className="text-blue-500 hover:underline">
                            {product.fields.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <Link href="/admin/products/new" className="bg-green-500 text-white px-4 py-2 rounded inline-block mt-4">
                Add New Product
            </Link>
        </div>
    )
}