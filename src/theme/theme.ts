import { extendTheme } from '@chakra-ui/react'
import { ButtonTheme } from './components/Button/Button'
import { HeadingTheme } from './components/Heading/Heading'

const colors = {
	primary: {
		50: '#F0FFF4',
		100: '#C6F6D5',
		200: '#9AE6B4',
		300: '#68D391',
		400: '#48BB78',
		500: '#38A169',
		600: '#2F855A',
		700: '#276749',
		800: '#22543D',
		900: '#1C4532',
	},
	error: {
		50: '#FFF5F5',
		100: '#FED7D7',
		200: '#FEB2B2',
		300: '#FC8181',
		400: '#F56565',
		500: '#E53E3E',
		600: '#C53030',
		700: '#9B2C2C',
		800: '#822727',
		900: '#63171B',
	},
}

export const theme = extendTheme({
	colors,
	components: {
		Button: ButtonTheme,
		Heading: HeadingTheme,
	},
})
