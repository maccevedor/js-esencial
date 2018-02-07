$(function (){

	//var contactForm = document.getElementById('contactForm')

	//contactForm.onSubmit = function(e){
	//	e.preventDefault();
	//}

	var isValidEmail = function(){
		//var email = document.getElemtById('email')
		var email = 'maccevedor@gmail.com'
		return /^\w+([\.\+\-]?\w+)*@([\.-]?\w+)*(\.\w{2,7})+$/.test(email)
    }
   
	var isValidTwitter = function (){
		var twitter = 'maccevedor'
		return /^@(\w+)$/.test(twitter)
	}

        console.log('valido ' , isValidTwitter())
    });

