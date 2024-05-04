import { Avatar, Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'

const AuthActions: React.FC = () => {
	return (
		<HStack>
			<Avatar />
			<Text>admin@gmail.com</Text>
			<Button colorScheme='green' bg='green.300' _hover={{ bg: 'green.400' }}>
				Logout
			</Button>
		</HStack>
	)
}

export default AuthActions
