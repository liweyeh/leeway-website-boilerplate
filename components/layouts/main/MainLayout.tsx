/**
 * Main layout
 * @author Carlos Romera <cromera@adasasistemas.com>
 * @author Liwei Yeh <liwei.yeh@adasasistemas.com>
 */

// Library
import React from 'react';

// Components
import { Dropdown } from '@components';

// Types
import { LinkType } from '@/types';

// Styles
import styles from './mainLayout.module.scss';

export const links: LinkType[] = [
	{ href: '/', isExternal: false, displayName: 'Home' },
	{ href: '/theme', isExternal: false, displayName: 'Theme' },
	{ href: '/defaultError', isExternal: false, displayName: 'Default Error Page' },
	{ href: '/testing', isExternal: false, displayName: 'Testing Ground' },
	{
		href: 'https://www.qld.gov.au/legal/privacy',
		isExternal: true,
		displayName: 'External',
	},
];

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className={styles.container}>
			<div>
				<Dropdown menuOptions={links} customStyles={styles.menu}>
					<div className={styles['menu-icon']}></div>
					<div className={styles['menu-icon']}></div>
					<div className={styles['menu-icon']}></div>
				</Dropdown>
			</div>
			{children}
		</div>
	);
};

export default MainLayout;
