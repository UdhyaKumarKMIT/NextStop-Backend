Here's a clean and concise version of your **Route Management API** documentation formatted specifically for a GitHub `README.md` file:

---

# 🚏 Route Management API

API for managing transportation routes. Public can view routes; admins can create, update, and delete them.

## 📍 Base URL

```
http://localhost:5050/api/routes
```

## 🔐 Authentication

* **Public Routes**: No authentication
* **Admin Routes**: Bearer token required

---

## 📘 Endpoints

### 1. Get All Routes

* **GET** `/`
* **Auth**: ❌ Public
* **Response**: Array of route objects

---

### 2. Get Route by ID

* **GET** `/:id`
* **Auth**: ❌ Public
* **Params**:

  * `id`: Route ID
* **Response**: Single route object

---

### 3. Add New Route

* **POST** `/add`
* **Auth**: ✅ Admin
* **Headers**:

  ```
  Authorization: Bearer <token>
  Content-Type: application/json
  ```
* **Body**:

  ```json
  {
    "startPoint": "Madurai",
    "endPoint": "Chennai",
    "distance": 460,
    "duration": "7h 30m"
  }
  ```
* **Response**: Created route object

---

### 4. Update Route

* **PUT** `/:id`
* **Auth**: ✅ Admin
* **Headers**:

  ```
  Authorization: Bearer <token>
  Content-Type: application/json
  ```
* **Params**:

  * `id`: Route ID
* **Body**:

  ```json
  {
    "startPoint": "Updated Start",
    "endPoint": "Updated End",
    "distance": 500,
    "duration": "8h 00m"
  }
  ```
* **Response**: Updated route object

---

### 5. Delete Route

* **DELETE** `/:id`
* **Auth**: ✅ Admin
* **Headers**:

  ```
  Authorization: Bearer <token>
  ```
* **Params**:

  * `id`: Route ID
* **Response**: Success message

---

## 🧪 Example `curl` Commands

### Get All Routes

```bash
curl -X GET http://localhost:5050/api/routes
```

### Get Route by ID

```bash
curl -X GET http://localhost:5050/api/routes/1
```

### Add New Route

```bash
curl -X POST http://localhost:5050/api/routes/add \
  -H "Authorization: Bearer your_admin_token_here" \
  -H "Content-Type: application/json" \
  -d '{
    "startPoint": "Madurai",
    "endPoint": "Chennai",
    "distance": 460,
    "duration": "7h 30m"
  }'
```

### Update Route

```bash
curl -X PUT http://localhost:5050/api/routes/1 \
  -H "Authorization: Bearer your_admin_token_here" \
  -H "Content-Type: application/json" \
  -d '{
    "startPoint": "Updated Start",
    "endPoint": "Updated End",
    "distance": 500,
    "duration": "8h 00m"
  }'
```

### Delete Route

```bash
curl -X DELETE http://localhost:5050/api/routes/1 \
  -H "Authorization: Bearer your_admin_token_here"
```

---

## 🧾 Route Object

```json
{
  "id": "string or number",
  "startPoint": "string",
  "endPoint": "string",
  "distance": 460,
  "duration": "7h 30m"
}
```

