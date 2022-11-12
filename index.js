import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  console.log("i am getting the response");
 fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => res.send(data));
    
});

app.get("*", (req, res) => {
  res.send("OK")
});


// if(process.env.NODE_ENV === "production"){
//   app.use(express.static("softsensor-project/build"))
// }

app.listen(PORT, () => {
  console.log(`BE started at port ${PORT}`);
});
