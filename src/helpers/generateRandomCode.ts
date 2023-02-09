export function generateRandomCode(min: number = 2, max: number = 10): string {
	return Math.random().toString(36).substring(min, max).toUpperCase();
}
