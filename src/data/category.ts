'use server'
import { prisma } from '@/lib/Prisma'

export async function getCategoryByName(name: string) {
	try {
		const category = await prisma.category.findFirst({ where: { name } })
		return category
	} catch (error) {
		throw Error('Something went wrong')
	}
}
