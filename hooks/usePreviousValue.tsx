import React from "react";

/**
 * To be used within a useEffect to compare two sets of
 * dependencies against one another
 *
 * @param {T} value The value being checked
 */
export function usePreviousValue<T>(value: T): T {
	// The ref object is a generic container whose current property is mutable ...
	// ... and can hold any value, similar to an instance property on a class
	const ref: any = React.useRef<T>();
	// Store current value in ref
	React.useEffect(() => {
		ref.current = value;
	}, [value]); // Only re-run if value changes
	// Return previous value (happens before update in useEffect above)
	return ref.current;
}
