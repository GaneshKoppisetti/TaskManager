console.log("Ganesh Backend is running...");
const express = require('express');
const app = express();
const port = 3000;
const connectToDB = require('./config/config');
 connectToDB();
app.get('/',(req,res)=>{
    res.send("Hello from Ganesh Backend");
})
app.use(express.json());
const productRoute = require('./routes/productRoute');
const userRoute = require('./routes/userRoute');
const taskRoute = require('./routes/taskRoute');
app.use('/api/product',productRoute);
app.use('/api/user',userRoute);
app.use('/api/task',taskRoute);
app.listen(port,()=>{console.log('Server is running on URL: http://localhost:'+port)});