import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'

const SignOut: React.FC = () => {
	return (
		<Box>
			<form>
				<Heading>You want to sign out from !`account`?</Heading>
				<Button>Sign out</Button>
				<Button>Stay in</Button>
			</form>
		</Box>
	)
}

export default SignOut
