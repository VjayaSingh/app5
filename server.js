const express=require('express');
const prodRouter=require('./product');

const app=express();
app.use(prodRouter);

app.listen(3000,'0.0.0.0',()=>
{
    console.log('server started on port 3000');
})