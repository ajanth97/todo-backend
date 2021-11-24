# Todo Backend

This project is currently hosted in the following link :

https://todo-project-backend.herokuapp.com/api/

It is used as the backend in the following frontend application [here](https://github.com/ajanth97/todo-frontend)

## Setting up the development enviroment

1. Clone this repo

2. Run ```yarn install``` to install dependencies
3. Set all of the following enviroment variables below.

I used [Atlas Mongo DB](https://www.mongodb.com/atlas/database) to cloud host the Mongo DB database. Set the below enviroment variables for your database settings appropriately 

In order to generate a JWT secret you could use the following command in NodeJS : 

``` node -e "console.log(require('crypto').randomBytes(32).toString('base64'));" ```

You could increase the number of bytes to generate a longer string but this will have an impact on the CPU during decoding of the token. A lower number of bytes will be easier to brute force. Therefore I think *32 bytes* is a good sweet spot. 

| Enviroment Variables | Definition    |
|----------------------|------------|
|   PORT| The port number where this node server will run |
|   CLUSTERURI | The URI of our Atlas mongo DB cluster |            
|   DBNAME |  Name of our Database |
|   USERNAME | Username of our Database |
|   PASSWORD | Password of our Database |
|   JWTSECRET| The JWT secret to sign and validate JWT tokens|

4. Run ```node index.js``` to start the server 

## Considerations
- In a production project we need to add rate limiting to avoid brute force and waster our resources. We should consider adding this.
- We could use a JWT access token with a short expiry time and a JWT refresh token with a longer expiry time.
