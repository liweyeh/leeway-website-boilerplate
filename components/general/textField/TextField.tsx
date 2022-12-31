/**
 * TextField component
 * @author Liwei Yeh <liwei.yeh@adasasistemas.com>
 */

// Library
import { debounce } from 'lodash';

// CSS Style for this module
import styles from './textField.module.scss';

/**
 * Interface for TextField props
 */
interface TextFieldProps {
	/**
	 * Custom styles
	 */
	customStyles?: string;
	/**
	 * Preset type for the html input tag
	 */
	type?: 'text' | 'textarea';
	/**
	 * label of the input element
	 */
	label?: string;
	/**
	 * Default text that is displayed within the field
	 */
	placeholder?: string;
	/**
	 * Msg to be displayed when the status is error
	 */
	errorMsg?: string;
	/**
	 * String for determining whether a error should be displayed
	 */
	status?: 'valid' | 'error';
	/**
	 * Number for determining the text limit input
	 */
	maxLength?: number;
	/**
	 * onChange function for keeping track field value
	 * debounce is built in
	 */
	handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	/**
	 * default value for edit mode
	 */
	defaultValue?: string;
}

/**
 * Text fields let users enter and edit text.
 * @param {TextFieldProps} Prop
 * @returns  an styled  input element
 */
export const TextField = ({
	customStyles,
	type = 'text',
	label = '',
	placeholder = 'Please input a new value',
	errorMsg = 'Please fill up the field',
	status = 'valid',
	maxLength,
	handleChange = () => {
		return;
	},
	defaultValue = '',
}: TextFieldProps) => {
	const TEXTAREA = 'textarea';
	const onType = () => {
		return debounce(e => handleChange(e), 10);
	};
	return (
		<div className={[styles.container, customStyles].join(' ')}>
			{label && (
				<label htmlFor={label}>
					<p>{label}</p>
				</label>
			)}
			{type === TEXTAREA ? (
				<textarea
					className={[styles.textArea, styles[`textArea-${status}`]].join(' ')}
					placeholder={placeholder}
					onChange={onType()}
				/>
			) : (
				<input
					name={label}
					className={[styles.textField, styles[`textField-${status}`]].join(' ')}
					type={type}
					placeholder={placeholder}
					defaultValue={defaultValue}
					onChange={onType()}
					maxLength={maxLength ? maxLength : undefined}
				/>
			)}
			<p
				className={[styles['error-msg'], status !== 'error' && styles['error-msg-hide']].join(' ')}
			>
				{errorMsg}
			</p>
		</div>
	);
};
