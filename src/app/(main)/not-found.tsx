import { HStack, Heading } from '@chakra-ui/react'
import React from 'react'

const ProductsNotFoundPage: React.FC = () => {
	return (
		<HStack justifyContent='center'>
			<Heading>Nothing found, try to change your search params</Heading>
		</HStack>
	)
}

export default ProductsNotFoundPage
