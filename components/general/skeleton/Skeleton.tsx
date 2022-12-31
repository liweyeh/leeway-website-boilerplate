/**
 * Skeleton component
 * This serves as placeholder whilst the data is loading
 * @author Carlos López Rodriguez <clopez@adasasistemas.com>
 */

import styles from './skeleton.module.scss';

interface SkeletonProps {
	customStyles?: string;
}

export const Skeleton = ({ customStyles }: SkeletonProps) => {
	return <div className={[styles.skeleton, customStyles].join(' ')} />;
};
