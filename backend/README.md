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

### **Example Request (using curl)**

```bash
curl -X POST http://localhost:4000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": { "firstname": "Jane", "lastname": "Smith" },
    "email": "jane.smith@example.com",
    "password": "securepassword"
  }'
```

---

### **Notes**
- All required fields must be present and valid.
- On success, a JWT token is returned for authentication.