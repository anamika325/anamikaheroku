const express=require('express');
const exphbs=require('express-handlebars');
var app=express();
app.engine('handlebars',exphbs({defaultLayout:'mainpage'}));
app.set('view engine','handlebars');
app.use(express.static('views/static'));
app.use(express.urlencoded());
app.post('/getdata',(req,res)=>{
  var name=req.body.getname;
  var address=req.body.getaddress;
  var place=req.body.getplace;
  var mobile=req.body.getmob;
  var email=req.body.getemail;
   res.send(name+"<br>"+address+"<br>"+place+"<br>"+mobile+"<br>"+email+"<br>");
});
app.post('/login',(req,res)=>{
  var user=req.body.username;
  var pass=req.body.password;

  if(user=="admin"&&pass=="1234")
  {
    res.send("success");
  }
  else
  {
    res.send("failed");
  }
});


app.get('/',(req,res)=>{
  res.render('index',{name:'TOM'});
  //sres.send([{"name":"tom","age":23},{"name":"tini","age":23}] );
});
app.get('/about',(req,res)=>{
  res.render('about');
})
app.get('/home',(req,res)=>{
res.send("hi");
});
app.get('/contact',(req,res)=>{
    res.render('contact');
});
app.get('/gallery',(req,res)=>{
  res.render('gallery');
});
app.listen(3000,()=>{
  console.log('web app running successfully')
});