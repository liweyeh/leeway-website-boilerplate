/**
 * Button component
 * @author Liwei Yeh <liwei.yeh@adasasistemas.com>
 */

// Library
import React from 'react';

// CSS Style for this module
import styles from '../general/button/button.module.scss';

/**
 * Interface for Button props
 */
interface ButtonProps {
	/**
	 * Custom styles of the button
	 */
	customStyles?: string;
	/**
	 * preset type which has its own styling and functionality
	 */
	type?: 'primary' | 'secondary' | 'default' | 'disabled';
	/**
	 * preset size of the button
	 */
	size?: 'small' | 'large';
	/**
	 * Button contents
	 */
	children: React.ReactNode;
	/**
	 * Optional click handler
	 */
	onClick?: () => void;
	/**
	 * aria-label
	 */
	ariaLabel?: string;
}

/**
 * An styled general button
 * @param {ButtonProps} Prop
 * @returns  a button
 */
export const Placeholder = ({
	size,
	type = 'default',
	customStyles,
	children,
	ariaLabel = 'button',
	onClick,
}: ButtonProps) => {
	return (
		<button
			aria-label={ariaLabel}
			type="button"
			className={[styles[`button-${type}`], size && styles[`button-${size}`], customStyles].join(
				' ',
			)}
			onClick={
				type === 'disabled'
					? () => {
							return;
					  }
					: onClick
			}
		>
			{children}
		</button>
	);
};
