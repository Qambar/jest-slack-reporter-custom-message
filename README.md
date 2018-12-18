# Jest Slack Reporter Custom Message

Jest slack reporter that notifies a slack channel via Incoming Webhook integration, you can set your own custom message on success or failure of the test.

## Set up

1. Set up a [Slack Incoming Webhook integration](https://my.slack.com/services/new/incoming-hebhook/)
2. Add the Webhook URL to `package.json` under `jestSlackReporter`

```
"jestSlackReporter": {
  "webhookUrl": "https://hooks.slack.com/services/XXXXXXXXX/XXXXXXXXX/XXXXXXXXXXXXXXXXXX"
},
```

3. Set `jest-slack-reporter` as the jest `testResultsProcessor`

```
...
"jest": {
  "testResultsProcessor": "./node_modules/jest-slack-reporter",
  "failMessage": "Some tests have failed",
  "passMessage": "All tests have passed"
},
...
