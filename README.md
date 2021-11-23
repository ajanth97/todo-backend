# Todo Backend

## Setting up the development enviroment

1. Clone this repo

2. Run ```yarn install``` to install dependencies
3. Set the following enviroment variables below.

I used [Atlas Mongo DB](https://www.mongodb.com/atlas/database) to cloud host the Mongo DB database. Set the below enviroment variables for your database settings appropriately 

In order to generate a JWT secret you could use the following command in NodeJS : 

``` node -e "console.log(require('crypto').randomBytes(32).toString('base64'));" ```

You could increase the number of bytes to generate a longer string but this will have an impact on the CPU during decoding of the token. A lower number of bytes will be easier to brute force. Therefore I think *32 bytes* is a good sweet spot. 

| Enviroment Variables |            
|----|
|   CLUSTERURI |            
|   DBNAME |         
|   USERNAME |
|   PASSWORD |
|   JWTSECRET|

4. Run ```node index.js``` to start the server 
