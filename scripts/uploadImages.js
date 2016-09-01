$('#up-form').on('submit', function(e) {
    e.preventDefault();
    ospry.up({
        form: this,
        imageReady: onUpload
    });
});

var onUpload = function (err, metadata) {

    let _username = "guest", _password = "guest";
    let authBase64 = btoa(_username + ":" + _password);

    $.ajax({
        method: "POST",
        url: "https://baas.kinvey.com/appdata/" + kinveyAppID + "/images",
        headers: { "Authorization": "Basic " + authBase64 },
        data: {
            url: metadata.url
        },
        success: showSuccess,
        error: showErrors
    });
    function showSuccess(data, status) {
        showInfo("Uploaded: " + JSON.stringify(data));
    }

    function showErrors(data, status) {
        showError("Error: " + JSON.stringify(data));
    }
}