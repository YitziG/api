---
title: /advocates/:id/:jobs
position: 1.3
type: get
description: Get Advocate's Work experience
parameters:
  - name:
    content:
content_markdown: |-
  Returns the work experience of a specific advocate
left_code_blocks:
  - code_block: |-
      $.get("http://api.myapp.com/advocates/yitzi/jobs", {
        token: "YOUR_APP_KEY",
      }, function(data) {
        alert(data);
      });
    title: jQuery
    language: javascript
  - code_block: |-
      r = requests.get("http://api.devrel.com/advocates/yitzi/jobs", token="YOUR_APP_KEY")
      print r.text
    title: Python
    language: python
  - code_block: |-
      var request = require("request");
      request("http://api.devrel.com/advocates/yitzi/jobs?token=YOUR_APP_KEY", function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
    title: Node.js
    language: javascript
  - code_block: |-
      curl http://sampleapi.devrel.com/advocates/yitzi/jobs?key=YOUR_APP_KEY
    title: Curl
    language: bash 
right_code_blocks:
  - code_block: |2-
      [
        {
          "id": "sifra",
          "position": "Lead Developer and Advocate",
          "company": "Sifra Digital",
          "website": "sifradigital.com",
          "dateStarted": "Feb 2016",
          "currentPosition": true
        },
        {
          "id": "start",
          "position": "Community Manager",
          "company": "Start Bet Shemesh",
          "dateStarted": "Feb 2018",
          "currentPosition": true
        },
        { "id": "maoftech",
          "position": "Advisory board member",
          "company": "MaofTech accelerator",
          "website": "betshemesh.maof-tech.com",
          "dateStarted": "Dec 2018",
          "currentPosition": true
        }
      ]
    title: Response
    language: json
  - code_block: |2-
      {
        "error": true,
        "message": "Advocate has no experience, RUN AWAY!"
      }
    title: Error
    language: json
---