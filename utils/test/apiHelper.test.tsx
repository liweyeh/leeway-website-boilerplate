/**
 * Unit tests for api helpers
 * @author Liwei Yeh <liwei.yeh@adasasistemas.com>
 */

// Library
import { useEffect, useState } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { useAxios } from '@utils';
import { ApiStatus, AxiosParams } from '@/types';

const UseAxioComponent = ({ request }: { request: AxiosParams }) => {
	const { data, status, error } = useAxios(request);
	const [resovled, setResolved] = useState(false);

	useEffect(() => {
		if (status != ApiStatus.PENDING) {
			setResolved(true);
		}

		return () => {
			setResolved(false);
		};
	}, [status]);

	return (
		<div>
			<div>{`Resolved: ${resovled.toString()}`}</div>
			<div>{`Data: ${JSON.stringify(data)}`}</div>
			<div>{`Status: ${status}`}</div>
			<div>{`Error: ${error}`}</div>
		</div>
	);
};

const TEST_URL = 'https://jsonplaceholder.typicode.com';

describe.each([
	{
		id: 1,
		request: {
			method: 'POST',
			url: `${TEST_URL}/posts`,
			headers: {
				accept: '*/*',
			},
			data: {
				userId: 1,
				id: 101,
				title: 'title',
				body: 'Sample text',
			},
		},
		expected: {
			data: {
				userId: 1,
				id: 101,
				title: 'title',
				body: 'Sample text',
			},
			status: 'fulfilled',
			error: null,
		},
	},
	{
		id: 2,
		request: {
			method: 'GET',
			url: `${TEST_URL}/todos/1`,
			headers: {
				accept: '*/*',
			},
		},
		expected: {
			data: {
				userId: 1,
				id: 1,
				title: 'delectus aut autem',
				completed: false,
			},
			status: 'fulfilled',
			error: null,
		},
	},
	{
		id: 2,
		request: {
			method: 'GET',
			url: `${TEST_URL}/todosd/1`,
			headers: {
				accept: '*/*',
			},
		},
		expected: {
			data: null,
			status: 'error',
			error: 404,
		},
	},
])('useAxios test', ({ id, request, expected }) => {
	test(`useAxios - ${id}`, async () => {
		render(<UseAxioComponent request={request} />);
		await waitFor(() => expect(screen.getByText('Resolved: true')).toBeInTheDocument(), {
			timeout: 2000,
		});
		const data = screen.getByText(/Data:/i);
		const status = await screen.findByText(/Status:/i);
		const error = screen.getByText(/Error:/i);

		expect(data).toHaveTextContent(`Data: ${JSON.stringify(expected.data)}`);
		expect(status).toHaveTextContent(`Status: ${expected.status}`);
		expect(error).toHaveTextContent(`Error: ${expected.error}`);
	});
});
