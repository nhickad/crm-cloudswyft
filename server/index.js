import express from "express";

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Dashboard');
});
  
app.listen(3000, () => {
  console.log("Server is Running on Port 3000");
});
