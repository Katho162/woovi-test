# Woovi Test

This was a technical test made for Woovi by Felipe Gomes Lopes at 04/04/2023. Where my goal was to implement a complete CRUD using GraphQL

The framework chosen for the task was Nest.js, a modern Node.js framework that utilises express and other Node.js web libs to create a very solid and scalable web framework that can work with RESTful and GraphQL apis.

## About it

My approach was to create a docker-compose.yml file where I can create a database to be consumed. The database chosen was PostgresSQL a relational database.

To build our database you can use the script in scripts/start.sh

```
$ sh scripts/start.sh
```

If you have your "woovi-test" container running in your docker than we're good to go!

## Testing

To test it you can go directly to `https://localhost:3000/graphql` or just change it to the port number declared as `PORT` in `.env`
