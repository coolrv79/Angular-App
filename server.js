var express=require('express');
var app=express();
var path=require('path');

const PORT=process.env.PORT || 8090;
app.use(express.static(path.join(__dirname,'/dist')));

app.get('*',function(req,res){
	res.sendFile(path.join(__dirname,'dist/index.html'));
})
app.listen(PORT);