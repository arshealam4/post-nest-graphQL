# graphQL with nestjs

## Description

* We can get all, get by id, add, edit, delete post using graphQL.

## Technology

- [x] Node
- [x] NestJS
- [x] GraphQL
- [x] Mongo DB
- [x] Best Practice Structure
- [x] Async Await
- [x] Typescript (classes, arrow functions)

## Requirements

* To run this project, nodejs, mongodb and git (version control) should be installed.
* Node ^8

### node

* [Node](http://nodejs.org/) is really easy to install & now include NPM. You should be able to run the following command after the installation procedure below.

  $ node --version
  
  $ npm --version

### mongodb

* [MongoDB](https://docs.mongodb.com/manual/installation/) is really easy to install, click here [MongoDB](https://docs.mongodb.com/manual/installation/) and follow the step to install mongoDB.

* [NestJS](https://nestjs.com/) documentation.
* [GraphQL](https://graphql.org/) documentation.


## Quick Start
* git clone https://github.com/arshealam4/post-nest-graphQL.git
* cd post-nest-graphQL
* npm install
* npm run start:dev

## graphQL playground

* after running server open url in any browser (http://localhost:3050/graphql)
### queries and mutation e.g.
* get all post with pagination and mention return fields

```js
{
  posts(params: {
    pageNo:1
    limit: 10
  }) {title, id}
}
```


* get post by id and mention return fields

```js
{
  postById(id: "60618842d6ca5f6ea3605d05") {title}
}
```

* add post and mention return fields
```js
mutation {
  addPost(postData: {
    title: "test"
    description: "test test"
  }) {title}
}
```

* delete post and mention return fields
```js
mutation {
  deletePost(id: "60618842d6ca5f6ea3605d05") {title}
}
```

## Run Test
* npm run test:e2e
