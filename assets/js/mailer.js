$(document).ready(function(){

  // Get the form.
  var form = $('#ajax-contact');

  // Get the messages div.
  var formMessages = $('#form-messages');

  // Set up an event listener for the contact form.
  $(form).submit(function(e) {
    // Stop the browser from submitting the form.
    e.preventDefault();

    // Serialize the form data.
    var formData = $(form).serialize();

              $.ajax({
                type: 'POST',
                //Send the form calling mailer.php
                url: 'assets/php/mailer.php',
                data: formData,
                dataType:'HTML'
                }).done(function(response){
                  $(formMessages).text(response);
                  // Set the message text color.
                   $('#form-messages').removeClass('error');
                   $('#form-messages').addClass('success');
                  // Clear the form.
                  $('#name').val('');
                  $('#email').val('');
                  $('#message').val('');
                })

  });
  });

 //Rcaptcha AJAX call
 // // Confirm it is not a robot calling the recaptcha script with AJAX.
 //    $.ajax({
 //      type: 'POST',
 //      url: 'assets/php/recaptcha.php',
 //      dataType:'HTML'
 //     }).done(function(response){
 //       // Get verification if it is a real person.
 //       console.log(response)
 //       if(response == 'true'){


 //       }else{
 //          $('#form-messages').removeClass('success');
 //          $('#form-messages').addClass('error');
 //          $('#form-messages').text('Please complete the captcha correctly.');

 //        }


 // });