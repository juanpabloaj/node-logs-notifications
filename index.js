var Slack = require('slack-node');

function log(message) {
  if ( process.env.SLACK_TOKEN != undefined ) {
    slack = new Slack(process.env.SLACK_TOKEN)
    slack.api('chat.postMessage', {text:message, channel:'#logs'}, function(){});
  } else {
    console.log(message);
  }
}

module.exports = log;
