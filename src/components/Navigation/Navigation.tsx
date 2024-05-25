import { Box, Flex, HStack, Heading } from '@chakra-ui/react'
import React from 'react'
import NavItem from './NavItem'

const Navigation: React.FC = () => {
	return (
		<Flex gap={5}>
			<Box
				color='white'
				bg='green.300'
				borderRadius='10px 10px 50px 10px'
				h='46px'
				w='250px'
				textAlign='center'
				alignContent='center'
			>
				<Heading fontWeight='normal' fontSize='xl'>
					Categories
				</Heading>
			</Box>
			<HStack
				as='nav'
				justifyContent='space-between'
				flexGrow={1}
				bg='gray.200'
				px='40px'
				borderRadius='50px 10px 10px 10px'
			>
				<NavItem name='Recommended' />
				<NavItem name='Popular' />
				<NavItem name='Favorite' />
				<NavItem name='Top discount' />
			</HStack>
		</Flex>
	)
}

export default Navigation
