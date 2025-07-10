/**
 * Checks if two numbers are close enough to each other within a given tolerance.
 * @param a First number
 * @param b Second number
 * @param epsilon Allowed difference (default: 0.001)
 * @returns true if the numbers are close enough, false otherwise
 */
export function areNumbersClose(
	a: number,
	b: number,
	epsilon: number,
): boolean {
	return Math.abs(a - b) <= epsilon;
}
