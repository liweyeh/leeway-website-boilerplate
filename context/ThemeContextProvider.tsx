import { createContext, useState, Dispatch, SetStateAction } from 'react';

import { Theme } from '@types';

export interface ThemeContextState {
	theme: Theme;
	setTheme: Dispatch<SetStateAction<Theme>>;
}

/**
 * Default states
 */
const contextDefaultValues: ThemeContextState = {
	theme: Theme.LIGHT,
	setTheme: () => {
		// do nothing
	},
};

export const ThemeContext = createContext<ThemeContextState>(contextDefaultValues);

/**
 * Theme Context Provider.
 * Provide details about the current theme mode
 * @param {ReactDOM}
 * @returns {FunctionComponent}
 */
export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
