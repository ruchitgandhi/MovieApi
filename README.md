# MovieApi
REST API for fetching movie and tv series

## Cloud Hosting
Node.js server hosted on Heroku
 
#### Learnings:
1) If you need to temporarily disable access to your Heroku app (for example, to perform a large migration), you can enable Heroku’s built-in maintenance mode. While in maintenance mode, your app serves a static maintenance page to all visitors.

  ##### Commands:
  Enabling Maintenance mode:
  $ heroku maintenance:on

  Scaling your app’s dynos to zero:
  $ heroku ps:scale web=0

2) Utilizing config variables on Heroku to protect credentials from being mentioned in files
