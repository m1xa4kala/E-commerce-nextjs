'use server'
import { getUserByEmail } from '@/data/user'
import bcrypt from 'bcrypt'
import { redirect } from 'next/navigation'
import { SignInDTO } from './types'

async function isCorrectPassword(password: string, hash: string) {
	try {
		const isCorrect = await bcrypt.compare(password, hash)
		return isCorrect
	} catch (error) {
		return null
	}
}

export async function login(formData: SignInDTO) {
	try {
		const { email, password, remember } = formData
		const user = await getUserByEmail(email)
		if (!user) {
			return { error: 'There is no user with this email' }
		}
		if (!(await isCorrectPassword(password, user.password))) {
			return { error: 'Incorrect password' }
		}
	} catch (err) {
		return { error: 'Something went wrong' }
	}
	redirect('/')
}
