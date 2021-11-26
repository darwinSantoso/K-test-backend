# Users Endpoint

### POST /register

> register new user

_request body_:

```
{
    "name": "darwin",
    "email": "darwin@gmail.com",
    "password": "password"
}
```

_response (200)_:

```
{
    "id": "61a0a68902593530384fd7cc",
    "email": "darwin@gmail.com"
}
```

### POST /login

> login user

_request body_:

```
{
    "email": "darwin@gmail.com",
    "password": "password"
}
```

_response (200)_:

```
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTBhNjg5MDI1OTM1MzAzODRmZDdjYyIsIm5hbWUiOiJkYXJ3aW4iLCJlbWFpbCI6ImRhcndpbkBnbWFpbC5jb20iLCJpYXQiOjE2Mzc5MTg0MTd9.hO2qxxS8vwag-_zYA7CAJHoQuBZuhyW9b9-wRH8_L-Q"
}
```

### POST /transactions

> add new transaction

_request headers_:

```
{
  access_token: <access_token>
}
```

_request body_:

```
{
    "product_id": 2,
    "amount": 20000
}
```

_response (200)_:

```
{
    "id": 11,
    "user_id": "61a0a68902593530384fd7cc",
    "product_id": 2,
    "amount": 20000,
    "status": "pending",
    "updatedAt": "2021-11-26T09:24:49.482Z",
    "createdAt": "2021-11-26T09:24:49.482Z"
}
```

### POST /payments

> make new payment

_request headers_:

```
{
  access_token: <access_token>
}
```

_request body_:

```
{
    "order_id": 11,
    "amount": 20000
}
```

_response (200)_:

```
{
    "id": 11,
    "order_id": 11,
    "status": "paid",
    "amount": 20000,
    "updatedAt": "2021-11-26T09:27:15.358Z",
    "createdAt": "2021-11-26T09:27:15.358Z"
}
```

## Products endpoints

### GET /products

> get all products

_request body_:

```
none
```

_response (200)_:

```
[
    {
        "id": 1,
        "name": "apple",
        "price": 5000,
        "qty": 5,
        "createdAt": "2021-11-25T05:05:57.000Z",
        "updatedAt": "2021-11-25T05:05:57.000Z"
    },
    {
        "id": 2,
        "name": "grape",
        "price": 8000,
        "qty": 10,
        "createdAt": "2021-11-25T05:05:57.000Z",
        "updatedAt": "2021-11-25T05:05:57.000Z"
    },
    {
        "id": 3,
        "name": "pineapple",
        "price": 10000,
        "qty": 3,
        "createdAt": "2021-11-25T05:05:57.000Z",
        "updatedAt": "2021-11-25T05:05:57.000Z"
    },
    {
        "id": 4,
        "name": "watermelon",
        "price": 8000,
        "qty": 15,
        "createdAt": "2021-11-25T05:05:57.000Z",
        "updatedAt": "2021-11-25T05:05:57.000Z"
    },
    {
        "id": 5,
        "name": "melon",
        "price": 18000,
        "qty": 6,
        "createdAt": "2021-11-25T05:05:57.000Z",
        "updatedAt": "2021-11-25T05:05:57.000Z"
    }
]
```

### POST /products

> add new product

_request body_:

```
{
  "name": "martabak",
  "price": 17000,
  "qty": 6
}
```

_response (200)_:

```
{
    "id": 8,
    "name": "martabak",
    "price": 17000,
    "qty": 6,
    "updatedAt": "2021-11-26T13:23:35.620Z",
    "createdAt": "2021-11-26T13:23:35.620Z"
}
```

### GET /products/:id

> get product by ID

_request body_:

```
none
```

_response (200)_:

```
{
    "id": 8,
    "name": "martabak",
    "price": 17000,
    "qty": 6,
    "createdAt": "2021-11-26T13:23:35.000Z",
    "updatedAt": "2021-11-26T13:23:35.000Z"
}
```

_error (400)_:

```
{
    "message": "Internal Server Error"
}
```

### DELETE /products

> delete product by id

_request body_:

```
{
  "id": 8
}
```

_response (200)_:

```
{
    "id": 8,
    "name": "martabak",
    "price": 17000,
    "qty": 6,
    "createdAt": "2021-11-26T13:23:35.000Z",
    "updatedAt": "2021-11-26T13:23:35.000Z"
}
```

### PUT /products/:id

> update product by ID

_request body_:

```
{
  "name": "melon2",
  "price": 8888,
  "qty": 8
}
```

_response (200)_:

```
{
    "id": 5,
    "name": "melon2",
    "price": 8888,
    "qty": 8,
    "createdAt": "2021-11-25T05:05:57.000Z",
    "updatedAt": "2021-11-26T13:27:19.000Z"
}
```
