var request = require('request');

function main(params) {
  if (params.action == "created" && params.sender.id == 34746072) {

    _url = "https://" + params.gitUsername + ":" + params.gitPersonalToken + "@api.github.com/repos/IBM/" + params.repository.name + "/contents/CONTRIBUTING.md";
    
    options = {
      url: _url,
      method: "PUT",
      headers: {
        'User-agent': 'curl/7.54.0',
        'content-type': 'application/json',
        'Accept': 'application/vnd.github.inertia-preview+json'
      },
      body: JSON.stringify({message: "Add CONTRIBUTING file", content: "IyBDb250cmlidXRpbmcNCg0KVGhpcyBpcyBhbiBvcGVuIHNvdXJjZSBwcm9qZWN0LCBhbmQgd2UgYXBwcmVjaWF0ZSB5b3VyIGhlbHAhDQoNCldlIHVzZSB0aGUgR2l0SHViIGlzc3VlIHRyYWNrZXIgdG8gZGlzY3VzcyBuZXcgZmVhdHVyZXMgYW5kIG5vbi10cml2aWFsIGJ1Z3MuDQoNCkluIGFkZGl0aW9uIHRvIHRoZSBpc3N1ZSB0cmFja2VyLCBbI2pvdXJuZXlzIG9uDQpTbGFja10oaHR0cHM6Ly9kd29wZW4uc2xhY2suY29tKSBpcyB0aGUgYmVzdCB3YXkgdG8gZ2V0IGludG8gY29udGFjdCB3aXRoIHRoZQ0KcHJvamVjdCdzIG1haW50YWluZXJzLg0KDQpUbyBjb250cmlidXRlIGNvZGUsIGRvY3VtZW50YXRpb24sIG9yIHRlc3RzLCBwbGVhc2Ugc3VibWl0IGEgcHVsbCByZXF1ZXN0IHRvDQp0aGUgR2l0SHViIHJlcG9zaXRvcnkuIEdlbmVyYWxseSwgd2UgZXhwZWN0IHR3byBtYWludGFpbmVycyB0byByZXZpZXcgeW91ciBwdWxsDQpyZXF1ZXN0IGJlZm9yZSBpdCBpcyBhcHByb3ZlZCBmb3IgbWVyZ2luZy4gRm9yIG1vcmUgZGV0YWlscywgc2VlIHRoZQ0KW01BSU5UQUlORVJTXShNQUlOVEFJTkVSUy5tZCkgcGFnZS4NCg=="})
    }      
     
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        request(options, function(error, response, body) {
          if (error) {
            reject(error);
          }
          else {
            resolve({msg: response});
          }
        });
      }, 4000);
    });
  }
}
