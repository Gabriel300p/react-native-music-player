import { colors, fontSize } from '@/constants/tokens'
import { StyleSheet } from 'react-native'

const defaultStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.background,
	},
	text: {
		color: colors.text,
		fontSize: fontSize.base,
	},
})

const utilsStyles = StyleSheet.create({
	primary: {
		color: colors.primary,
	},
	muted: {
		color: colors.textMuted,
	},
	icon: {
		color: colors.icon,
	},
})

export { defaultStyles, utilsStyles }
