import { createClient } from 'contentful'

export const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

export async function getProducts() {
    const response = await client.getEntries({ content_type: 'product' })
    return response.items
}

export async function getProduct(slug: string) {
    const response = await client.getEntries({
        content_type: 'product',
        'fields.slug': slug,
        limit: 1,
    })
    return response.items[0]
}