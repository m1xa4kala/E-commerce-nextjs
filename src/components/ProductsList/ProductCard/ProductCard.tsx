import { Button, Card, CardFooter, CardHeader, HStack, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

type ProductCardProps = {
	title: string
	thumbnail: string
	price: number
}

const ProductCard: React.FC<ProductCardProps> = product => {
	return (
		<Card minH='450px' width='300px' justifyContent='space-between'>
			<CardHeader>
				<Image alt={product.title} src={product.thumbnail} width={300} height={300} />
				<Heading size='md'>{product.title}</Heading>
			</CardHeader>
			<CardFooter>
				<HStack alignItems='center' justifyContent='space-between' w='100%'>
					<Text>${product.price}</Text>
					<Button colorScheme='green' bg='green.300' _hover={{ bg: 'green.400' }}>
						Add to cart
					</Button>
				</HStack>
			</CardFooter>
		</Card>
	)
}

export default ProductCard
