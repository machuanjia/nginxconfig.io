const express = require('express');
const app = express();
const port = 8080
app.use("/", express.static(__dirname + "/dist"));
app.listen(port, () => console.log(`> Server is running on 127.0.0.1:${port}`));
