const express = require("express");
const bodyParser = require("body-parser");
const serveIndex = require("serve-index");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("src/pages"));
app.use(
  "/files",
  express.static("src/pages/files"),
  serveIndex("src/pages/files", { icons: true })
);

app.get("/", (req, res) => {
  res.sendFile("src/pages/index.html");
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Docker listening on port ${port}`);
  console.log(`App listening on http://localhost:8080`);
});
