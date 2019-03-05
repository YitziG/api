---
title: /advocates/:id
position: 1.1
type: get
description: Get Advocate
parameters:
  - name:
    content:
content_markdown: |-
  Returns a specific advocate from your collection
left_code_blocks:
  - code_block: |-
      $.get("http://api.myapp.com/advocates/yitzi", {
        token: "YOUR_APP_KEY",
      }, function(data) {
        alert(data);
      });
    title: jQuery
    language: javascript
  - code_block: |-
      r = requests.get("http://api.devrel.com/advocates/yitzi", token="YOUR_APP_KEY")
      print r.text
    title: Python
    language: python
  - code_block: |-
      var request = require("request");
      request("http://api.devrel.com/advocates/yitzi?token=YOUR_APP_KEY", function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
    title: Node.js
    language: javascript
  - code_block: |-
      curl http://sampleapi.devrel.com/advocates/yitzi?key=YOUR_APP_KEY
    title: Curl
    language: bash
right_code_blocks:
  - code_block: |2-
      {
        "user": "yitzi",
        "degree": "BSc Computer Science",
        "college": "Jersalem College of Technology",
        "email": "yitzi@startbetshemesh.com",
        "linkedin": "yitzi.dev/li",
        "employer" : "Sifra",
        "position" : "Developer Advocate",
        "resume" : "yitzi.dev/resume",
        "note": "Grab if available!"
      }
    title: Response
    language: json
  - code_block: |2-
      {
        "error": true,
        "message": "Advocate doesn't exist"
      }
    title: Error
    language: json
---