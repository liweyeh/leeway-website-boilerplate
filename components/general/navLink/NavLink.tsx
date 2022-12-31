/**
 * Navigation link component for internal routing
 * @author Liwei Yeh <liwei.yeh@adasasistemas.com>
 */
// Library
import { useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { isEmpty } from 'lodash';

// Components
import { Modal, Button } from '@components';

// CSS Style for this module
import styles from './navLink.module.scss';

/**
 * Interface for NavLink props
 */
interface NavLinkProps {
	/**
	 * Display name or element
	 */
	children: React.ReactNode;
	/**
	 * External link
	 */
	isExternal?: boolean;
	/**
	 * On click
	 */
	onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
	/**
	 * Desitnation of the anchor
	 */
	href: string;
}
/**
 * The NavLink component allows you to easily customize anchor elements
 * @param {NavLinkProps} Prop
 * @returns  a styled NavLink
 */
export const NavLink = ({
	href,
	children,
	isExternal = false,
	onClick = () => {
		return;
	},
}: NavLinkProps) => {
	const router = useRouter();
	const isActive = !isEmpty(router) && router.pathname === href;
	const linkRef = useRef<HTMLAnchorElement>(null);
	const [openModal, setOpenModal] = useState<boolean>(false);

	const clickHandle = () => {
		linkRef?.current?.click();
	};

	return (
		<>
			{isActive && <span className={styles['visually-hidden']}>Current page: </span>}
			{isExternal ? (
				<a
					aria-current={isActive}
					onClick={() => setOpenModal(true)}
					target="_blank"
					rel="noreferrer"
					className={styles['link']}
				>
					{children}
				</a>
			) : (
				<Link href={href} onClick={onClick}>
					{children}
				</Link>
			)}
			<Modal
				open={openModal}
				handleClose={() => setOpenModal(false)}
				customModalStyle={styles['nav-link-modal']}
				customBackdropStyle={styles['nav-link-modal-backdrop']}
			>
				<h4>You are about to exit the website.</h4>
				<h4>Are you sure ?</h4>
				<div className={styles['modal-buttons']}>
					<Button customStyles={styles['modal-button']} onClick={() => setOpenModal(false)}>
						<p>No</p>
					</Button>
					<Button onClick={clickHandle} customStyles={styles['modal-button']}>
						<a
							href={href}
							ref={linkRef}
							target="_blank"
							rel="noreferrer"
							className={styles['link']}
							onClick={onClick}
						>
							<p>Yes</p>
						</a>
					</Button>
				</div>
			</Modal>
		</>
	);
};
