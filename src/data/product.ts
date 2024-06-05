import { prisma } from '@/lib/Prisma'
import { Category } from '@prisma/client'

export async function getProductsByCategory(category: Category) {
	try {
		const products = await prisma.product.findMany({ where: { category } })
		return products
	} catch (error) {
		throw Error('Something went wrong, try to reload page')
	}
}
