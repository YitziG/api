---
title: /advocates/:id/:skills
position: 1.6
type: get
description: Get Advocate's Skills
parameters:
  - name:
    content:
content_markdown: |-
  Returns the skills of a specific advocate
left_code_blocks:
  - code_block: |-
      $.get("http://api.myapp.com/advocates/yitzi/skills", {
        token: "YOUR_APP_KEY",
      }, function(data) {
        alert(data);
      });
    title: jQuery
    language: javascript
  - code_block: |-
      r = requests.get("http://api.devrel.com/advocates/yitzi/skills", token="YOUR_APP_KEY")
      print r.text
    title: Python
    language: python
  - code_block: |-
      var request = require("request");
      request("http://api.devrel.com/advocates/yitzi/skills?token=YOUR_APP_KEY", function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
    title: Node.js
    language: javascript
  - code_block: |-
      curl http://sampleapi.devrel.com/advocates/yitzi/skills?key=YOUR_APP_KEY
    title: Curl
    language: bash 
right_code_blocks:
  - code_block: |2-
      [
        {
          "skill": "learning new technologies",
          "description": "Yitzi picks up new technologies rapidly and quickly finds creative and fun ways to put them to use",
          "examples": "As a development lead on projects ranging from education to legal research and more Yitzi has proven himself capable of picking up new technologies on the fly and implementing them with a focus on best practice. In the heat of action Yitzi has learnt Android, Java, PostgreSQL, Elastic, and much more. Yitzi is a tireless tinkerer who wil not put down a new technology until he masters it!"
        },
        {
          "skill": "Boiling Hi-tech down to its fundamental ingredients and presenting complex concepts to audiences of all levels at their level",
          "description": "Years of working directly with clients as well as presenting tech workshops for all ages has helped Yitzi to hone his teaching methods.",
          "examples": "Yitzi runs the popular workshops at TeamUP Israel that teaches tech (RasPi, Android..) to people of all ages."
         }
      ]
    title: Response
    language: json
  - code_block: |2-
      {
        "error": true,
        "message": "Advocate has no skillz, RUN AWAY!"
      }
    title: Error
    language: json
---