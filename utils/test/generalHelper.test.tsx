/**
 * Unit tests for general helpers
 * @author Liwei Yeh <liwei.yeh@adasasistemas.com>
 */

// Library
import { formatNumber } from '@utils';

describe.each([
	{ id: 1, value: '3.9000000000', decimals: 2, expected: '3.90' },
	{ id: 2, value: '3.9', decimals: 2, expected: '3.90' },
	{ id: 3, value: '3', decimals: 2, expected: '3.00' },
	{ id: 4, value: 'asdas', decimals: 2, expected: '' },
	{ id: 5, value: undefined, decimals: 2, expected: '' },
	{ id: 6, value: '3.9', decimals: 0, expected: '4' },
	{ id: 7, value: '3.1', decimals: 0, expected: '3' },
	{ id: 8, value: '3.9', decimals: 4, expected: '3.9000' },
])('formatNumber test', ({ id, value, decimals, expected }) => {
	test(`formatNumber - ${id} - ${value} -> ${expected}`, () => {
		expect(formatNumber(value as string, decimals)).toBe(expected);
	});
});
