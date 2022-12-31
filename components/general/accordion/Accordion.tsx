/**
 * Accordion component
 * @author Carlos Romera <cromera@adasasistemas.com>
 * @author Liwei Yeh <liwei.yeh@adasasistemas.com>
 */

// Library
import React, { useState, MouseEventHandler } from 'react';

// CSS Style for this module
import styles from './accordion.module.scss';

/**
 * Interface for Accordion props
 */
interface AccordionProps {
	/** Content to be displayed in the header */
	headerContent: React.ReactNode;
	/** Content to be displayed in the body */
	children: React.ReactNode;
	/** Disable the accordion to prevent click*/
	disabled?: boolean;
	/** Custom Styles */
	customStyles?: string;
}

/**
 * Accordion generic component
 * @param {AccordionProps} Prop
 * @returns  an accordion that has a header and body and can be toggled to show/hide body
 */
export const Accordion = ({ headerContent, children, disabled, customStyles }: AccordionProps) => {
	const [active, setActive] = useState(false);

	const toggleAccordion:
		| MouseEventHandler<HTMLButtonElement | HTMLDivElement>
		| undefined = event => {
		event.stopPropagation();
		setActive(prevState => !prevState);
	};

	return (
		<div className={`${styles[`accordion`]} ${customStyles}`}>
			<div
				className={`
              ${styles[`accordion-title`]}
              ${styles[`accordion-title-${active ? 'show' : 'hidden'}`]}
            `}
				onClick={!disabled ? toggleAccordion : undefined}
			>
				<div className={styles[`accordion-title-content`]}>{headerContent}</div>
				<button
					onClick={!disabled ? toggleAccordion : undefined}
					className={styles[`accordion-title-button`]}
				>
					<div
						className={[
							styles['accordion-title-button-arrow'],
							styles[`accordion-title-button-arrow-${active ? 'show' : 'collapse'}`],
						].join(' ')}
					/>
				</button>
			</div>
			<div
				className={`
            ${styles[`accordion-body`]} 
            ${styles[`accordion-body-${active ? 'show' : 'hidden'}`]}
          `}
			>
				{children}
			</div>
		</div>
	);
};
