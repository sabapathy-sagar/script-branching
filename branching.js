const shell = require('shelljs');
const readLineSync = require('readline-sync'); 
const path = require('path');
const { repository } = require('./branching-config.json');

const { delivery, baseBranch } = repository
const repoName = delivery.substring(delivery.lastIndexOf('/'))

// Checkout to base branch
shell.exec(`git checkout ${baseBranch}`)

// Making sure we have the latest changes from the remote origin
shell.exec(`git pull origin ${baseBranch}`)

// Prompt the user of ticketID
const ticketId = readLineSync.question('What is the Ticket ID? ',
{
    limit: input => input.trim().length > 0,
    limitMessage: 'Please enter a ticket ID (e.g. DCPPD-123)'
  })

// Create a new branch
shell.exec(`git checkout -b ${ticketId}`)