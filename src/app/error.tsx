'use client'
import { Box, Button, HStack, Heading, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const ErrorPage: React.FC = () => {
	const router = useRouter()
	return (
		<VStack h='100vh' justifyContent='center' bgColor='gray.100'>
			<Box p={10} textAlign='center' bgColor='white' borderRadius={8} shadow='md'>
				<Heading mb={6} fontWeight='normal'>
					Something went wrong.
				</Heading>
				<HStack justifyContent='center'>
					<Button as={Link} href='/'>
						Home
					</Button>
					<Button onClick={router.back}>Go back</Button>
				</HStack>
			</Box>
		</VStack>
	)
}

export default ErrorPage
