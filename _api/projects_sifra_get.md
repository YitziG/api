---
title: /advocates/:id/projects/software
position: 1.5
type: get
description: Get Advocate's Software Projects
parameters:
  - name:
    content:
content_markdown: |-
  Returns the software development experience of a specific advocate
left_code_blocks:
  - code_block: |-
      $.get("http://api.myapp.com/advocates/yitzi/projects/software", {
        token: "YOUR_APP_KEY",
      }, function(data) {
        alert(data);
      });
    title: jQuery
    language: javascript
  - code_block: |-
      r = requests.get("http://api.devrel.com/advocates/yitzi/projects/software", token="YOUR_APP_KEY")
      print r.text
    title: Python
    language: python
  - code_block: |-
      var request = require("request");
      request("http://api.devrel.com/advocates/yitzi/projects/software?token=YOUR_APP_KEY", function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
      }
    title: Node.js
    language: javascript
  - code_block: |-
      curl http://sampleapi.devrel.com/advocates/yitzi/projects/software?key=YOUR_APP_KEY
    title: Curl
    language: bash 
right_code_blocks:
  - code_block: |2-
      [
        {
          "name": "Anylaw",
          "role": "Lead developer",
          "responsibilities": "crawlers, parsing, classification, and search",
          "description": "AnyLaw was established to provide a no-cost alternative solution to the unnecessary – and exclusionary — expense of legal research",
          "website": "anylaw.com",
          "press": "Featured on forbes.com at forbes.com/sites/maryjuetten/2019/01/22/free-legal-research-for-all-anylaw",
          "technologies": "crawler4j, Elastic, PostgreSQL"  
        },
        {
          "name": "The English Club",
          "position": "Android Lead",
          "description": "Responsible for UI update of popular educational game",
          "website": "englishclubapp.com",
          "app": "play.google.com/store/apps/details?id=com.englishclubapp.englishclub",
          "press": "Featured in the Maariv (Israel's second top selling newspaper) in honor of international children's day as one of five apps representative of Israel's Edtech innovation",
          "technologies": "Android, Java, Gradle"
        },
        {
          "name": "BimiLeap",
          "position": "Android Lead, Payments integration",
          "description": "Knowledge creation app! Founded by Dr. Howard Moskowitz",
          "press": "Malcolm Gladwell's TED talk about the discoveries of our founder that the app is based on ted.com/talks/malcolm_gladwell_on_spaghetti_sauce",
          "technologies": "Freemarker, Email integration, Payments flow (Stripe API)"
        }
      ]
    title: Response
    language: json
  - code_block: |2-
      {
        "error": true,
        "message": "Advocate has no dev skillz, RUN AWAY!"
      }
    title: Error
    language: json
---