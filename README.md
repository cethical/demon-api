# Dream Services | Demon API

Demons very own API for handling all requests from the selfbot, including HWID, Announcements, etc...  

> Demon uses MongoDB so you'll have to sign up [here](https://account.mongodb.com/account/login)  
> I'd suggest downloading the [MongoDB Compass](https://www.mongodb.com/products/compass)  

## Setting up the config
```js
// The sign in url:
// mongodb+srv://<username>:<password>@<uri>/<database>

// Get the query from the link below when signing in on the MongoDB Compass
// Then paste the following in ./src/utils/index.js

module.exports = {
    DB: {
        USERNAME: 'username',
        PASSWORD: 'password',
        DATABASE: 'database',
        URI: 'uri',
    },

    SUPER_SECRET: 'random string doesnt matter what',
    PORT: 80 // Server port, keep it at 80
}
```