const express = require('express');
const fs = require('fs');
const fileContent = JSON.parse(fs.readFileSync("./employees.json"));
const http=require('http');

const app = express();


app.get('/employees', (req,res) => {
const employee = fileContent
if(!employee) res.status(404).send('The employee was not found');
res.send(employee);
});

app.get('/employees/:id', (req,res) => {
    const employee = fileContent
    const userRequest = req.params.id;

for(let i=0; i< employee.employees.length;i++){

    if(employee.employees[i].id == userRequest){

        res.send(employee.employees[i])
    }

}
 res.status(404).send('The employee was not found');
});

const port = process.env.PORT || 3000;
app.listen(port, () => 
console.log(`Listening on port ${port}.. `));