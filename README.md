# twitter

```
$ git clone https://github.com/olinjs/twitter.git
$ cd twitter
```

## Set up an application

Go to [https://dev.twitter.com/apps](https://dev.twitter.com/apps) and **Create a New Application**.

In addition to a name, description, and website, set the following Settings. Your Callback URL can be any valid public URL, it does not matter if you try using this from `localhost` later.

![http://i.imgur.com/e9BiHo9.png](http://i.imgur.com/e9BiHo9.png)

## Set your environment variables

Find your consumer key and secret:

![http://i.imgur.com/idEWVvM.png](http://i.imgur.com/idEWVvM.png)

Create a `.env` file that uses the following (don't include spaces around your `=` signs):

```
TWITTER_KEY=...
TWITTER_SECRET=...
```

Then run `foreman start`. (This was installed with Heroku toolbelt.)

## Logging in with express and posting

```
$ npm install
$ foreman start
```

If you're getting OAuth errors, ensure your `process.env.TWITTER_KEY` and `process.env.TWITTER_SECRET` are set by logging them in Node.

### Using the Twitter API

**API Reference:** [https://dev.twitter.com/docs/api/1.1](https://dev.twitter.com/docs/api/1.1)

## Consuming the Twitter live stream

Using the Twitter stream implies you are consuming tweets live. Because your Heroku application dies every 10 minutes if it is not being used, we've gotta figure out what code we're going to use as an example.
