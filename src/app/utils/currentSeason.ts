export const currentSeason = () => {
	let currentMounth = new Date().getMonth() + 1;


	const seasons = ["winter", "spring", "summer", "autumn"]
	return seasons[Math.ceil(2 / 4)]
}