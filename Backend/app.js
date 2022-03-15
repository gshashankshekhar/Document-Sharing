const morgan = require('morgan');
const express = require('express');
// Create express object
const app = express();
// Set middlewares
app.use(express.json());
app.use(morgan('dev'));
// @TODO Add routes
// Run express server
const PORT = process.env.PORT;
app.listen(8000, () => {
    console.log(`app is running on port ${8000}`);
});




// const express = require('express');
// const fileupload = require("express-fileupload");
// const util = require('util');

// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(fileupload());

// app.post("/upload", async (req, res) => {
//     try {
//         const file = req.files.file;
//         const fileName = file.name;
//         const size = file.data.length;
//         const extension = path.extname(fileName);

//         const allowedExtension = /png|jpeg|jpg|pdf|doc/;

//         if (!allowedExtensions.test(extension)) throw "Unsupported extension!"
//         if (size > 5000000) throw "File must be less than 5MB";

//         const md5 = file.md5;

//         const URL = "/uploads/ + md5 + extension";

//         await util.promisify(file.mv)("./public" + URL);
//         res.json({
//             message: "File Uploaded Sucessfully!"
//         })

//     } catch (err) {
//         console.log(err);
//         res.status(500).json({
//             message: err,
//         });
//     }
// })
// app.listen(8000, () => {
//     console.log("Server listening on port 8000");
// })