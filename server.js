const express = require("express");
const app = express();
const port = 2000;
app.get("/", (req, res) => {
  res.send(
    "hey successfully express worked correctly this is you home page we can do docker now "
  );
});

app.listen(port, () => {
  console.log("server is running....");
  console.log(`on http://localhost:${port}`);
});
