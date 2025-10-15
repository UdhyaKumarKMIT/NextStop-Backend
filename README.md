

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
* **Auth**: Public
* **Response**: Array of route objects

---

### 2. Get Route by ID

* **GET** `/:id`
* **Auth**:  Public
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

# 🎟️ Booking API

Handles ticket bookings, cancellations, and retrieving user-specific bookings.

## 📍 Base URL

```
http://localhost:5050/api/bookings
```

## 🔐 Authentication

* **All Booking Routes**: Require user authentication via Bearer token

---

## 📘 Endpoints

### 1. Book a Ticket

* **POST** `/`
* **Auth**: ✅ Required
* **Headers**:

  ```
  Authorization: Bearer <token>
  Content-Type: application/json
  ```
* **Body**:

  ```json
  {
    "bus": "bus_id_here",
    "seatsBooked": 2,
    "totalFare": 800
  }
  ```
* **Response**: Booking confirmation object

---

### 2. Cancel a Booking

* **PUT** `/cancel/:id`
* **Auth**: ✅ Required
* **Headers**:

  ```
  Authorization: Bearer <token>
  ```
* **Params**:

  * `id`: Booking ID to cancel
* **Response**: Updated booking object with status `"Cancelled"`

---

### 3. Get User Bookings

* **GET** `/user`
* **Auth**: ✅ Required
* **Headers**:

  ```
  Authorization: Bearer <token>
  ```
* **Response**: Array of user’s booking objects

---
