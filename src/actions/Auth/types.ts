export type SingUpDTO = {
	email: string
	username: string
	password: string
	confirmPassword: string
}

export type SignInDTO = {
	email: string
	password: string
	remember: boolean
}
