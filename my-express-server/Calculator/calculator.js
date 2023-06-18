const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});


app.post("/", function(req, res) {

    var num1 = req.body.n1;
    var num2 = req.body.n2;

    var result = num1  + num2;

    res. send("The result of the calculation is " + result);

    res.send("Thanks for posting that!");
});

app.get("/bmicalculator", function(req, res) {
    res.sendFile(path.join(__dirname, "bmiCalculator.html"));
});

app.post("/bmicalculator", function(req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);

    res.send("Your BMI is " + bmi);
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});
