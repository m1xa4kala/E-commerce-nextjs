import ProductsList from '@/components/ProductsList/ProductsList'
import { prisma } from '@/lib/Prisma'

async function getProducts() {
	const res = await prisma.product.findMany()
	return res
}

export default async function Home() {
	const products = await getProducts()
	return <ProductsList products={products} />
}
