$( document ).ready(function() {
    $.get("/getImages", function(data) {
        var images = JSON.parse(data)["images"];
        for (i = 0; i < images.length; i++) {
            document.getElementById("imageList").innerHTML += "<a href=\"images/" + images[i] + "\"> <image src=\"images/" + images[i] + "\"/></a>";
        }
    });
});