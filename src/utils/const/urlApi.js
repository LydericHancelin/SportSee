export const urlApi = {
	userMainData(userId) {
		return `http://localhost:3000/user/${userId}`
	},
	userActivity(userId) {
		return `http://localhost:3000/user/${userId}/activity`
	},
	userSessions(userId) {
		return `http://localhost:3000/user/${userId}/average-sessions`
	},
	userPerformances(userId) {
		return `http://localhost:3000/user/${userId}/performance`
	}
}