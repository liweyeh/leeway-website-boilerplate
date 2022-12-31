export const BASE_URL = getBaseUrl();

/**
 * Application Constants
 */
export const CONSTANT = {
	API_BASE_URL: BASE_URL,
	/**
	 * `480` Maximum width of the screen to consider the UI as a mobile view
	 **/
	SCREEN_MOBILE: 480,
	/**
	 * `768` Maximum width of the screen to consider the UI as a tablet view
	 **/
	SCREEN_TABLET: 768,
	/**
	 * `992` Maximum width of the screen to consider the UI as a small desktop view
	 **/
	SCREEN_SM_DESKTOP: 1024,
	/**
	 * `1280` Maximum width of the screen to consider the UI as a medium desktop view
	 **/
	SCREEN_MD_DESKTOP: 1200,
	/** `landscape` Landscape mode, horizontal mode  */
	LANDSCAPE: 'landscape',
	/** `portrait` Portrait mode, Vertical mode */
	PORTRAIT: 'portrait',
};

function getBaseUrl() {
	return process.env.NEXT_PUBLIC_APP_BASE_URL ? process.env.NEXT_PUBLIC_APP_BASE_URL : '';
}
