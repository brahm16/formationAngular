const express = require('express');
const app = express();
const api = require('./api/v1');
const cors=require('cors');
const bodyParser=require('body-parser');

const mongoose=require('mongoose');
const connection=mongoose.connection;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.set('port',(process.env.port || 3000));
app.use(cors());
app.use('/api/v1',api);
app.use((req,res)=>{
	const err=new Error('404 - not found');
	err.status=404;
	res.json(err);

});
mongoose.connect('mongodb://localhost:27017/whiskycms', { useNewUrlParser: true,useUnifiedTopology: true });
connection.on('error',(err)=>{
	console.log(`connection t mongodb establish ${err.message}`);
});
connection.once('open',()=>{
	console.log('connected to mongodb');
});
app.listen(app.get('port'),()=>{
	console.log(`express server run ${app.get('port')}`);
});