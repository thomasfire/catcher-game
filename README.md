# Catcher game
Simple catcher game, made just for practice

## Build and run

Setup [NodeJS](https://nodejs.org/en) and [Redis](https://redis.io/) on your platform, adjust the Redis URL in `server/src/config.js`. 
And then in the shell:

```shell
cd client
npm install
npm run build
cd ../server
npm install
npm run build-server
npm run start-server
```

## APIs

* `GET /` - serves the `index.html` page
* `GET /static/*` - serves the static files from `public` directory
* `GET /leaderboard/get` - returns list of 100 leaders of the game in format:
  ```text
  [
    {"score": number, "username": string},
    ...
  ]
  ```
* `POST  /leaderboard/create` - creates new entry for the leaderboard, accepts JSON in format, returns `HTTP_STATUS_CREATED` on success:
  ```text
    {"score": number, "username": string}
  ```
  
## Checked browsers

* Windows Firefox 123.0.1
* Android Samsung Internet 24.0.3.4
* Android Firefox 123.1

## Generate data

```shell
cd server
npm run fill-random-data
```