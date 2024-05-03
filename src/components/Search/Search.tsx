import { InputGroup, InputRightElement, Stack } from '@chakra-ui/react'
import React from 'react'
import SearchButton from './SearchButton'
import SearchInput from './SearchInput'

const Search: React.FC = () => {
	return (
		<Stack spacing={4}>
			<InputGroup size='lg'>
				<SearchInput />
				<InputRightElement p='5px'>
					<SearchButton />
				</InputRightElement>
			</InputGroup>
		</Stack>
	)
}

export default Search
