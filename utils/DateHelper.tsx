/**
 * DateHelper is used for processing date string for sending API request or displaying on website
 * Expected date format stored in DB: ISO
 * Note: ISO is UTC+0
 * @author Liwei Yeh <liwei.yeh@adasasistemas.com>
 */

// Library
import { parseISO, compareDesc, compareAsc } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

const BRISBANE_TIMEZONE = 'Australia/Brisbane';
/**
 * getCurrentDateTime generates an ISO date string that is current
 * all users no matter the time zone will generate the same value
 * @param none
 * @returns  current time ISO date string
 */
export const getCurrentDateTime = () => {
	return new Date().toISOString();
};

/**
 * check whether iso date string is valid
 * @param {string} date ISO datestring
 * @returns  boolean
 */
export const isValidDateString = (date: string) => {
	const res = parseISO(date);
	if (!date || typeof date !== 'string' || res.toString() === 'Invalid Date') return false;

	return true;
};

/**
 * convertTimeToDisplayFormat takes in ISO string and generates user friendly date format
 * @param {string} isoString: ISO date strign
 * @param {'date' | 'datetime' | 'time'} type: the time format that date will be displayed in
 * @returns {string} formatted date
 */
export const convertTimeToDisplayFormat = (
	isoString: string,
	type: 'date' | 'datetime' = 'date',
) => {
	if (!isValidDateString(isoString)) return '';

	const formatObj = {
		date: 'dd/MM/yyyy',
		datetime: 'dd/MM/yyyy E, hh:mm a',
	};

	try {
		const parsedTime = parseISO(isoString);
		const formattedTime = formatInTimeZone(parsedTime, BRISBANE_TIMEZONE, formatObj[type]);
		return formattedTime;
	} catch (e) {
		return '';
	}
};

/**
 * sortDate sort the date of the given array
 * @param {Array<unknown>} dateArray: the array with date string that wish to be sorted
 * @param {Array<unknown>} dateFieldName: if the array is object, this is field name of the object which is the date
 * @param {Array<unknown>} dateOrder: sort order
 * @returns  sorted array based on given order
 */
export const sortDate = (
	dateArray: Array<unknown>,
	dateFieldName: string,
	dateOrder: 'desc' | 'asc',
) => {
	if (!dateArray || !Array.isArray(dateArray)) return [];

	const sorted = dateArray.sort((a, b) => {
		const date1 = new Date(dateFieldName ? a[dateFieldName] : a);
		const date2 = new Date(dateFieldName ? b[dateFieldName] : b);
		if (dateOrder === 'desc') {
			return compareDesc(new Date(date1), new Date(date2));
		} else {
			return compareAsc(new Date(date1), new Date(date2));
		}
	});

	return sorted;
};
