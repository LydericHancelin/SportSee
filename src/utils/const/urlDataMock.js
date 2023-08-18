export const urlDataMock = {
	userMainData(userId) {
		return `../data/${userId}/default.json`
	},
	userActivity(userId) {
		return `../data/${userId}/activity.json`
	},
	userSessions(userId) {
		return `../data/${userId}/average-sessions.json`
	},
	userPerformances(userId) {
		return `../data/${userId}/performances.json`
	}
}