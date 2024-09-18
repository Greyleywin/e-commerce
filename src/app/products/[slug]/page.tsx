import React from 'react';
import { getProduct } from '@/lib/contentful';
import AddToCartButton from '@/components/AddToCartButton';

interface Product {
    fields: {
        image: { fields: { file: { url: string } } };
        name: string;
        price: number;
        description: string;
    };
}

interface ProductPageProps {
    params: {
        slug: string;
    };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }: ProductPageProps) => {
    const product: Product | null = await getProduct(params.slug);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
                <img src={product.fields.image.fields.file.url} alt={product.fields.name} className="w-full rounded-lg" />
            </div>
            <div className="md:w-1/2">
                <h1 className="text-3xl font-bold mb-4">{product.fields.name}</h1>
                <p className="text-xl mb-4">${product.fields.price}</p>
                <p className="mb-4">{product.fields.description}</p>
                <AddToCartButton product={product} />
            </div>
        </div>
    );
};

export default ProductPage;