import categories from '@/categories.json'
import { VStack } from '@chakra-ui/react'
import React from 'react'
import CategoryItem from './CategoryItem'

const Sidebar: React.FC = () => {
	return (
		<VStack alignItems='start'>
			<VStack spacing={0}>
				{categories.map(category => {
					return <CategoryItem key={category} title={category} />
				})}
			</VStack>
		</VStack>
	)
}

export default Sidebar
