const express = require("express");
const moment = require("moment");
const app = express();
const port = process.env.PORT || 3000;

app.get("/api", (req, res) => {
	const slackName = req.query.slack_name || "example_name";
	const track = req.query.track || "backend";
	const currentDay = moment().format("dddd"); // Format the current day of the week
	const utcTime = moment().utc().format("YYYY-MM-DDTHH:mm:ss[Z]"); // Format the current UTC time

	const responseJson = {
		slack_name: slackName,
		current_day: currentDay,
		utc_time: utcTime,
		track: track,
		github_file_url: "https://github.com/username/repo/blob/main/file_name.ext",
		github_repo_url: "https://github.com/username/repo",
		status_code: 200,
	};

	res.json(responseJson);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
