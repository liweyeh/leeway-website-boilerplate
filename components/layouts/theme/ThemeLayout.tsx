/**
 * Theme layout
 * @author Liwei Yeh <liwei.yeh@adasasistemas.com>
 */

// Library
import { useContext } from 'react';

// Context
import { ThemeContext } from '@/context';

export const ThemeLayout = ({ children }: { children: React.ReactNode }) => {
	const { theme } = useContext(ThemeContext);

	return <div className={`theme-${theme}`}>{children}</div>;
};

export default ThemeLayout;
