const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


//middleWare start
app.use(cors());
app.use(express.json());
//middleWare end


//base api start
app.get("/", (req, res) => {
    res.send('ePay Is Running Perfectly')
})
//base api end


app.listen(port, () => {
    console.log(`ePay Server Is Running On Port ${port}`)
})

