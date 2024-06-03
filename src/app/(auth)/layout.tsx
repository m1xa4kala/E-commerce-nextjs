import { Container, Flex } from '@chakra-ui/react'
import React from 'react'

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<Flex alignItems='center' justifyContent='center' h='100vh' bgColor='gray.100'>
			<Container maxW={{ sm: 'container.sm', md: 'container.md', lg: 'container.lg' }}>
				<Flex shadow='0px 10px 34px -15px rgba(0, 0, 0, 0.24)' w='100%'>
					{children}
				</Flex>
			</Container>
		</Flex>
	)
}

export default AuthLayout
