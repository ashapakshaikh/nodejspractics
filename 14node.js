var http = require('http');
var nodemailer = require('nodemailer');

http.createServer(function(req,res){


var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user:'yourgmail@gmail.com',
		pass:'yourpasswd'
	}
});

var mailOptions = {
	from: 'your@gmail.com',
	to:'friends email@gmail.com ',
	subject:'Sending Email using Nodejs',
	text:'That was easy!missing home!!'
};

transporter.sendMail(mailOptions, function(error,info){
	if (error){
		console.log(error);
	}else {
		console.log('Email sent:' + info.response);
	}
});
}).listen(9090);