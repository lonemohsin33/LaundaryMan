const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://lonemohsin33:Diabetes7889%40@functionup.aq5cty2.mongodb.net/laundaryman",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("MDB is connected"))
  .catch((err) => console.log(err));



// Define a schema for our data
const dataSchema = new mongoose.Schema({
    
  name: String,
  phone: String,
  shirt: String,
    address: String,
  date: String,
  location: {
    lat: String,
    long:String,
  }
});
const userSchema = new mongoose.Schema({
    name: String,
    role: {
         type: String, default: 'user' 
    }


})

const Data = mongoose.model("Data", dataSchema);
const user = mongoose.model("user", userSchema);

// Set up routes
app.get("/dashboard", async (req, res) => {
    try {
       
      const data = await Data.find({})

    
        res.status(200).send({status:true, message:data})
    }
    catch (err) {
        res.status(500).send({staus:false, message:err.message})
    }
});

app.post("/submit", async (req, res) => {
  try {
      
        
    const { name, phone, shirt, address, date, } = req.body;

    let location = {}
    location.lat = req.body.location[0]
    location.long = req.body.location[1];

    req.body.location= location
    
 
    
        const savedData = await Data.create(req.body)
      res.status(200).send({ status: true, message: savedData })
      
    } catch (err) {
        res.status(500).send({status:false, message:err.message})
    }

  
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
