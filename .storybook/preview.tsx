import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { GlobalStyles, theme } from '../src/styles'
import { ThemeProvider } from "styled-components";

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export const decorators = [
	withThemeFromJSXProvider({
		themes: {
			light: theme,
		},
		defaultTheme: 'light',
		Provider: ThemeProvider,
		GlobalStyles,
	}),
];

export default preview;
