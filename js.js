// JavaScript Document
$(document).ready(function() {
  function validateText(){
		var text = $('#name').val();
		if(!isNaN(text) || text.length<=3){alert('Не правильно введено имя. Имя должно быть не меньше 3х символов'); $('#name').val('')}
	};
	function validateMail(){
		var mail = $('#email').val();
		var regV = /\w+@[a-z]+\.[a-z]{1,3}/;
		var check = mail.search(regV);
		if(check === -1){alert('email адрес введен не правильно. Укажите корректный адрес.');$('#email').val(' ')}
	};
	$('#name').blur(validateText);
	$('#email').blur(validateMail);
    $('button').click(function(){
        var text = $('#textarea').val();
        if(text.length === 0){alert('Пожелание обязательно!')}  
        else {
            
            $('#footer').append('<div id="newDiv">' + '<span class="newDiv">' + text + '</span>'+'</div>'); 
          
        }      
	});
	
});
