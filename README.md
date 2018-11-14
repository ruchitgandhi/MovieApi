# MovieApi
REST API for fetching movie and tv series

## Steps to run locally

## Steps to run on cloud

## API Development

#### Learnings:
1) There are multiple ways to do Pagination:
   
   a) Using limit and skip paramters in MongoDB queries (I have used this!).
   
   b) Using cursor based pagination, where id of the last returned result is remembered.
   
   Both have their advantages and disadvantages which can be read here - https://www.codementor.io/arpitbhayani/fast-and-efficient-pagination-in-mongodb-9095flbqr

2) Express-generator to generate sample project using nodejs and express.

3) Separating the application into routes, controllers, model, and views - MVC methodology.

4) Usage of package.json file for managing dependencies as well as starting app on the Heroku cloud.

## Server Cloud Hosting
Node.js server hosted on Heroku
 
#### Learnings:
1) Hosting app on the cloud
2) If you need to temporarily disable access to your Heroku app (for example, to perform a large migration), you can enable Heroku’s built-in maintenance mode. While in maintenance mode, your app serves a static maintenance page to all visitors.
3) Utilizing config variables on Heroku to protect credentials from being mentioned in files.

##### Commands:
Enabling Maintenance mode:
$ heroku maintenance:on

Scaling your app’s dynos to zero:
$ heroku ps:scale web=0

## Database Cloud Hosting
MongoDB cloud hosting using MongoDB Atlas

#### Learnings:
1) Hosting Database on the cloud
2) Used text-based indexing to optimize search queries
3) Mongo Atlas has option for IP whitelisting - meaning only specific ip addresses are allowed to query the database.
