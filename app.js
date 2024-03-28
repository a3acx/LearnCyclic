const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(418).send("sathy")
})

const users = [
  {username: "sathy", password: "sathy"}
];

app.post('/cp', function(req, res, next) {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username && user.password === password);

  if (user){
    res.status(200).json({ success: true, username: user.username });
    console.log('apporved user ' + user.username + "they had enough sathyness to pass" );


  } else {
    res.status(401).json({ success: false, message: "no sathyness to pass!!" });
    console.log('denied user ' + "they had enough sathyness to pass" );
  };



})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})