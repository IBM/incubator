var request = require('request');

function main(params) {
  if (params.action == "labeled" && params.label.id == 788641321 && params.issue.body.includes("- [x] <--")) {
    
    var _url = "https://" + params.gitUsername + ":" + params.gitPersonalToken + "@api.github.com/orgs/IBM/repos";
    
    var options = {
      url: _url,
      method: "POST",
      headers: {
        'User-agent': 'curl/7.54.0',
        'content-type': 'application/json',
        'Accept': 'application/vnd.github.inertia-preview+json'
      },
      body: JSON.stringify({name: params.issue.title, license_template: "apache-2.0"})
    };
    
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
