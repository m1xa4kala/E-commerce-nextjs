'use server'
import { createUser, getUserByEmail, getUserByName } from '@/data/user'
import bcrypt from 'bcrypt'
import { redirect } from 'next/navigation'
import { SingUpDTO } from './types'

export async function registerUser(formData: SingUpDTO) {
	try {
		const { email, username, password, confirmPassword } = formData
		if (password !== confirmPassword) {
			return { error: 'Password mismatch' }
		}
		if (await getUserByEmail(email)) {
			return { error: 'This email has already been used' }
		}
		if (await getUserByName(username)) {
			return { error: 'This username has already been used' }
		}
		const salt = process.env.HASH_SALT || 10
		const hashedPassword = await bcrypt.hash(password, +salt)
		await createUser({ email, name: username, password: hashedPassword })
	} catch (err) {
		return { error: 'Something went wrong' }
	}
	redirect('/')
}
