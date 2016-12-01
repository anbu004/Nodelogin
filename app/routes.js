

var User = require('./models/User');

module.exports = function(app) {
   
    app.get('/allUser', function(req, res) {
		User.find({}, function(err, user) {
			res.json(user);
			console.log(user)
		});
	});

    app.post('/createUser',function(req,res){
		User.create(req.body , function (err, user) {
			if (err){
				res.send(err + "'error':'An error has occurred'");
			}else{
				res.send(user);
				console.log("<<<<<<user>>>>>>>"+user)
			}
		});
	});
	
		app.post('/login',function(req,res) {
		var data = req.body;
        var userEmail = data.email;
		User.findOne({ email: userEmail }, function (err, signUp) {
			if(signUp != undefined && signUp.email != undefined  && signUp.email == userEmail){
			res.send({'success':'Inside'});
				
			}else{
				res.send({'error':'email has been already Used!...'});
			}
		});

	});
};