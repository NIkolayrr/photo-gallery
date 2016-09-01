// Kinvey Authorization
let kinveyBaseUrl = "https://baas.kinvey.com/";
let kinveyAppID = "kid_S1o3uK2q";
let kinveyAppSecret = "094983de39be484f9e2b746137d5d403";
let _guestCredentials = "8e20e2a5-4384-4d08-8ed0-0640620d0414.QCAp8Kwwo2CPQ0UTMRBl/Jl8gAgQVVpWZ947jDxHdII=";
var ospry = new Ospry('pk-test-nlwh4l58p9i9uuhgd4wlve1i');

let app = Sammy('#contentWrap', function () {
    this.get('#/', function () {
        this.$element().load('./templates/welcome-user.html');
    });

    this.get('#/Register', function () {
        this.$element().load('./templates/register.html');
    });

    this.get('#/Sign-in', function () {
        this.$element().load('./templates/sign-in.html');
        reloadGallery();
    });

    this.get('#/Gallery', function () {
        this.$element().load('./templates/gallery.html');
    });

    this.get('#/Upload', function () {
        this.$element().load('./templates/upload.html');
    });

});

app.run('#/');

function reloadGallery() {
        $('#galleryWrap').hide().fadeIn();
}

$('#contentWrap').on('click', '#registerBtn', function () {
    register();
});
$('#contentWrap').on('click', '#btnLogin', function () {
        login();
});
$('#contentWrap').on('click', '#btnUpload', function (e) {
    submitPhoto();
});
$('#logout').on('click',function(){
   sessionStorage.clear();
    $('#logout').hide();
    $('#lodinLink').show();
    $('#uploadLink').hide();
});


function hideLogin(){
    $('#lodinLink').hide();
    $('#logout').show();
}

function showUpload() {
    if (sessionStorage.getItem('authToken') != null)
        $('#uploadLink').show();
}

function showInfo(message) {
    $('#showInfo').text(message);
    $('#showInfo').show();
    setTimeout(function () {
        $('#showInfo').fadeOut()
    }, 1000);
}
function showError(message) {
    $('#showError').text(message);
    $('#showError').show();
    setTimeout(function () {
        $('#showError').fadeOut()
    }, 10000);
}

$(document).on({
    ajaxStart: function () {
        $('#loading').show();
    },
    ajaxStop: function () {
        $('#loading').hide();
    }
});