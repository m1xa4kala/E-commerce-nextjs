'use client'
import { Link } from '@chakra-ui/next-js'
import { SystemStyleObject } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItem: React.FC<{ name: string }> = props => {
	const path = usePathname()
	const isActive = path === `/${props.name.toLowerCase().replace(' ', '')}`
	const navItemStyle: SystemStyleObject = {
		color: 'blackAlpha.800',
		transition: 'all 0.15s linear',
		borderBottom: '2px solid',
		borderColor: 'gray.200',
		py: '10px',
		_hover: {
			color: 'green.300',
			cursor: 'pointer',
			borderBottom: '2px solid',
			borderColor: 'green.300',
		},
		'&.active': {
			color: 'green.400',
			borderBottom: '2px solid',
			borderColor: 'green.400',
		},
	}
	return (
		<Link href={'/' + props.name.toLowerCase().replace(' ', '')} sx={navItemStyle} className={isActive ? 'active' : ''}>
			{props.name}
		</Link>
	)
}

export default NavItem
