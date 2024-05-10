import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import ProductCard from './ProductCard/ProductCard'

type product = {
	id: string
	title: string
	description: string
	price: number
	discountPercentage: number
	rating: number
	stock: number
	brand: string
	thumbnail: string
	images: string
	createdAt: Date
	updatedAt: Date
	categoryId: number
}

type ProductsListProps = {
	products: product[]
}

const ProductsList: React.FC<ProductsListProps> = ({products}) => {
	return (
		<SimpleGrid minChildWidth='300px' gap={4}>
			{products.map(product => {
				return (
					<ProductCard key={product.id} title={product.title} price={product.price} thumbnail={product.thumbnail} />
				)
			})}
		</SimpleGrid>
	)
}

export default ProductsList
