import Link from 'next/link'
import { getProducts } from '@/lib/contentful'

export default async function ProductsPage() {
    const products = await getProducts()

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product: any) => (
                <Link href={`/products/${product.fields.slug}`} key={product.sys.id}>
                    <div className="border p-4 rounded-lg hover:shadow-lg transition-shadow">
                        <h2 className="text-xl font-bold">{product.fields.name}</h2>
                        <p className="text-gray-600">${product.fields.price}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}