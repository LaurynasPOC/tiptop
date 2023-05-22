import { useMediaQuery } from 'react-responsive';

export const smMobile = '(max-width: 24rem)'; //384px
export const mobile = '(max-width: 30rem)'; //480px
export const tablet = '(max-width: 48rem)'; //768px
export const smDesktop = '(max-width:64rem)'; //1024px
export const desktop = '(max-width: 75rem)'; //1200px

export const useQuery = (): {
	isSmMobile: boolean;
	isMobile: boolean;
	isTablet: boolean;
	isSmDesktop: boolean;
	isDesktop: boolean;
} => ({
	isSmMobile: useMediaQuery({ query: smMobile }),
	isMobile: useMediaQuery({ query: mobile }),
	isTablet: useMediaQuery({ query: tablet }),
	isSmDesktop: useMediaQuery({query:smDesktop}),
	isDesktop: useMediaQuery({ query: desktop }),
});
