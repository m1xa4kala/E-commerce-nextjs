import { prisma } from '@/lib/Prisma'

export async function getUserByEmail(email: string) {
	try {
		const user = await prisma.user.findUnique({ where: { email } })
		return user
	} catch (error) {
		return null
	}
}

export async function getUserById(id: string) {
	try {
		const user = await prisma.user.findUnique({ where: { id } })
		return user
	} catch (error) {
		return null
	}
}

export async function getUserByName(name: string) {
	try {
		const user = await prisma.user.findUnique({ where: { name } })
		return user
	} catch (error) {
		return null
	}
}
