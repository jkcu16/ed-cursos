$ = jQuery;
$(function(){
	// Escriba aquí su código jQuery
  var loginBlock = $('#block-user-login');
  var loginButton = $('#ingresar');
  loginBlock.find('.content').prepend('<span class="icon-cerrar" id="loginClose"></span>');

  loginButton.on('click',function(e){
    loginBlock.addClass('mostrar');
    e.preventDefault();
  });
  $('#loginClose').on('click',function(){
    loginBlock.removeClass('mostrar');
  });
});