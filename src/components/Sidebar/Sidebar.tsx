import { VStack } from '@chakra-ui/react'
import React from 'react'
import CategoryItem from './CategoryItem'

const Sidebar: React.FC = () => {
	return (
		<VStack alignItems='start'>
			<VStack spacing={0}>
				<CategoryItem />
				<CategoryItem />
				<CategoryItem />
				<CategoryItem />
				<CategoryItem />
				<CategoryItem />
				<CategoryItem />
				<CategoryItem />
			</VStack>
		</VStack>
	)
}

export default Sidebar
