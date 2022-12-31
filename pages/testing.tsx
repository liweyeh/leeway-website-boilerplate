/* eslint-disable @typescript-eslint/no-unused-vars */
// Library
import { useEffect } from 'react';
import Head from 'next/head';

// Component
import { Modal, Skeleton, Status, TextField, NavLink, Accordion, Flow } from '@/components';
import { useAxios } from '@/utils';
import { CONSTANT } from '@/constants';
import pathData from '../components/general/flow/sampleData/path.json';
import poiData from '../components/general/flow/sampleData/POI.json';
import styles from './pageStyles/testing.module.scss';

export default function Testing() {
	const request = {
		method: 'POST',
		url: `${CONSTANT.API_BASE_URL}/posts`,
		headers: {
			accept: '*/*',
		},
		data: {
			userId: 1,
			id: 19392,
			title: 'title',
			body: 'Sample text',
		},
	};

	const { data, status, error } = useAxios(request);

	return (
		<>
			<Head>
				<title>Adasa Boilerplate - Sample</title>
				<meta name="description" content="SEO HERE" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main style={{ width: '100vw', height: '100vh' }}>
				{/* <Modal>HI</Modal> */}
				{/* <div style={{ width: '400px', height: '150px' }}>
					<Skeleton />
				</div> */}
				{/* <Status show status="success" msg="some error" /> */}
				{/* <TextField customStyles={styles.text} status="valid" type="textarea" /> */}
				{/* <NavLink href="https://www.qld.gov.au/legal/privacy" isExternal>
					External
				</NavLink> */}
				{/* <Accordion customStyles={styles.accordion} headerContent={<h1>2</h1>}>
					<p>2</p>
				</Accordion> */}
				{/* <Flow
					title={{ title: 'I am the title', x: 100, y: 20 }}
					viewBox={{ width: 600, height: 600 }}
					pathData={pathData}
					POIData={poiData}
				/> */}
				<>
					<h2>Request Example:</h2>
					<p>Status:{status}</p>
					<p>Data: {JSON.stringify(data)}</p>
					<p>Error:{error}</p>
				</>
			</main>
		</>
	);
}
