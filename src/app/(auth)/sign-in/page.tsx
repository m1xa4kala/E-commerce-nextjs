'use client'
import SignInForm from '@/components/Auth/SignInForm/SignInForm'
import { Box, Button, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const SignIn: React.FC = () => {
	return (
		<>
			<Box padding={10} py={20} bg='white' w='50%'>
				<Heading mb={8} fontWeight='thin'>
					Sign In
				</Heading>
				<SignInForm />
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
				<Button as={Link} mb={4} href='/sign-up' variant='outline'>
					Sign Up
				</Button>
			</Box>
		</>
	)
}

export default SignIn
