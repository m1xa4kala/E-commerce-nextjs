import { Input, SystemStyleObject } from '@chakra-ui/react'
import React from 'react'

const SearchInput: React.FC = () => {
	const inputStyles: SystemStyleObject = {
		border: 'none',
		bgColor: 'gray.100',
		_hover: {
			border: 'none',
			boxShadow: 'md',
		},
		_focus: {
			border: 'none',
			boxShadow: 'md',
		},
	}
	return <Input placeholder='Enter amount' sx={inputStyles} />
}

export default SearchInput
