function register() {
    const kinveyLoginUrl = kinveyBaseUrl + "user/" + kinveyAppID + "/";
    const kinveyAuthHeaders = {
        'Authorization': "Basic " + btoa(kinveyAppID + ":" + kinveyAppSecret),
    };

    let userData = {
        username: $('#registerUser').val(),
        password: $('#registerPass').val()
    };
    $.ajax({
        method: "POST",
        url: kinveyLoginUrl,
        headers: kinveyAuthHeaders,
        data: userData,
        success: registerSuccess,
        error: showAjaxErrors
    });

    function registerSuccess(response) {
        let userAuth = response._kmd.authtoken;
        sessionStorage.setItem('authToken', userAuth);
        showInfo('registered new user');
        window.location = "#/Sign-in";
    }

    function showAjaxErrors(response) {
        showError(JSON.stringify(response));
    }
}