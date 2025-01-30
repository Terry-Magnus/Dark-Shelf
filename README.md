# Backend Dark Shelf (Node.js and MongoDB API Project)

## **Project Overview**

This project demonstrates how to build a RESTful API using **Node.js** and **MongoDB**. The API allows basic **CRUD (Create, Read, Update, Delete)** operations for managing student records.

## **Technologies Used**

- **Node.js**: JavaScript runtime for building scalable server-side applications
- **Express**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing student data
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB
- **Nodemon**: Automatically restarts the server upon file changes

## **Project Setup**

### **1. Prerequisites**

Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **MongoDB** (local or cloud instance)

### **2. Clone the Repository**

```bash
git clone https://github.com/Terry-Magnus/Dark-Shelf.git
cd dark-shelf
```

### **3. Install Dependencies**

```bash
npm install
```

### **4. Environment Variables**

Create a `.env` file in the project root and add the following variables:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/darkshelf
```

### **5. Run the Application**

Start the development server:

```bash
npm run dev
```

## **Project Structure**

```
|   |-- controllers
|   |   |-- bookController.js
|   |-- models
|   |   |-- book.js
|   |-- routes
|   |   |-- book.js
|-- app.js
|-- package.json
|-- README.md
```

## **API Endpoints**

### **Base URL:**

```
http://localhost:5000/api/v1
```

### **Endpoints:**

| Method | Endpoint | Description       |
| ------ | -------- | ----------------- |
| GET    | `/`      | Fetch all book    |
| POST   | `/`      | Add new book      |
| GET    | `/:id`   | Get specific book |
| PATCH  | `/:id`   | Update a book     |
| DELETE | `/:id`   | Delete a book     |

## **Example Requests**

### **1. GET All Books**

```bash
curl --request GET http://localhost:5000/api/v1/books
```

### **2. POST a New Book**

```bash
curl --header "Content-Type: application/json" \
     --request POST \
     http://localhost:5000/api/v1/books
```

### **3. Update a Book**

```bash
curl --header "Content-Type: application/json" \
     --request PATCH \
     http://localhost:5000/api/books/60a3c35c3f1df342d8a63a2e
```

## **Running the Application in Production**

To run the application in production mode:

```bash
npm run build
npm start
```

## **Scripts**

| Command       | Description                   |
| ------------- | ----------------------------- |
| `npm run dev` | Starts the development server |

## **Key Files Explanation**

### **1. `app.js`**

Sets up the Express server and connects to MongoDB.

### **2. `/models/book.js`**

-

Defines the schema and model for book.

### **3. `/routes/bookRouter.js`**

Handles API routing for reoord-related operations.

### **4. `bookController.js`**

Implements logic for handling API requests.

## **License**

This project is licensed under the MIT License.
