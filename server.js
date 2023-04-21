const express = require("express");
const middleware = require("./middleware/idea.middleware");
const app = express();
const port = 8080;

app.use(express.json());
app.use(middleware);

require("./routes/idea.route")(app);

app.listen(port, () => {
  console.log("Server is running");
});
