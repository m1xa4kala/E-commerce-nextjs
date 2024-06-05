import ProductsList from '@/components/ProductsList/ProductsList'
import { getCategoryByName } from '@/data/category'
import { getProductsByCategory } from '@/data/product'
import { notFound } from 'next/navigation'
import ProductsNotFoundPage from '../../not-found'

export default async function Home({ params }: { params: { categoryName: string } }) {
	const category = await getCategoryByName(params.categoryName)
	if (!category) notFound()
	const products = await getProductsByCategory(category)
	return products.length ? <ProductsList products={products} /> : <ProductsNotFoundPage />
}
