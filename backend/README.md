# User Registration Endpoint Documentation

## POST `/users/register`

Registers a new user in the system.

---

### **Request Body**

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### **Field Requirements**
- `fullname.firstname` (string, required): Minimum 3 characters.
- `fullname.lastname` (string, optional): Minimum 3 characters if provided.
- `email` (string, required): Must be a valid email format.
- `password` (string, required): Minimum 6 characters.

---

### **Responses**

#### **201 Created**
- **Description:** User registered successfully.
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
      // other user fields
    }
  }
  ```

#### **400 Bad Request**
- **Description:** Validation failed.
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email format",
        "param": "email",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

#### **500 Internal Server Error**
- **Description:** Server error or missing required fields.

---


### **Notes**
- All required fields must be present and valid.
- On success, a JWT token is returned for authentication.

---

# User Login Endpoint Documentation

## POST `/users/login`

Authenticates a user and returns a JWT token.

---

### **Request Body**

Send a JSON object with the following structure:

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### **Field Requirements**
- `email` (string, required): Must be a valid email format.
- `password` (string, required): Minimum 6 characters.

---

### **Responses**

#### **200 OK**
- **Description:** User authenticated successfully.
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
      // other user fields
    }
  }
  ```

#### **400 Bad Request**
- **Description:** Validation failed.
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email format",
        "param": "email",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

#### **401 Unauthorized**
- **Description:** Invalid email or password.
- **Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

#### **500 Internal Server Error**
- **Description:** Server error.


---

### **Notes**
- Both fields are required and must be valid.
- On success, a JWT token is returned for authentication.

---

# User Profile Endpoint Documentation

## GET `/users/profile`

Returns the authenticated user's profile information.

---

### **Headers**

- `Authorization: Bearer <jwt_token>`  
  or  
- Cookie: `token=<jwt_token>`

---

### **Responses**

#### **200 OK**
- **Description:** Returns the user's profile.
- **Body:**
  ```json
  {
    "_id": "<user_id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
    // other user fields
  }
  ```

#### **401 Unauthorized**
- **Description:** Missing or invalid token.
- **Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

---

### **Notes**
- Requires authentication (JWT token in header or cookie).
- Returns the current user's data.

---

# User Logout Endpoint Documentation

## GET `/users/logout`

Logs out the authenticated user by blacklisting the JWT token and clearing the cookie.

---

### **Headers**

- `Authorization: Bearer <jwt_token>`  
  or  
- Cookie: `token=<jwt_token>`

---

### **Notes**
- Requires authentication (JWT token in header or cookie).
- The token is blacklisted and cannot be used again.
- The authentication cookie is cleared on logout.

---

# Captain Registration Endpoint Documentation

## POST `/captains/register`

Registers a new captain (driver) in the system.

---

### **Request Body**

Send a JSON object with the following structure:

```json
{
  "firstname": "Ali",
  "lastname": "Khan",
  "email": "ali.khan@example.com",
  "password": "yourpassword",
  "color": "Black",
  "plate": "ABC-1234",
  "capacity": 4,
  "vehicleType": "car"
}
```

#### **Field Requirements**
- `firstname` (string, required): Minimum 3 characters.
- `lastname` (string, required): Minimum 3 characters.
- `email` (string, required): Must be a valid email format.
- `password` (string, required): Minimum 6 characters.
- `color` (string, required): Minimum 3 characters.
- `plate` (string, required): Unique vehicle plate.
- `capacity` (integer, required): Minimum 1.
- `vehicleType` (string, required): One of `car`, `bike`, `auto`.

---

### **Responses**

#### **201 Created**
- **Description:** Captain registered successfully.
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "captain": {
      "_id": "<captain_id>",
      "fullname": {
        "firstname": "Ali",
        "lastname": "Khan"
      },
      "email": "ali.khan@example.com",
      "vehicle": {
        "color": "Black",
        "plate": "ABC-1234",
        "capacity": 4,
        "vehicleType": "car"
      }
      // other captain fields
    }
  }
  ```

#### **400 Bad Request**
- **Description:** Validation failed or captain already exists.
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "First name must be at least 3 characters long",
        "param": "firstname",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```
  or
  ```json
  {
    "error": "Captain already exists"
  }
  ```

#### **500 Internal Server Error**
- **Description:** Server error or missing required fields.

---

### **Notes**
- All required fields must be present and valid.
- On success, a JWT token is returned for authentication.
- Vehicle information is required and must be valid.

## `/captains/login` Endpoint

### Description

Authenticates a captain using their email and password, returning a JWT token upon successful login.

### HTTP Method

`POST`

### Endpoint

`/captains/login`

### Request Body

The request body should be in JSON format and include the following fields:

- `email` (string, required): Captain's email address (must be a valid email).
- `password` (string, required): Captain's password (minimum 6 characters).

### Example Response

- `captain` (object):
  - `fullname` (object).
    - `firstname` (string): Captain's first name (minimum 3 characters).
    - `lastname` (string): Captain's last name (minimum 3 characters).   
  - `email` (string): Captain's email address (must be a valid email).
  - `password` (string): Captain's password (minimum 6 characters).
  - `vehicle` (object):
    - `color` (string): Vehicle color.
    - `plate` (string): Vehicle plate number.
    - `capacity` (number): Vehicle passenger capacity.
    - `vehicleType` (string): Type of vehicle.
- `token` (String): JWT Token

## `/captains/profile` Endpoint

### Description

Retrieves the profile information of the currently authenticated captain.

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`

### Example Response

- `captain` (object):
  - `fullname` (object).
    - `firstname` (string): Captain's first name (minimum 3 characters).
    - `lastname` (string): Captain's last name (minimum 3 characters).   
  - `email` (string): Captain's email address (must be a valid email).
  - `vehicle` (object):
    - `color` (string): Vehicle color.
    - `plate` (string): Vehicle plate number.
    - `capacity` (number): Vehicle passenger capacity.
    - `vehicleType` (string): Type of vehicle.

## `/captains/logout` Endpoint

### Description

Logout the current captain and blacklist the token provided in cookie or headers.

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token in the Authorization header or cookie.

### Example Response

- `message` (string): Logout successfully.
