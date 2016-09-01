$('#up-form').on('submit', function(e) {
    e.preventDefault();
    ospry.up({
        form: this,
        imageReady: onUpload
    });
});

var onUpload = function (err, metadata) {

    $.ajax({
        method: "POST",
        url: "https://baas.kinvey.com/appdata/" + kinveyAppID + "/images",
        headers: { "Authorization": "Kinvey " + sessionStorage.getItem('authToken') },
        data: {
            url: metadata.url,
            description: $('#uploadDescription').val()
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