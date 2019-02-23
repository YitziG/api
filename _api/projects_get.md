---
title: /advocates/:id/projects/community
position: 1.4
type: get
description: Get Advocate's Community Projects
parameters:
  - name:
    content:
content_markdown: |-
  Returns the community building experience of a specific advocate
left_code_blocks:
  - code_block: |-
      $.get("http://api.myapp.com/advocates/yitzi/projects/community", {
        token: "YOUR_APP_KEY",
      }, function(data) {
        alert(data);
      });
    title: jQuery
    language: javascript
  - code_block: |-
      r = requests.get("http://api.devrel.com/advocates/yitzi/projects/community", token="YOUR_APP_KEY")
      print r.text
    title: Python
    language: python
  - code_block: |-
      var request = require("request");
      request("http://api.devrel.com/advocates/yitzi/projects/community?token=YOUR_APP_KEY", function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
    title: Node.js
    language: javascript
  - code_block: |-
      curl http://sampleapi.devrel.com/advocates/yitzi/projects/community?key=YOUR_APP_KEY
    title: Curl
    language: bash 
right_code_blocks:
  - code_block: |2-
      [
        {
          "name" : "Community Project Nights",
          "position": "Organizer",
          "description": "Organize and facilitate two monthly meetups where developers and community managers work to build community and software in Bet Shemesh",
          "facebook": ""
        },
        {
          
      ]
    title: Response
    language: json
  - code_block: |2-
      {
        "error": true,
        "message": "Advocate has no interpersonal skills, RUN AWAY!"
      }
    title: Error
    language: json
---