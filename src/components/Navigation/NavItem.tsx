import { SystemStyleObject, Text } from '@chakra-ui/react'
import React from 'react'

const NavItem: React.FC<{ name: string }> = props => {
	const navItemStyle: SystemStyleObject = {
		color: 'blackAlpha.800',
		_hover: {
			color: 'green.400',
			cursor: 'pointer',
		},
	}
	return <Text sx={navItemStyle}>{props.name}</Text>
}

export default NavItem
