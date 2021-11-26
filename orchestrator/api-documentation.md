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
