import Link from 'next/link'

function Home({ product }: { product: { slug: string } }) {
    return (
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href={{
                    pathname: "/product/[name]",
                    query: { name: product.slug }
                }}><a>Product</a></Link>
            </li>
        </ul>
    )
}

export default Home;