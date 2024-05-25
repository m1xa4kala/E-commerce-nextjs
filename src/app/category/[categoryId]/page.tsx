import ProductsList from '@/components/ProductsList/ProductsList'
import { prisma } from '@/lib/Prisma'

async function getProducts(categoryId: string) {
	const res = await prisma.product.findMany({
		where: {
			category: {
				name: categoryId,
			},
		},
	})
	return res
}

export default async function Home({ params }: { params: { categoryId: string } }) {
	const products = await getProducts(params.categoryId)
	return <ProductsList products={products} />
}
