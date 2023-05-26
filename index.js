const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const chefs = require("./chefs.json");
const foods = require('./foods.json');

app.get("/", (req, res) => {
  res.send("Hello from Still Hungry");
});

app.use(cors());

app.get('/foods',(req, res)=>{
  res.send(foods);
})

app.get("/chefs", (req, res) => {
  res.send(chefs);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedChef = chefs.find((chef) => parseInt(chef.id) === parseInt(id));
  res.send(selectedChef);
});   

app.listen(port, () => {
  console.log(`Still Hungry is running on port: ${port}`);
});
