const express=require('express');
const blogpost = require('../models/blogpost');
const router=express.Router();
const Blogpost=require('../models/blogpost');
//const mongoose = require('mongoose');

router.get('/test',(req,res)=>{
	res.status(200).json({msg:'test valide',date: new Date()});
});
router.get('/blog-posts', (req, res) => {
	blogpost.find()
		.sort({'createdOn': -1})
		.exec()
		.then(blogposts=>res.status(200).json(blogposts))
		.catch(err=>res.status(500).json({
			message:'blog posts not found',
			error:err
		}));
});
router.post('/blog-posts',(req,res)=>{
	console.log('res.body',req.body) ;
	const blogpost=new Blogpost(req.body);
	blogpost.save((err,blogpost)=>{
		if(err){
			return res.status(500).json(err);
		}
		else{
			return res.status(200).json(blogpost);
		}
	});

});
router.get('/blog-posts/:id', (req, res) => {
	var id=req.params.id;
	blogpost.findById(id)
		.exec()
		.then(blogposts=>res.status(200).json(blogposts))
		.catch(err=>res.status(500).json({
			message:'blog posts not found',
			error:err
		}));
});


router.delete('/blog-posts/:id', (req, res) => {
	// retrieves the query parameter: http://localhost:3000/api/v1/blog-posts?ids=5c1133b8225e420884687048,5c1133b6225e420884687047
/*	const ids = req.query.ids;
	console.log('query allIds', ids);
	const allIds = ids.split(',').map(id => {
		// casting as a mongoose ObjectId	
		if (id.match(/^[0-9a-fA-F]{24}$/)) {
			return mongoose.Types.ObjectId((id));		 
		}else {
			console.log('id is not valid', id);
			return -1;
		}
	});
	const condition = { _id: { $in: allIds} };
	Blogpost.deleteMany(condition, (err, result) => {
		if (err) {
			return res.status(500).json(err);
		}
		res.status(202).json(result);
	});
    */
	const id=req.params.id;
	Blogpost.findByIdAndDelete(id,(err,blogpost)=>{
		if(err){
			return res.status(500).json(err);

		}
		res.status(202).json({msg:`blogpost deleted successfully ${blogpost.id}`});
	});
});
module.exports=router;