function loadImagesAjax() {
    $.ajax({
        method: "GET",
        url: "https://baas.kinvey.com/appdata/" + kinveyAppID + "/images",
        headers: {"Authorization": "Kinvey " + _guestCredentials},
        success: showImages,
        error: showErrors
    });
}

function showImages(data, status) {
    let $ul = $('<ul>');
    for (let image of data) {
        let $img = $('<img>');
        let $li = $('<li>');

        $ul.append($li.append($img.attr('src', image.url)));

        if (image.description.length > 0) {
            let $anchor = $('<a target="_blank" class="view-image">View</a>');
            let $descriptionDiv = $('<div class="overlay">');
            let $p = $('<p>');

            $anchor.attr('href', image.url);
            $li.append($descriptionDiv.append($p.text(image.description)).append($anchor));
        }

        $('#galleryWrap').append($ul);
    }
}

function showErrors(data, status) {
    let errorMsg = "Error: " + JSON.stringify(data);
    showError(errorMsg);
}
