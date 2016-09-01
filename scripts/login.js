function login() {
    const kinveyLoginUrl = kinveyBaseUrl + "user/" + kinveyAppID + "/login";

    let userData = {
        username: $('#usernameLogin').val(),
        password: $('#passwordLogin').val()
    };
    $.ajax({
        method: "POST",
        url: kinveyLoginUrl,
        headers: {"Authorization": "Kinvey " + _guestCredentials},
        data: userData,
        success: loginSuccess,
        error: handleAjaxError
    });

    function loginSuccess(response) {
        let userAuth = response._kmd.authtoken;
        sessionStorage.setItem('authToken', userAuth);
        showInfo('Login successful.');
        showUpload();
        hideLogin();
    }

    function handleAjaxError(response) {
        showError(JSON.stringify(response));
    }
}

function logout(){
    sessionStorage.clear();
}
