const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors"); // Import CORS middleware

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connected!!!");
  });

// Enable CORS middleware
// app.use(cors());
app.use(cors({
    origin: 'http://localhost:3030' // Allow requests from this origin
}));

//start the server
const port = 3030 || process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
