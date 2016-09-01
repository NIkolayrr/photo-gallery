    $.ajax({
        method: "GET",
        url: "https://baas.kinvey.com/appdata/" + kinveyAppID + "/images",
        headers: {"Authorization": "Kinvey " + _guestCredentials},
        success: showImages,
        error: showErrors
    });

    function showImages(data, status) {
        let ul = $('<ul>');
        for (var image of data) {
            ospry.get({
                url: image.url,
                imageReady: function (err, domImage, index) {
                    if (err === null) {
                        ul.append($('<li>').html(domImage));
                    }
                    $('#galleryWrap').append(ul);
                }
            });
        }
    }

    function showErrors(data, status) {
        let errorMsg = "Error: " + JSON.stringify(data);
        showError(errorMsg);
    }
