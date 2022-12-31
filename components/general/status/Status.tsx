/**
 * Status component
 * @author Liwei Yeh <liwei.yeh@adasasistemas.com>
 */
// Library
import { capitalize } from 'lodash';

// CSS Style for this module
import styles from './status.module.scss';

// Component
import { Button } from '@general';

// Public content
import { Error, Success, Close } from '@public';

/**
 * Interface for Status props
 */
interface StatusProps {
	/** Is status visible */
	show: boolean;
	/** Callback when status is going to close */
	onClose: () => void;
	/** Text to be displayed in status */
	msg: string;
	/** Status type, error or success */
	status: 'error' | 'success';
}

/**
 * Status that indicate what's the result of the user's interaction/request
 * @param {StatusProps} Prop
 * @returns  a styled block container with text
 */
export const Status = ({ onClose, msg, show, status }: StatusProps) => {
	return (
		<>
			<div className={[styles.status, !show && styles['status-hide']].join(' ')}>
				<Button
					onClick={onClose}
					type="default"
					ariaLabel="close"
					customStyles={styles['status-close']}
				>
					<Close customStyles={styles['status-close-icon']} />
				</Button>
				<div className={styles[`status-${status}-rect`]} />
				<div className={styles['status-container']}>
					{status === 'error' ? (
						<Error customStyles={styles['status-error']} />
					) : (
						<Success customStyles={styles['status-success']} />
					)}
					<div className={styles['status-text']}>
						<p>{capitalize(status)}</p>
						<p>{msg}</p>
					</div>
				</div>
			</div>
		</>
	);
};
