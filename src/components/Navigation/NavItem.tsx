'use client'
import { Link } from '@chakra-ui/next-js'
import { SystemStyleObject } from '@chakra-ui/react'
import React from 'react'

const NavItem: React.FC<{ name: string }> = props => {
	const navItemStyle: SystemStyleObject = {
		color: 'blackAlpha.800',
		_hover: {
			color: 'green.400',
			cursor: 'pointer',
		},
	}
	return (
		<Link href={'/' + props.name.toLowerCase()} sx={navItemStyle}>
			{props.name}
		</Link>
	)
}

export default NavItem
