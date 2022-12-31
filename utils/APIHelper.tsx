/**
 * APIHelper is used for sending request to API endpoint
 * @author Liwei Yeh <liwei.yeh@adasasistemas.com>
 */

// Library
import { useState, useEffect } from 'react';
import { ApiStatus, AxiosParams } from '@/types';
import axios from 'axios';
import { isEmpty } from 'lodash';

export const useAxios = (axiosParams: AxiosParams) => {
	const [data, setData] = useState(null);
	const [status, setStatus] = useState<ApiStatus>(ApiStatus.UNINIT);
	const [error, setError] = useState<number | null>(null);

	const sendRequest = async (controller: AbortController) => {
		try {
			const res = await axios({ signal: controller.signal, ...axiosParams });
			if (res.data && !isEmpty(res.data)) {
				setStatus(ApiStatus.FULFILLED);
				setData(res.data);
			} else {
				setData(null);
				setStatus(ApiStatus.EMPTY);
			}
			setError(null);
		} catch (e) {
			if (!axios.isCancel(e)) {
				const errorCode = axios.isAxiosError(e) && e.response ? e.response.status : 500;
				setData(null);
				setStatus(ApiStatus.ERROR);
				setError(errorCode);
			}
		}
	};

	useEffect(() => {
		const controller = new AbortController();
		setStatus(ApiStatus.PENDING);
		setData(null);
		setError(null);
		sendRequest(controller);

		return () => {
			setStatus(ApiStatus.UNINIT);
			setData(null);
			setError(null);
			controller.abort();
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { data, status, error };
};
