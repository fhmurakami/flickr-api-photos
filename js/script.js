$(function() {
    var flickrApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"
    
    $.getJSON(flickrApiUrl, {
        tags: "sun, beach, landscape",
        tagmode: "all",
        format: "json"
    }).done(function(data) {
        console.log(data);
        $.each(data.items, function(index, item) {
            console.log(item);
            $("<img>").attr("src", item.media.m).appendTo("#flickr");
            
            if (index == 5) {
                return false;
            }
        })
    }).fail(function() {
        alert("AJAX call failed")
    })
});