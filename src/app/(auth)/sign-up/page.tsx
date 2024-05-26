import { Box, FormControl, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'

const SignUp: React.FC = () => {
	return (
		<Box>
			<VStack>
				<Heading>Login</Heading>
				<form>
					<FormControl>
						<FormLabel>Email</FormLabel>
						<Input placeholder='Email' />
					</FormControl>
				</form>
			</VStack>
		</Box>
	)
}

export default SignUp
