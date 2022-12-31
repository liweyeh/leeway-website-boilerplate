/**
 * Types for all data definition within this application or from external APIs
 * @author Liwei Yeh <liwei.yeh@adasasistemas.com>
 */

// Library
import React from 'react';
import { AxiosRequestHeaders } from 'axios';
/**
 * Expected props for all icon components within the icon folder
 */
export interface Icon {
	customStyles: string;
	handleClick?: (event: React.MouseEvent<SVGSVGElement>) => void;
}

/**
 * Enum for the different ApiStatus.
 * @readonly
 * @enum {string}
 */
export enum ApiStatus {
	/** The state before any API has started, default state */
	UNINIT = 'uninitiated',
	/** The API is called and no response has been given yet */
	PENDING = 'pending',
	/** The API return a non empty response */
	FULFILLED = 'fulfilled',
	/** The API return an empty response */
	EMPTY = 'empty',
	/** The API return an error */
	ERROR = 'error',
}

/**
 * Enum for the different themes
 * @readonly
 * @enum {string}
 */
export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
}

/**
 * Interface for navigational links
 */

export interface LinkType {
	href: string;
	isExternal: boolean;
	displayName: string;
}

/**
 * Interface for Axios request
 */
export interface AxiosParams {
	method: string;
	url: string;
	headers?: AxiosRequestHeaders;
	data?: object;
}
