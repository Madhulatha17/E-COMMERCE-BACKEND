# API Endpoints Documentation

## Register User

POST /register

Response:

{
  "message": "User Registered Successfully"
}

---

## Add Product

POST /products

Response:

{
  "message": "Product Added Successfully"
}

---

## Get Products

GET /products

Response:

[
  {
    "id": 1,
    "name": "Laptop",
    "price": 50000
  }
]

---

## Create Order

POST /orders

Response:

{
  "message": "Order Created Successfully"
}
