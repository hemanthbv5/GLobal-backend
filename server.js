// const express = require("express")
// const app = express()
// app.use(express.json())
// app.use(cors())
// app.post("/",(req,res)=>{
//     res.json({success:true})
// })

// app.post("/signup",(req,res)=>[
//     res.json({})
// ])

// app.listen(3000,()=>{
//     console.log("server started");
    
// })


const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Dummy database of valid usernames
const validUsers = ["admin", "hbv", "hemanth"];

app.post("/", (req, res) => {
    const { username } = req.body;
    if (validUsers.includes(username)) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});
