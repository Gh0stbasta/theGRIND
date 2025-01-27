// This is the simple part... just importing the module
import express from "express";

// crating the server on port 8080
const app = express();
const port = 8080;

// serving all static files like html, css and js to the user
app.use(express.static("statics"));

// starting the server and informing the user
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
