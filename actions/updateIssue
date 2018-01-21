var request = require('request');

function main(params) {
  if (params.action == "opened" || params.action == "edited") {

    var gitAPI = "https://" + params.gitUsername + ":" + params.gitPersonalToken + "@api.github.com/projects/columns/";
    var _url = gitAPI + params.columnId + "/cards";

    var options = {
      url: _url,
      method: "POST",
      headers: {
        'User-agent': 'curl/7.54.0',
        'content-type': 'application/json',
        'Accept': 'application/vnd.github.inertia-preview+json'
      },
      body: JSON.stringify({content_id: params.issue.id, content_type: "Issue"})
    }
    
    if (params.issue.body.includes("- [x] a1") &&
        params.issue.body.includes("- [x] a2") &&
        params.issue.body.includes("- [x] a3") &&
        params.issue.body.includes("- [x] a4") &&
        params.issue.body.includes("- [x] a5") &&
        !params.issue.body.includes("- [x] c1") &&
        !params.issue.body.includes("- [x] c2") &&
        !params.issue.body.includes("- [x] c3") &&
        !params.issue.body.includes("- [x] c4") &&
        !params.issue.body.includes("- [x] c5")) {

      var labelsList = "";
      for (i in params.issue.labels) {
          labelsList = labelsList + params.issue.labels[i].name + " "
      };
      var jsonBody = {"username": "Incubator Bot", "text": "```New Pattern Proposal - Ready for Review\n" + params.issue.title + "\nIssue " + params.issue.number + ": " + params.issue.url + "\nLabels: " + labelsList + "\nAuthor: " + params.issue.user.login + "\n" + params.issue.updated_at + "```"};
      var slackOptions = {
        url: params.slackWebhook,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: jsonBody,
        json: true
      }

      request(slackOptions, function (error, response, body) {
        if (error) {
          console.log(error);
        }
        else {
          console.log(response);
        }
      });
    }

    if (params.issue.body.includes("- [x] c1") &&
        params.issue.body.includes("- [x] c2") &&
        params.issue.body.includes("- [x] c3") &&
        params.issue.body.includes("- [x] c4") &&
        params.issue.body.includes("- [x] c5")) {

      var labelsList = "";
      for (i in params.issue.labels) {
          labelsList = labelsList + params.issue.labels[i].name + " "
      };
var jsonBody = {"username": "Incubator Bot", "text": "```Pattern - Ready for Publication Review\n" + params.issue.title + "\nIssue " + params.issue.number + ": " + params.issue.url + "\nLabels: " + labelsList + "\nAuthor: " + params.issue.user.login + "\n" + params.issue.updated_at + "```"};
      var slackOptions = {
        url: params.slackWebhook,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: jsonBody,
        json: true
      }

      request(slackOptions, function (error, response, body) {
        if (error) {
          console.log(error);
        }
        else {
          console.log(response);
        }
      });
    }

    return new Promise(function(resolve, reject) {
      request(options, function(error, response, body) {
        if (error) {
          reject(error);
        }
        else {
          resolve({msg: response});
        }
      });
    });
  }
}

