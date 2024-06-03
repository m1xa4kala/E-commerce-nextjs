import { loginUser } from '@/actions/Auth/Auth'
import { SignInDTO } from '@/actions/Auth/types'
import { Button, Checkbox, FormControl, FormLabel, HStack, Input, Spacer } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

const SignInForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignInDTO>()
	const onSubmit = handleSubmit(data => loginUser(data))
	return (
		<form onSubmit={onSubmit}>
			<FormControl mb={4}>
				<FormLabel>Email</FormLabel>
				<Input
					{...register('email', {
						required: { value: true, message: 'Enter your email' },
						pattern: { value: /^\S+@\S+$/i, message: 'Enter your email' },
					})}
					placeholder='email'
					borderColor={errors.email && 'red.400'}
					focusBorderColor={errors.email ? 'red.400' : 'green.400'}
				/>
			</FormControl>
			<FormControl mb={4}>
				<FormLabel>Password</FormLabel>
				<Input
					{...register('password', { required: { value: true, message: 'Enter your password' } })}
					placeholder='password'
					type='password'
					variant='outline'
					borderColor={errors.email && 'red.400'}
					focusBorderColor={errors.password ? 'red.400' : 'green.400'}
				/>
			</FormControl>
			<Button type='submit' w='100%' mb={4}>
				Login
			</Button>
			<HStack>
				<Checkbox {...register('remember', { value: true })} colorScheme='green'>
					Remember me
				</Checkbox>
				<Spacer />
				<Link href='/forgot-pass'>Forgot password</Link>
			</HStack>
		</form>
	)
}

export default SignInForm
