// const express = require('express');
// const multer = require('multer');
// const { MongoClient } = require('mongodb');
// const {port} = require('./Admin/Admin.js');

// const app = express();
// //const port = 3000;

// // Multer configuration for file upload
// const upload = multer({ dest: '../' }); // Define the upload destination

// // MongoDB connection URI
// const uri = 'mongodb://localhost:27017';
// const dbName = 'yourDatabaseName';

// // Define MongoDB client
// const client = new MongoClient(uri);

// // Define route for file upload
// app.post('/upload', upload.single('pdf'), async (req, res) => {
//     try {
//         await client.connect();
//         const db = client.db(dbName);

//         // Access the PDF file details from req.file
//         const pdfFile = req.file;

//         // Logic to save the uploaded PDF file to MongoDB
//         // For example, you can save it to MongoDB GridFS or as binary data in a collection
        
//         res.status(200).json({ message: 'File uploaded successfully' });
//     } catch (error) {
//         console.error('Error occurred:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     } finally {
//         await client.close();
//     }
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
