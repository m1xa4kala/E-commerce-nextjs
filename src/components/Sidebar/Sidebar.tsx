import { prisma } from '@/lib/Prisma'
import { VStack } from '@chakra-ui/react'
import React from 'react'
import CategoryItem from './CategoryItem'

const Sidebar: React.FC = async () => {
	const categories = await prisma.category.findMany()
	return (
		<VStack alignItems='start'>
			<VStack spacing={0}>
				{categories.map(category => {
					return <CategoryItem key={category.id} title={category.name} />
				})}
			</VStack>
		</VStack>
	)
}

export default Sidebar
