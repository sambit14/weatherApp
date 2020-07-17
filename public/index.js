const path = require('path');
const express =  require('express');
const app = express();
const hbs  = require('hbs')


const publicDirectoryPath =  path.join(__dirname,'../public');
const viewsPath  =  path.join(__dirname,'../views')
app.set('views', viewsPath);

app.set('view engine', 'hbs');
hbs.registerPartials(viewsPath)
app.use(express.static(publicDirectoryPath));


app.get('',(req,res)=>{
      res.render('index',{
          'title':'weather'
      })
});

// app.get('',(req,res)  =>{
//     res.send('<h1>hello</h1>')

// });
// app.get('/about',(req,res) =>{
//     res.send("about us page")
// })

app.listen(3000,()=>{
    console.log("server is running")
})