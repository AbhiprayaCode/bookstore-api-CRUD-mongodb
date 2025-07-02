import mongoose from "mongoose";
import app from "./app.js";

mongoose.connect('mongodb://localhost:27017/bookstore-api-mongodb')
    .then(() => {
        console.log('Database is connected!')
        app.listen(8080, () => {
            console.log('Server is running on port 8080')
        })
    })
    .catch(error => {
        console.log(error)
    })