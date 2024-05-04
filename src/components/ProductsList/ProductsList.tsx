import products from '@/products.json'
import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import ProductCard from './ProductCard/ProductCard'

const ProductsList: React.FC = () => {
	const allProducts = products.products
	return (
		<SimpleGrid minChildWidth='300px' gap={4}>
			{allProducts.map(product => {
				return (
					<ProductCard key={product.id} title={product.title} price={product.price} thumbnail={product.thumbnail} />
				)
			})}
		</SimpleGrid>
	)
}

export default ProductsList
