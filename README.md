## Rest API

### Create user

```
$ curl -H "Content-Type: application/json" --request POST http://localhost:3000/users --data '{"name": "Mhayk", "username": "mhayk.lima"}'
```

## List posts by user

```
$ curl http://localhost:3000/posts/user/611c0fef00d7f28b3094f476
```

## GraphQL

**url**: http://localhost:3000/graphq

### Create a user

```
mutation {
  createUser(input:{
    name: "Alana",
    username: "alana.antonaccio"
  }) {
    _id
  }
}
```

### Fetching all users

```
query {
  getAllUsers{
    _id,
    name
  }
}
```

### Create a post

```
mutation {
  createPost(input:{
    content: "GraphQL na veia :D",
    author: "611c0fef00d7f28b3094f476"
  }) {
    _id
  }
}
```

### Fetching all posts by user

```
query {
  getPostByUser(idUser: "611c0fef00d7f28b3094f476") {
    _id,
    content,
    createdAt,
    author {
      name,
      username
    }
  }
}
```
