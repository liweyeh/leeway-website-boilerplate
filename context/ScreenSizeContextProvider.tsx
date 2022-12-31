import { createContext, useEffect, useState } from 'react';

import { CONSTANT } from '@const';

const { SCREEN_MOBILE, SCREEN_TABLET, SCREEN_SM_DESKTOP, SCREEN_MD_DESKTOP, LANDSCAPE, PORTRAIT } =
	CONSTANT;

export interface ScreenSizeContextState {
	/** `true` if the browser is identified as a Mobile size screen (from value define in CONSTANT)  */
	isMobile: boolean;
	/** `true` if the browser is identified as a Tablet size screen (from value define in CONSTANT) */
	isTablet: boolean;
	/** `true` if the browser is identified as a small desktop size screen (from value define in CONSTANT) */
	isSmallDT: boolean;
	/** `true` if the browser is identified as a medium desktop size screen (from value define in CONSTANT) */
	isMediumDT: boolean;
	/** Orientation of the screen (landscape or portrait from value define in CONSTANT) */
	orientation: string;
}

/**
 * Default states
 */
const contextDefaultValues: ScreenSizeContextState = {
	isMobile: false,
	isTablet: false,
	isSmallDT: false,
	isMediumDT: false,
	orientation: PORTRAIT,
};

export const ScreenSizeContext = createContext<ScreenSizeContextState>(contextDefaultValues);

/**
 * Check if the size of the screen is smaller than the target size
 * @param target
 * @returns
 */
const checkScreenSize = (target: number) => {
	if (typeof window !== 'undefined') {
		return window.innerWidth <= target;
	} else {
		return false;
	}
};
/**
 * Check the orientation of the browser (using `window.orientation`)
 * @returns {string} `portrait` or `landscape`
 * @default portrait
 */
const checkOrientation = () => {
	if (typeof window !== 'undefined') {
		const degree = window.orientation;
		if (degree === -90 || degree === 90) {
			return LANDSCAPE;
		} else {
			return PORTRAIT;
		}
	} else {
		return PORTRAIT;
	}
};

/**
 * Screen Size Context Provider.
 * Provide details about the screen size (via multiple flags) and orientation
 * @param {ReactDOM}
 * @returns {FunctionComponent}
 */
export const ScreenSizeContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [isMobile, setMobile] = useState(checkScreenSize(SCREEN_MOBILE));
	const [isTablet, setTablet] = useState(checkScreenSize(SCREEN_TABLET));
	const [isSmallDT, setSmallDT] = useState(checkScreenSize(SCREEN_SM_DESKTOP));
	const [isMediumDT, setMediumDT] = useState(checkScreenSize(SCREEN_MD_DESKTOP));
	const [orientation, setOrientation] = useState(checkOrientation());

	useEffect(() => {
		viewportUpdate();
		window.addEventListener('orientationchange', orientationUpdate);
		window.addEventListener('resize', viewportUpdate);
		return () => {
			window.removeEventListener('resize', viewportUpdate);
			window.removeEventListener('orientationchange', orientationUpdate);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const viewportUpdate = () => {
		setMobile(checkScreenSize(SCREEN_MOBILE));
		setTablet(checkScreenSize(SCREEN_TABLET));
		setSmallDT(checkScreenSize(SCREEN_SM_DESKTOP));
		setMediumDT(checkScreenSize(SCREEN_MD_DESKTOP));
	};

	const orientationUpdate = () => {
		setOrientation(checkOrientation());
	};

	return (
		<ScreenSizeContext.Provider value={{ isMobile, isTablet, isSmallDT, isMediumDT, orientation }}>
			{children}
		</ScreenSizeContext.Provider>
	);
};
