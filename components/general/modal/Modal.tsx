/**
 * Modal component
 * @author Carlos Romera <cromera@adasasistemas.com>
 * @author Liwei Yeh <liwei.yeh@adasasistemas.com>
 */

// Library
import React, { useEffect, useState } from 'react';

// CSS Style for this module
import styles from './modal.module.scss';

// Assets
import { Close } from '@public';

// Component
import { Button } from '@general';

/**
 * Interface for Modal props
 */
interface ModalProps {
	/** Content to be displayed in the modal */
	children: React.ReactNode;
	/** Control whether the modal is opened */
	open?: boolean;
	/** Custom css styles for the modal */
	customModalStyle?: string;
	/** Custom css styles for the backdrop */
	customBackdropStyle?: string;
	/** Control whether the modal can be closed by clicking on backdrop or cancel button */
	closeable?: boolean;
	/** Callback when the modal is going to close */
	handleClose?: () => void;
}

/**
 * Modal generic component
 * @param {ModalProps} Prop
 * @returns  an modal that cover its parent element
 */
export const Modal = ({
	children,
	open = true,
	handleClose = () => {
		return;
	},
	customModalStyle,
	customBackdropStyle,
	closeable = true,
}: ModalProps) => {
	const [modalOpen, setModalOpen] = useState(open);

	useEffect(() => {
		setModalOpen(open);
	}, [open]);

	return modalOpen ? (
		<div className={styles.modal}>
			<div
				id={customBackdropStyle}
				className={`
				${styles[`backdrop`]}
				${styles[`backdrop${modalOpen && '-show'}`]}
			`}
				onClick={() => {
					if (closeable) {
						setModalOpen(false);
						handleClose();
					}
				}}
			/>
			<div
				id={customModalStyle}
				className={[styles[`wrapper`], styles[`wrapper${modalOpen && '-show'}`]].join(' ')}
				tabIndex={-1}
				role="dialog"
			>
				{closeable && (
					<Button
						ariaLabel="close"
						customStyles={styles['icon']}
						onClick={() => {
							setModalOpen(false);
							handleClose();
						}}
					>
						<Close customStyles={styles['icon-svg']} />
					</Button>
				)}
				{children}
			</div>
		</div>
	) : (
		<></>
	);
};
