'use client'
import { SearchIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import React from 'react'

const SearchButton: React.FC = () => {
	return <IconButton aria-label='Search' icon={<SearchIcon />} />
}

export default SearchButton
