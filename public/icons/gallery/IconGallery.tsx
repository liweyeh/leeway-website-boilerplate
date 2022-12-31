import { Error, Success, Close } from '../index';
import styles from './icongallery.module.scss';

const icons = [
	{ Icon: Error, name: 'Error' },
	{ Icon: Success, name: 'Success' },
	{ Icon: Close, name: 'Close' },
];

export const IconGallery = () => {
	return (
		<div className={styles['icon-grid']}>
			{icons.map(({ Icon, name }, i) => (
				<div className={styles['icon-item']} key={i}>
					<Icon customStyles={styles['icon-img']} />
					<p>{name}</p>
				</div>
			))}
		</div>
	);
};
