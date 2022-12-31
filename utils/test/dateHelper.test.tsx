/**
 * Unit tests for date helpers
 * @author Liwei Yeh <liwei.yeh@adasasistemas.com>
 */

// Library
import { convertTimeToDisplayFormat, sortDate, isValidDateString } from '@utils';

describe.each([
	{ id: 1, isoString: '2022-06-20T05:47:48.036Z', type: '', expected: '20/06/2022' },
	{ id: 2, isoString: '2022-06-20T05:47:48.036Z', type: 'date', expected: '20/06/2022' },
	{
		id: 3,
		isoString: '2022-06-20T05:47:48.036Z',
		type: 'datetime',
		expected: '20/06/2022 Mon, 03:47 PM',
	},
	{ id: 4, isoString: '20/06/2022', type: 'date', expected: '' },
	{ id: 5, isoString: 'Foo', type: 'date', expected: '' },
	{ id: 6, isoString: '', type: 'date', expected: '' },
])('convertTimeToDisplayFormat test', ({ id, isoString, type, expected }) => {
	test(`convertTimeToDisplayFormat - ${id} - ${isoString} -> ${expected}`, () => {
		if (type) {
			expect(convertTimeToDisplayFormat(isoString, type as 'date' | 'datetime')).toBe(expected);
		} else {
			expect(convertTimeToDisplayFormat(isoString)).toBe(expected);
		}
	});
});

describe.each([
	{
		id: 1,
		dateArray: ['2022-06-25T05:47:48.036Z', '2022-06-20T05:47:48.036Z', '2022-06-21T05:47:48.036Z'],
		field: '',
		order: 'desc',
		expected: ['2022-06-25T05:47:48.036Z', '2022-06-21T05:47:48.036Z', '2022-06-20T05:47:48.036Z'],
	},
	{
		id: 2,
		dateArray: [
			{ published: '2022-06-25T05:47:48.036Z' },
			{ published: '2022-06-20T05:47:48.036Z' },
			{ published: '2022-06-21T05:47:48.036Z' },
		],
		field: 'published',
		order: 'desc',
		expected: [
			{ published: '2022-06-25T05:47:48.036Z' },
			{ published: '2022-06-21T05:47:48.036Z' },
			{ published: '2022-06-20T05:47:48.036Z' },
		],
	},
	{
		id: 3,
		dateArray: [
			{ published: '2022-06-25T05:47:48.036Z' },
			{ published: '2022-06-20T05:47:48.036Z' },
			{ published: '2022-06-21T05:47:48.036Z' },
		],
		field: 'published',
		order: 'asc',
		expected: [
			{ published: '2022-06-20T05:47:48.036Z' },
			{ published: '2022-06-21T05:47:48.036Z' },
			{ published: '2022-06-25T05:47:48.036Z' },
		],
	},
	{
		id: 4,
		dateArray: [{ published: '2022-06-25T05:47:48.036Z' }],
		field: 'published',
		order: 'asc',
		expected: [{ published: '2022-06-25T05:47:48.036Z' }],
	},
	{
		id: 5,
		dateArray: [],
		field: 'published',
		order: 'asc',
		expected: [],
	},
	{
		id: 6,
		dateArray: ['a', 'b'],
		field: '',
		order: 'asc',
		expected: ['a', 'b'],
	},
])('sortDate test', ({ id, dateArray, field, order, expected }) => {
	test(`sortDate - ${id} - ${dateArray} -> ${expected}`, () => {
		expect(sortDate(dateArray, field, order as 'desc' | 'asc')).toStrictEqual(expected);
	});
});

describe.each([
	{
		id: 1,
		date: '2022-06-20T05:47:48.036Z',
		expected: true,
	},
	{
		id: 2,
		date: '2022',
		expected: true,
	},
	{
		id: 3,
		date: 'asd',
		expected: false,
	},
	{
		id: 4,
		date: '',
		expected: false,
	},
])('isValidDateString test', ({ id, date, expected }) => {
	test(`isValidDateString - ${id} - ${date} -> ${expected}`, () => {
		expect(isValidDateString(date)).toBe(expected);
	});
});
