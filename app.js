const express = require('express');



// express app
const app = express();



app.set('view engine', 'ejs');

// listen for requests




//middleware & static files
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index');
})

// 404 page

app.use((req,res)=>{

    res.render('404');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
