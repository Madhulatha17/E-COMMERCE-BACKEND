# Database Schema

## Users Table

| Column | Type |
|----------|----------|
| id | INTEGER |
| username | TEXT |
| password | TEXT |

## Products Table

| Column | Type |
|----------|----------|
| id | INTEGER |
| name | TEXT |
| price | REAL |

## Orders Table

| Column | Type |
|----------|----------|
| id | INTEGER |
| user_id | INTEGER |
| product_id | INTEGER |

## Database

SQLite is used as the backend database for storing users, products, and order information.
