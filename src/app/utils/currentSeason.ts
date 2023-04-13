import { CURRENT_MOUNTH } from "../constants/constanst"

export const currentSeason = () => {
	if (CURRENT_MOUNTH > 2 && CURRENT_MOUNTH < 6) return "spring"
	else if (CURRENT_MOUNTH > 5 && CURRENT_MOUNTH < 9) return "summer"
	else if (CURRENT_MOUNTH > 8 && CURRENT_MOUNTH < 12) return "autumn"
	else {return "winter"}
}