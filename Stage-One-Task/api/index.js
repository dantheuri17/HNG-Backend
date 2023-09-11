const moment = require("moment");

module.exports = async (req, res) => {
	const slackName = "DevTheuri";
	const track = "Backend";
	const currentDay = moment().format("dddd");
	const utcTime = moment().utc().format("YYYY-MM-DDTHH:mm:ss[Z]");

	const responseJson = {
		slack_name: slackName,
		current_day: currentDay,
		utc_time: utcTime,
		track: track,
		github_file_url:
			"https://github.com/dantheuri17/HNG-Backend/blob/main/Stage-One-Task/index.js",
		github_repo_url: "https://github.com/dantheuri17/HNG-Backend",
		status_code: 200,
	};

	res.status(200).json(responseJson);
};
