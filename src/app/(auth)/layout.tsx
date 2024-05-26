import { Container, Flex } from '@chakra-ui/react'
import React from 'react'

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<Flex alignItems='center' justifyContent='center' h='100vh' bgColor='gray.100'>
			<Container maxW={{ sm: 'container.sm', md: 'container.md', lg: 'container.lg' }}>{children}</Container>
		</Flex>
	)
}

export default AuthLayout
