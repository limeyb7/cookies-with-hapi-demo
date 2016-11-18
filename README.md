# Quick demo of how to implement cookies with hapi

## How to run on your machine

- Clone this repo
- Install dependencies: ```npm install```
- Start the server: ```npm start ```
- Navigate to [localhost:8080](localhost:8080)

## How to check whether the cookies are working

- You should initially see a form with a text input field. Enter your name and note that the url changes, adding a "name" parameter
- Now go to [localhost:8080/name](localhost:8080/name). If everything has worked correctly, your name should be displayed.
- If using Google Chrome, you can also check the site's cookies in the Chrome dev tools

## How does this work?

We used hapi's own [cookies tutorial](http://hapijs.com/tutorials/cookies) to get our cookies set up. The "empty" cookie is first created when starting up the server (see server.js). 

```
    server.state('nameCookie', {
      ttl: 360000,
      isSecure: false,
      isHttpOnly: false,
      encoding: 'base64json',
      clearInvalid: false,
      strictHeader: true,
      path: "/"
    });
```

When the user goes to a url with a "name=" parameter, a cookies is set, which takes the name param value from the URL.

```
if(cookieName){
          reply.file('./public/views/index.html').state('nameCookie', {name: cookieName})
        }
```

The different paths are defined in routes.js.

## Things we learnt

The hapi tutorial recommends setting 'isSecure' and 'isHttpOnly' to true. However, because we are serving up our files within a local environment, this didn't work for us and so we needed to set both values to false.
