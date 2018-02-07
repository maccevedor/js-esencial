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
    
        console.log('valido ' , isValidEmail())
    });

