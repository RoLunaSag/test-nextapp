import { ProductList } from '@/src/types/prodcut'
import type { InferGetStaticPropsType, GetStaticProps } from 'next'

export const getStaticProps = (async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const repo = await res.json()
    return { props: { repo } }
}) satisfies GetStaticProps<{
    repo: ProductList
}>

export default function Page({
    repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return repo.stargazers_count
}