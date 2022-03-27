
$(function() {
    $(".btn-submit").on("click", validate);
   
    // Validate email
    function validateEmail(email) {
       var re = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@([a-z0-9_-]+\.)*[a-z0-9_-]\.*([a-z]){2,6}$/;
      return re.test(String(email).toLowerCase());
    }
     
    // send form
    function sendForm() {
      $(".error").text("Form sending").fadeIn();
    }
   
    // validate email and send form after success validation
    function validate() {
      var email = $(".email").val();
      var $error = $(".error");
      $error.text("");
   
      if (validateEmail(email)) {
        $error.fadeOut();
        sendForm();
      } else {
        $error.fadeIn();
        $error.text(email + " is not valid");
      }
      return false;
    }
  });

  $(function() {
    $(".btn-submit").on("click", validate);
   
    
    function validateEmail(number) {
       var re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,12}(\s*)?$/;
      return re.test(String(number).toLowerCase());
    }
     
    // send form
    function sendForm() {
      $(".error").text("Form sending").fadeIn();
    }
   
    // validate number and send form after success validation
    function validate() {
      var number = $(".number").val();
      var $error = $(".error");
      $error.text("");
   
      if (validateEmail(number)) {
        $error.fadeOut();
        sendForm();
      } else {
        $error.fadeIn();
        $error.text(number + " is not valid");
      }
      return false;
    }
  });