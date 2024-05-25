import { prisma } from '@/lib/Prisma'
import { VStack } from '@chakra-ui/react'
import React from 'react'
import CategoryItem from './CategoryItem'

const Sidebar: React.FC = async () => {
	const categories = await prisma.category.findMany()
	return (
		<VStack spacing={0} bgColor='gray.200' borderRadius='10px' py='15px'>
			{categories.map(category => {
				return <CategoryItem key={category.id} title={category.name} />
			})}
		</VStack>
	)
}

export default Sidebar
