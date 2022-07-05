import { useEffect, useRef } from "react";
import { usePreviousValue } from "./usePreviousValue";

/**
 * This hook allows us to scroll a desired element into view.
 * The current use-case for this is to scroll to the top of the calibration
 * table when changing pages.
 *
 * @param {number} [dependencies] The dependencies to pass to the useEffect here (Currently just a number)
 * @returns {RefObject<HTMLDivElement | null>} The ref to assign to an HTML div element to be scrolled to
 */

export const useScrollIntoView = (dependencies: number) => {
	const prevDependencies = usePreviousValue(dependencies);
	const ref = useRef<null | HTMLDivElement>(null);

	useEffect(() => {
		const dependenciesHaveChanged = dependencies !== prevDependencies;

		// If 0 gets passed it equates to false and will skip. something to keep in mind
		if (!prevDependencies || !ref.current || !dependenciesHaveChanged) {
			return;
		}

		ref.current && ref.current.scrollIntoView();
	}, [prevDependencies, dependencies, ref]);

	return ref;
};
