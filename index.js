const readPkg = require('read-pkg');
const request = require('request');

module.exports = testResults => {
  const packagedData = readPkg.sync(process.cwd());
  const config = packagedData.jestSlackReporter || {};

  const webhookUrl = config.webhookUrl;
  if (!webhookUrl) {
    throw new Error("Please add a slack webhookUrl field under jestSlackReporter on your package.json");
  }

  const errText = config.failMessage;
  const passingText = config.passMessage;

  const text = testResults.numFailedTests > 0 ? errText : passingText;

  const options = {
    uri: webhookUrl,
    method: 'POST',
    json: { text },
    mrkdwn: true,
  };

  request(options);

  return testResults;
};
