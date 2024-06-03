import { Box, Flex, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import AuthActions from './AuthActions/AuthActions'
import Search from '../Search/Search'

const Header: React.FC = () => {
	return (
		<Box as='header' padding={5}>
			<Flex gap={5} alignItems='center' justifyContent='space-between'>
				<Link href='/'>
					<Heading alignSelf='start'>E-commerce</Heading>
				</Link>
				<Box flexGrow={1}>
					<Search />
				</Box>
				<AuthActions />
			</Flex>
		</Box>
	)
}

export default Header
