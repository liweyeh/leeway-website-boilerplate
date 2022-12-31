/**
 * Generic helpers, such as type formatting, number formatting ... etc
 * @author Liwei Yeh <liwei.yeh@adasasistemas.com>
 */

// Library
import { isNil } from 'lodash';

/**
 * format number for display
 * @param value string that represent number
 * @param decimals number of decimals to format
 * @returns {string} formatted number
 */
export const formatNumber = (value: string, decimals = 2) => {
	if (isNil(value) || isNaN(parseFloat(value))) return '';

	return parseFloat(value).toFixed(decimals);
};
