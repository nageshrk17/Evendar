/* Bootstrap Carousel */

function carouselFix() {
    $(".carousel.slide").carousel("pause");
    $('.carousel.slide .item').removeClass('active');
    $('.carousel.slide').find('.item:first').addClass('active');
}
$(document).ready(function() {
    carouselFix();
});

/* Function for Scrolldown */

$('.smoothscroll').on('click', function(e) {
    e.preventDefault();

    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top
    }, 800, 'swing', function() {
        window.location.hash = target;
    });
});

/* Form Validation*/

var isValid = true;


function validate() {
    var errors = [];
    isValid = true;

    // Validation for User Name

    var name = document.getElementById('txtUserName');
    var nameReg = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;

    if (!nameReg.test(name.value)) {
        isValid = false;
        errors[errors.length] = "Please enter a valid User Name.";
    }

    // Validation for SurName

    var sur = document.getElementById('txtSurName');
    var surReg = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/;

    if (!surReg.test(sur.value)) {
        isValid = false;
        errors[errors.length] = "Please enter a valid Surname.";
    }

    // Validation for E-mail Address.

    var email = document.getElementById('txtEmail');
    var emailReg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!emailReg.test(email.value)) {
        isValid = false;
        errors[errors.length] = "Please enter a valid Email Address.";
    }

    // Validation for Textarea.

    var request = document.getElementById('txtmsg');
    var msgReg = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ,.])*$/;

    if (!msgReg.test(request.value)) {
        isValid = false;
        errors[errors.length] = "Please enter a valid Message.";
    }

    if (errors.length > 0) {
        reportErrors(errors);
        return false;
    }

    if (isValid === true) {
        alert("Your Message was sent Successfully");
        return true;
    }

}

// Function to Popup the Errors

function reportErrors(errors) {
    var msg = "There were some problems...\n";
    var numError;
    for (var i = 0; i < errors.length; i++) {
        numError = i + 1;
        msg += "\n" + numError + ". " + errors[i] + "\n";
    }
    alert(msg);
}
