import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const baseStyle = defineStyle({
	fontWeight: 'normal',
	borderRadius: 8,
})

const primary = defineStyle({
	bg: 'primary.300',
	color: 'white',
	_hover: { bg: 'primary.400' },
	_active: { shadow: 'md' },
})

const outline = defineStyle({
	bg: 'transparent',
	border: '2px solid white',
	color: 'white',
	_hover: { bg: 'white', color: 'primary.300', borderColor: 'white' },
	_active: { bg: 'white', shadow: 'md' },
})

export const ButtonTheme = defineStyleConfig({
	baseStyle,
	variants: { primary, outline },
	defaultProps: { variant: 'primary' },
})
