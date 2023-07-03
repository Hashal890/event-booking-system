const express = require("express");
const cors = require(`cors`);
require(`dotenv`).config({ debug: true });

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Welcome to my application!");
});

app.listen(PORT, async () => {
  await await MongooseConnect();
  console.log(`Server started on http://localhost:PORT`);
});
