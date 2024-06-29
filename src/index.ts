import express from "express";

const PORT = 3000;

const app = express();

app.get("/", (request, response) => {
  response.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
