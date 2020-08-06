# Dream Services | Demon API

Demons very own API for handling all requests from the selfbot, including HWID, Announcements, etc...  

> Demon uses MongoDB so you'll have to sign up [here](https://account.mongodb.com/account/login)  
> I'd suggest downloading the [MongoDB Compass](https://www.mongodb.com/products/compass)  

## Setting up the config
> URL: `mongodb+srv://<username>:<password>@<uri>/<database>`

Get the queries from the link above  
Then paste the following in ./src/utils/index.js

```js

module.exports = {
    DB: {
        USERNAME: 'username',
        PASSWORD: 'password',
        DATABASE: 'database',
        URI: 'uri',
    },

    SUPER_SECRET: 'secure string',
    PORT: 80 // Server port, keep it at 80
}
```

## Adding HWID
When using the API you can send a POST requests to add HWID's, here's how:  
 
1. Get the SUPER_TOKEN from the index file above paste it (`replacing <SUPER_SECRET>`) after "Authorization: "
2. Now open the selfbot while the API is running, when the selfbot is up wait for your HWID to display then paste it (`replacing <HWID>`) after "HWID: "
3. Get your Discord ID paste it (`replacing <DISCORD ID>`) after the "ID: "
4. Align everything into one line then paste it into your command prompt

```r
$ curl -X POST http://localhost/api/v1/supersecret
    -H "Authorization: <SUPER_SECRET>"
    -H "HWID: <HWID>"
    -H "ID: <DISCORD ID>"
```