/*
* Contact form
* 18-01-2019
* Modal validation message with jQuery 3.3.1
*/

$(document).ready(function(){
   
   // MODAL VALIDATION MESSAGE ================================
   $('#btnSend').click(function(){
      
      var errors = '';
      
      // Name validation ======================================
      if( $('#name').val() == '' ){
         errors += '<p class="tx">Escriba el nombre</p>';
      }
      
      // Email validation ======================================
      if( $('#email').val() == '' ){
         errors += '<p class="tx">Indique una dirección de correo electrónico</p>';
      }
      
      // Message validation ===================================
      if( $('#message').val() == '' ){
         errors += '<p class="tx">Escriba un mensaje</p>';
      }
      
      // Modal Message ==========================================
      if( errors == '' == false){
         //$('form').submit(function() { return false; });
                  
         var modalMessage =   '<div class="modal-w">' +
                                 '<div class="modal-msg">' +
                                    '<img class="btn-close" id="btnClose" src="images/icon-close.svg" alt="close" title="Close" width="20px" height="20px"/>' +
                                    '<h3 class="line-sep">Errores encontrados</h3>' +
                                    errors +
                                 '</div>' +  
                              '</div>';
         
         $('body').append(modalMessage);
      }
      
      // Close Modal Message ==========================================
      $('#btnClose').click(function(){
         $('.modal-w').remove();
      });
   });
   
});