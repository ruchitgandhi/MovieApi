# MovieApi
REST API for fetching movie and tv series

## Server Cloud Hosting
Node.js server hosted on Heroku
 
#### Learnings:
1) If you need to temporarily disable access to your Heroku app (for example, to perform a large migration), you can enable Heroku’s built-in maintenance mode. While in maintenance mode, your app serves a static maintenance page to all visitors.
2) Utilizing config variables on Heroku to protect credentials from being mentioned in files.

##### Commands:
Enabling Maintenance mode:
$ heroku maintenance:on

Scaling your app’s dynos to zero:
$ heroku ps:scale web=0

## Database Cloud Hosting
MongoDB cloud hosting using MongoDB Atlas

#### Learnings:
1) Used text-based indexing to optimize search queries
2) Mongo Atlas has option for IP whitelisting - meaning only specific ip addresses are allowed to query the database.
