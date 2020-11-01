# Planting Trees API
This is a nodejs server built for my app
The server is connected with mongodb to store data

Obs: CORS middleware used

## Endpoints

1. Get all trees
```
GET /trees
```

2. Get specific tree by id
```
GET /trees/:id
```

3. Post a tree,
obs: require description, lat and lon     
```
POST /trees
```

4. Delete a tree, require id
```
DELETE /trees/:id
```

5. Update a tree, require id
```
PATCH /trees/:id
```

