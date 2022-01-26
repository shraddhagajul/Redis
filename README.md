# Redis
Basics of Redis
## Commands
## npm init
## npm i --save-dev babel-cli babel-preset-env babel-preset-stage-0
## npm i --save ioredis nodemon
## in package.json
## "scripts": {
##    "start": "nodemon ./index.js --exec babel-node -e js"
##  },
  Data is stored in memory for fast access.
  1. Redis database file (RDB) -> creates snapshot 
  2. Append-only file (AOF) -> uses logs to rebuild dataset
