const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = process.env.PORT || 5500;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended : true}));

app.get('/api/hello', (req, res) => {
    res.send({message : `hello Express!`});
});

app.listen(port, ()=> console.log(`Listening on port ${port}`)); // 숫자 1왼쪽의 따옴표 같이생긴것ㅇ
