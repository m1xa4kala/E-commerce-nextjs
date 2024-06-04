'use client'
import { registerUser } from '@/actions/Auth/register'
import { SingUpDTO } from '@/actions/Auth/types'
import { Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const SignUpForm: React.FC = () => {
	const [error, setError] = useState<string>('')
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SingUpDTO>()
	const onSubmit = handleSubmit(fromData => {
		setError('')
		registerUser(fromData).then(res => {
			if (res?.error) {
				setError(res.error)
			}
		})
	})
	return (
		<form onSubmit={onSubmit}>
			<FormControl mb={4}>
				<FormLabel>Email</FormLabel>
				<Input
					{...register('email', {
						required: { value: true, message: 'Email is required field' },
						pattern: { value: /^\S+@\S+$/i, message: 'Enter your email' },
					})}
					placeholder='email'
					borderColor={errors.email && 'red.400'}
					focusBorderColor={errors.email ? 'red.400' : 'green.400'}
				/>
			</FormControl>
			<FormControl mb={4}>
				<FormLabel>Username</FormLabel>
				<Input
					{...register('username', {
						maxLength: { value: 10, message: 'Max username length is 10' },
					})}
					placeholder='username'
					focusBorderColor='green.400'
				/>
			</FormControl>
			<FormControl mb={4}>
				<FormLabel>Password</FormLabel>
				<Input
					{...register('password', {
						required: { value: true, message: 'Create a password' },
						minLength: { value: 6, message: 'Minimum password length is 6' },
					})}
					placeholder='password'
					type='password'
					borderColor={errors.password && 'red.400'}
					focusBorderColor={errors.password ? 'red.400' : 'green.400'}
				/>
			</FormControl>
			<FormControl mb={4}>
				<FormLabel>Confirm password</FormLabel>
				<Input
					{...register('confirmPassword', {
						required: { value: true, message: 'Confirm your password' },
					})}
					placeholder='your password'
					type='password'
					borderColor={errors.confirmPassword && 'red.400'}
					focusBorderColor={errors.confirmPassword ? 'red.400' : 'green.400'}
				/>
			</FormControl>
			{error && (
				<Text bgColor='error.400' color='white' mb={4} p={4} borderRadius={10}>
					{error}
				</Text>
			)}
			<Button type='submit' colorScheme='green' bg='green.300' w='100%' mb={4} _hover={{ bg: 'green.400' }}>
				Register
			</Button>
		</form>
	)
}

export default SignUpForm
