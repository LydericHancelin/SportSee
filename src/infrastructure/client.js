import Activity from "../utils/class/Activity";
import AverageSessions from "../utils/class/AverageSessions";
import Default from "../utils/class/Default";
import Performances from "../utils/class/Performances";
import axios from "axios";

export class Client {



	async get(
		url
	) {
		return axios
			.get(`${url}`)
			.then(({ data }) => {
				return convertData(data.data, url)
			})
			.catch((error) => {
				// throw new Error(error);
				return undefined
			});
	}
}

const convertData = (data, url) => {
	if (url.includes("activity")) {

		return new Activity(data.userId, data.sessions)
	}
	else if (url.includes("average-sessions")) {

		return new AverageSessions(data.userId, data.sessions)
	}
	else if (url.includes("performance")) {

		return new Performances(data.userId, data.kind, data.data)
	}
	else {

		return new Default(data.id, data.userInfos, data.todayScore, data.keyData)
	}
}