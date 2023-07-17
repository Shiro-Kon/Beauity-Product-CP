type Product = {
    id: number
    title: string
    time: string
    image: string
}
const BlogArr: Product[] = [
    {
        id: 1,
        title: 'Nam ullamcorper cras',
        time: 'Facial oil: Nourishing skincare product for hydrated, glowing skin.',
        image: '/images/NamUllamcorper.webp',
    },
    {
        id: 2,
        title: 'Nec nostra tempor',
        time: 'Facial oil: Nourishing skincare product for hydrated, glowing skin.',
        image: '/images/NecNostra.webp',
    },
]
export const getProductsObject = (array: Product[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )

export default BlogArr