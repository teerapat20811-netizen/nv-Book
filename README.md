# Project: nv-Book

This project is a variation of the nv-webblog68 project, extended with a new model: **Book**.

## New Model: Book

### Schema
- **title**: STRING\n- **author**: STRING\n- **genre**: STRING\n- **price**: FLOAT\n- **publicationDate**: DATEONLY

## New Controller
A dedicated controller `BookController` has been added to handle CRUD operations for `Book`.

## New Routes
The following routes have been added to `server/src/routes.js`:

- **GET** `/books` - Get all books
- **POST** `/book` - Create a new book
- **GET** `/book/:bookId` - Get a book by ID
- **PUT** `/book/:bookId` - Update a book
- **DELETE** `/book/:bookId` - Delete a book

## Usage
Follow standard setup instructions for Client and Server.
