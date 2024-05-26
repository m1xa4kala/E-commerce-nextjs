import {
	Box,
	Button,
	Checkbox,
	Flex,
	FormControl,
	FormLabel,
	HStack,
	Heading,
	Input,
	Spacer,
	Link as StyledLink,
	Text,
} from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const SignIn: React.FC = () => {
	return (
		<Flex shadow='0px 10px 34px -15px rgba(0, 0, 0, 0.24)' w='100%'>
			<Box padding={10} bg='white' w='50%'>
				<Heading mb={8} fontWeight='thin'>
					Sign In
				</Heading>
				<form>
					<FormControl mb={4}>
						<FormLabel>Email</FormLabel>
						<Input placeholder='Email' focusBorderColor='green.400' />
					</FormControl>
					<FormControl mb={4}>
						<FormLabel>Password</FormLabel>
						<Input placeholder='Password' focusBorderColor='green.400' />
					</FormControl>
					<Button colorScheme='green' bg='green.300' w='100%' mb={4} _hover={{ bg: 'green.400' }}>
						Sign In
					</Button>
					<HStack>
						<Checkbox defaultChecked colorScheme='green'>
							Remember me
						</Checkbox>
						<Spacer />
						<Link href='/forgot-pass'>Forgot password</Link>
					</HStack>
				</form>
			</Box>
			<Box
				textAlign='center'
				padding={10}
				bgGradient='linear(135deg, green.200 0%, green.400 100%)'
				color='white'
				w='50%'
			>
				<Heading my={4}>
					Welcome to <br />
					E-commerce
				</Heading>
				<Text mb={4}>Don't have an account</Text>
				<StyledLink
					as={Link}
					mb={4}
					href='/sign-up'
					color='white'
					bg='transparent'
					borderRadius={2}
					border='2px solid'
					_hover={{ bg: 'white', color: 'green.400', border: '2px solid white' }}
				>
					Sign Up
				</StyledLink>
			</Box>
		</Flex>
	)
}

export default SignIn
