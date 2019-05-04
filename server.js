var express = require('express')
var app = express()
const fs = require('fs');

var query1 = fs.readFileSync('query1.json', 'utf8');
var query2 = fs.readFileSync('query2.json', 'utf8');
var query3 = fs.readFileSync('query3.json', 'utf8');
// var query4 = fs.readFileSync('query4.json', 'utf8');
// var query5 = fs.readFileSync('query5.json', 'utf8');

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname });
});

app.get('/oldest', function (req, res) {
  //   db.employees.aggregate(

  //     [

  //       {$group: {_id: "$gender", minbirth_date: { $min: "$birth_date" }}}

  //     ]

  //  )
  return res.json(query1)
});

app.get('/deptEmp', function (req, res) {
  // db.deptemp.aggregate([

  //   {$group : {_id : "$dept_no", total : {$sum : 1}} }

  //  ]) .pretty()
  return res.json(query2)
});

app.get('/deptMan', function (req, res) {
  // db.employees.aggregate([
  //   {$lookup: {from: "deptmanager", localField: "emp_no", foreignField: "emp_no", as: "details"}},
  //   {$match: {details: {$ne:[]}}},
  //   {$group : {_id : "$gender", count: { $sum: 1 }}}
  // ]).pretty()
  return res.json(query3)
});

app.get('/highPaid', function (req, res) {
  return res.json(query4)
});

app.get('/avgdDur', function (req, res) {
  return res.json(query5)
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening on port on ${port}`);
  }
});