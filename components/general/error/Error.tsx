import styles from './error.module.scss';
interface ErrorProps {
	statusCode?: string;
}

const getError = (status?: string) => {
	switch (status) {
		case '404':
			return {
				code: '404',
				title: 'Error 404',
				subtext: 'There was an error with your request.',
			};
		case '500':
			return {
				code: '500',
				title: 'Internal server error',
				subtext: 'The server encountered an error and was unable to complete your request',
			};
		default:
			return {
				code: '???',
				title: 'Unknown error',
				subtext: 'An unknown error has occurred, Try refreshing the page or try again later.',
			};
	}
};

export const Error = ({ statusCode }: ErrorProps) => {
	const curErr = getError(statusCode);
	return (
		<div className={styles.error}>
			<div className={styles['error-icon']}>
				<div className={styles['error-icon-header']}>
					<div className={styles['error-icon-circle']} />
					<div className={styles['error-icon-circle']} />
					<div className={styles['error-icon-circle']} />
					<div className={styles['error-icon-triangle']}>
						<p className={styles['error-icon-triangle-text']}>!</p>
					</div>
				</div>
				<div className={styles['error-icon-text']}>
					<p>{curErr.code}</p>
				</div>
			</div>
			<p className={styles['error-title']}>{curErr.title}</p>
			<p className={styles['error-subtext']}>{curErr.subtext}</p>
		</div>
	);
};
