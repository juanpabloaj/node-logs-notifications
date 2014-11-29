# Logs notifications

Send logs message to notifications services or to `console.log` setting environment variables.

## Install

    npm install logs-notifications

## Environment variables

To send to [slack.com](https://slack.com/) you need set the environment variable

    export SLACK_TOKEN="slack-token"

Without defined variables the default output is the `console.log`.

## Usage

    var log = require('logs-notifications');
    log('hello from logs-notifications');
