'use client'
import { Link as StyledLink, SystemStyleObject, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type CategoryItemProps = {
	title: string
}

const CategoryItem: React.FC<CategoryItemProps> = title => {
	const path = usePathname()
	const isActive = path === `/category/${title.title}`
	const categoryItemStyles: SystemStyleObject = {
		color: 'blackAlpha.800',
		fontWeight: 'sm',
		justifyContent: 'start',
		w: '250px',
		py: '10px',
		pl: '15px',
		transition: 'all 0.15s linear',
		borderLeft: '2px solid',
		borderColor: 'gray.200',
		_hover: {
			color: 'green.300',
			borderLeft: '2px solid',
			borderColor: 'green.300',
		},
		'&.active': {
			color: 'green.400',
			borderLeft: '2px solid',
			borderColor: 'green.400',
		},
	}
	return (
		<StyledLink
			as={Link}
			href={'/category/' + title.title}
			sx={categoryItemStyles}
			className={isActive ? 'active' : ''}
		>
			<Text>{title.title}</Text>
		</StyledLink>
	)
}

export default CategoryItem
