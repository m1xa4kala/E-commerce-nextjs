'use client'
import { SearchIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import React from 'react'

const SearchButton: React.FC = () => {
	return (
		<Button size='md'>
			<SearchIcon color='green.300' boxSize='1.3rem' />
		</Button>
	)
}

export default SearchButton
