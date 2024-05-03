'use client'
import { PhoneIcon } from '@chakra-ui/icons'
import { Button, SystemStyleObject } from '@chakra-ui/react'
import React from 'react'

const CategoryItem: React.FC = () => {
	const categoryItemStyles: SystemStyleObject = {
		color: 'blackAlpha.800',
		borderRadius: 0,
		fontWeight: 'sm',
		justifyContent: 'start',
		w: '250px',
		py: '20px',
		pl: '10px',
		_hover: {
			color: 'green.300',
			bg: 'gray.200',
			borderRadius: '10px',
		},
		_active: {
			color: 'white',
			bg: 'green.300',
			borderRadius: '10px',
		},
	}
	return (
		<Button leftIcon={<PhoneIcon />} sx={categoryItemStyles}>
			Category
		</Button>
	)
}

export default CategoryItem
