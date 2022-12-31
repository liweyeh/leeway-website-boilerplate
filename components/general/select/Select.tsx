/**
 * select component
 * @author Liwei Yeh <liwei.yeh@adasasistemas.com>
 */

// Library
import { useState, useEffect } from 'react';

// CSS Style for this module
import styles from './select.module.scss';

interface SelectProps {
	/** Custom styling  */
	customStyles?: string;
	/** Label of the select list  */
	label?: string;
	/** Select options of the select list  */
	options?: string[];
	/** Is there an error  */
	error?: boolean;
	/** Default text that is displayed within the field */
	placeholder?: string;
	/** Msg to be displayed when the status is error */
	errorMsg?: string;
	/**
	 * onChange function for keeping track field value
	 * debounce is built in
	 */
	handleChange?: (value: string) => void;
}

// TODO: replace div tag with semantic HTML
/**
 * A dropdown list
 * @param {SelectProps} Prop
 * @returns  A dropdown list
 */
export const Select = ({
	customStyles,
	label = '',
	options = [],
	error = false,
	placeholder = 'Please select a value',
	errorMsg = 'This field cannot be empty',
	handleChange = () => {
		return;
	},
}: SelectProps) => {
	const [opened, setOpened] = useState<boolean>(false);
	const [selected, setSelected] = useState<string>();
	const [clicked, setClicked] = useState<boolean>(false);

	useEffect(() => {
		const closeSelect = () => {
			setOpened(false);
		};
		document.addEventListener('click', closeSelect);

		return () => {
			document.removeEventListener('click', closeSelect);
		};
	}, []);
	return (
		<div className={[styles.select, customStyles].join(' ')}>
			<div className={styles[`select-field`]}>
				{label && (
					<label className={styles[`select-name`]}>
						<p>{label}</p>
					</label>
				)}
				<div
					className={[
						styles[`select-container`],
						!clicked && styles[`select-container-default`],
						opened && styles[`select-container-opened`],
						error && styles['select-error'],
					].join(' ')}
					role={'listbox'}
					onClick={e => {
						e.stopPropagation();
						setOpened(prev => !prev);
					}}
				>
					<div className={styles[`select-container-text`]}>{selected ? selected : placeholder}</div>
				</div>
				{opened && (
					<div className={styles['select-list']}>
						{options.map((option, index) => (
							<div
								className={[
									styles['select-list-item'],
									option === selected && styles['select-list-item-selected'],
								].join(' ')}
								onClick={() => {
									handleChange(option);
									setSelected(option);
									setClicked(true);
								}}
								role="option"
								aria-selected={option === selected}
								key={index}
							>
								{option}
							</div>
						))}
					</div>
				)}
			</div>
			<div
				className={[styles['select-error-text'], !error && styles['select-error-text-hide']].join(
					' ',
				)}
			>
				{errorMsg}
			</div>
		</div>
	);
};
