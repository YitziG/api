---
title: /advocates
position: 1.0
type: get
description: List all advocates
parameters:  
  - name: limit
    content: Limit the number of advocates returned
content_markdown: |-
  This call will return a maximum of 100 advocates
  {: .info }
  
left_code_blocks:
  - code_block: |-
      $.get("http://api.devrel.com/advocates/", { "token": "YOUR_APP_KEY"}, function(data) {
        alert(data);
      });
    title: jQuery
    language: javascript
  - code_block: |-
      r = requests.get("http://api.devrel.com/advocates/", token="YOUR_APP_KEY")
      print r.text
    title: Python
    language: python
  - code_block: |-
      var request = require("request");
      request("http://api.devrel.com/advocates?token=YOUR_APP_KEY", function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
    title: Node.js
    language: javascript
  - code_block: |-
      curl http://sampleapi.devrel.com/advocates?key=YOUR_APP_KEY
    title: Curl
    language: bash
right_code_blocks:
  - code_block: |2-
      [
        {
          "id": "jono",
          "name": "Jono Bacon",
          "description": "Jono Bacon is a leading community strategy, management, and execution author, consultant, and speaker.",
          "available": false
        },
        {
          "id": "mary",
          "name": "Mary Thengvall",
          "description": "Mary Thengvall is a connector of people at heart, both personally and professionally."
          "available": false
        },
        {
          "id": "yitzi",
          "name": "Yitzi Ginzberg",
          "description": "Yitzi Ginzberg is a developer, teacher, and community organizer, with a passion for spreading knowledge.",
          "available": true
        }
      ]
    title: Response
    language: json
  - code_block: |2-
      {
        "error": true,
        "message": "Unauthorized"
      }
    title: Error
    language: json
---