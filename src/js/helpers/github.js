const moment = require('moment');
const { capitalize } = require('../helpers');

const parseGithubEvent = (event) => {
  const timestamp = moment(event.created_at);
  const timeDiff = timestamp.diff(moment());
  let message = `<strong>${moment.duration(timeDiff).humanize(true)}</strong> - `;

  switch (event.type) {
    case 'PushEvent':
      if (event.payload.size < 2) {
        message += `Pushed ${event.payload.size} commit to ${event.repo.name}`;
      } 
      
      else {
        message += `Pushed ${event.payload.size} commits to ${event.repo.name}`;
      }
      break;

    case 'PullRequestEvent':
      message += capitalize(`${event.payload.action} pull request #${event.payload.number} in ${event.repo.name}`);
      break;

    case 'CreateEvent':
      message += `Created ${event.payload.ref_type} "${event.payload.ref}" in ${event.repo.name}`;
      break;

    case 'DeleteEvent':
      message += `Deleted ${event.payload.ref_type} "${event.payload.ref}" in ${event.repo.name}`;
      break;

    case 'WatchEvent':
      message += capitalize(`${event.payload.action} watching ${event.repo.name} `);
      break;

    case 'ForkEvent':
      message += `Forked ${event.repo.name}`;
      break;

    default:
      message += 'Tried something new that this site doesn\'t know about';
  }

  return message;
}

module.exports = {
  parseGithubEvent
}