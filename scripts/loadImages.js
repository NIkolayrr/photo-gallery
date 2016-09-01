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
        for(let image of data){
            let $img = $('<img>');
            let $li = $('<li>');
            let $descriptionDiv = $('<div class="overlay">');
            let $p = $('<p>');

            $ul.append($li.append($img.attr('src',image.url)));
            $li.append($descriptionDiv.append($p.text(image.description)));
            
            $('#galleryWrap').append($ul);
        }
    }

    function showErrors(data, status) {
        let errorMsg = "Error: " + JSON.stringify(data);
        showError(errorMsg);
    }
