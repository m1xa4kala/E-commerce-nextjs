'use client'
import { PhoneIcon } from '@chakra-ui/icons'
import { Box, Button, Heading, VStack } from '@chakra-ui/react'
import React from 'react'

const Sidebar: React.FC = () => {
	return (
		<VStack alignItems='start'>
			<Heading size='lg' alignSelf='center'>
				Categories
			</Heading>
			<VStack alignItems='start'>
				<Box>
					<Button leftIcon={<PhoneIcon />}>categoryItem</Button>
				</Box>

				<Box>
					<Button leftIcon={<PhoneIcon />}>categoryItem</Button>
				</Box>

				<Box>
					<Button leftIcon={<PhoneIcon />}>categoryItem</Button>
				</Box>

				<Box>
					<Button leftIcon={<PhoneIcon />}>categoryItem</Button>
				</Box>

				<Box>
					<Button leftIcon={<PhoneIcon />}>categoryItem</Button>
				</Box>

				<Box>
					<Button leftIcon={<PhoneIcon />}>categoryItem</Button>
				</Box>

				<Box>
					<Button leftIcon={<PhoneIcon />}>categoryItem</Button>
				</Box>

				<Box>
					<Button leftIcon={<PhoneIcon />}>categoryItem</Button>
				</Box>
			</VStack>
		</VStack>
	)
}

export default Sidebar
