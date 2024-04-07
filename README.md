
# User Management Service

This is a User Management service that provides with APIs for various operations on Users database.




## APIs

**Base url:**  https://user-management-service.vercel.app/

### Create User

This API can be used to create a user

```http
  POST /api/users
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Name of user |
| `dob` | `string` | **Required**.Date of birth in format - YYYY-MM-DD  |
| `age` | `int` | **Required**. Age of user |
| `location` | `object` | **Required**. Location with object containing city as key ex- {"city": "New York"}  |

__Age of user__: The age should be valid corresponding to date of birth

### Get Random Users

This API will return a random user from the Users table

```http
  GET api/users/random
```
### Check Existence of a user.

This API can be used to check existence of a user

```http
  GET /api/users/check-existence
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Name of user to check |

### Get users above age.

This API can be used to get users above specified age

```http
  GET /api/users/filter-by-age
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `age` | `int` | **Required**. Age above which we need users |

### List all user names.

This API can be used to list all user names

```http
  GET /api/users/names
```

## Deployment

Deployment is done on vercel

**endpoint** - https://user-management-service.vercel.app/





## Tech Stack

**Server:** Node, Express

**Libraries:** xss, mongoose, body-parser

**Database:** MongoDB

**Deployment:** Vercel




