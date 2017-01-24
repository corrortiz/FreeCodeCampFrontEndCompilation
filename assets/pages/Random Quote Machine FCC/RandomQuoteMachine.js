var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://quotesondesign.com/wp-json/posts? filter[orderby]=rand&filter[posts_per_page]=1&callback=?",
    "method": "GET",
    "headers": {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }
};

var quote;

$(document).ready(function() {
    $.ajax(settings).done(function (response) {
        quote = response[0].content;
        $('#add').append(response[0].content);
        $('#cuota').text(response[0].title);
    });

    $('#getcuota').click(function() {
        $.ajax(settings).done(function (response) {
            quote = response[0].content;
            $('#add').append(response[0].content);
            $('#cuota').text(response[0].title);
        });
    });

    $('#bttTiwtter').click(function() {
        tweetQuote();
    });

    function tweetQuote() {
        window.open("https://twitter.com/intent/tweet?&original_referer=https%3A%2F%2Fdev.twitter.com%2Fweb%2Ftweet-button&ref_src=twsrc%5Etfw&related=twitterapi%2Ctwitter&text=" + quote);
    }
});

