
const express = require("express");
const moment = require("moment");
const app = express();
const port = process.env.PORT || 3000;

app.get("/api", (req, res) => {
	const slackName = "DevTheuri";
	const track = "backend";
	const currentDay = moment().format("dddd"); // Format the current day of the week
	const utcTime = moment().utc().format("YYYY-MM-DDTHH:mm:ss[Z]"); // Format the current UTC time

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

	res.json(responseJson);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
