import type { MetricType } from 'web-vitals';

/**
 * web-vitals 6 renamed every `getX` to `onX` and dropped FID, which INP
 * replaced as a Core Web Vital, so the FID reporter has no successor to call.
 */
const reportWebVitals = (onPerfEntry?: (metric: MetricType) => void) => {
	if (onPerfEntry && onPerfEntry instanceof Function) {
		import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
			onCLS(onPerfEntry);
			onINP(onPerfEntry);
			onFCP(onPerfEntry);
			onLCP(onPerfEntry);
			onTTFB(onPerfEntry);
		});
	}
};

export default reportWebVitals;
