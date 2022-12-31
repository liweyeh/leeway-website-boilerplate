import React, { useState, useEffect } from 'react';
import { NavLink, Button } from '@components';
import { LinkType } from '@types';
import styles from './dropdown.module.scss';

interface DropdownProps {
	children: React.ReactNode;
	menuOptions: LinkType[];
	customStyles?: string;
}

export const Dropdown = ({ children, menuOptions, customStyles }: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const closeSelect = (e: MouseEvent) => {
			if (e.defaultPrevented) return;
			setIsOpen(false);
		};
		document.addEventListener('click', closeSelect);

		return () => {
			document.removeEventListener('click', closeSelect);
		};
	}, []);

	return (
		<div data-cy="dropdown" className={[styles['dropdown'], customStyles].join(' ')}>
			<Button
				customStyles={styles['dropdown-button']}
				aria-label="dropdown menu"
				onClick={e => {
					e.stopPropagation();
					setIsOpen(prev => !prev);
				}}
			>
				{children}
			</Button>
			<div
				onClick={e => {
					e.preventDefault();
				}}
				className={[styles['dropdown-menu'], !isOpen && styles['dropdown-menu-hidden']].join(' ')}
			>
				{menuOptions.map((option, ind) => {
					const { displayName, href, isExternal } = option;
					return (
						<NavLink
							key={`${displayName} - ${ind}`}
							href={href}
							isExternal={isExternal}
							onClick={() => {
								setIsOpen(false);
							}}
						>
							<p>{displayName}</p>
						</NavLink>
					);
				})}
			</div>
		</div>
	);
};
