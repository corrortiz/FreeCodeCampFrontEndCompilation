function getQuote() {
    $.ajax({
        headers: {
            "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
        success: function(response) {
            var r = JSON.parse(response);
            quoteX = r.quote;
            autorX = r.author;
            $('#add').html('<h5><blockquote><q>' + quoteX + '</q></blockquote></h5>');
            $('#cuota').text(autorX);
        }
    });
}

var quoteX;
var autorX;

$(document).ready(function() {
    getQuote();

    $('#getcuota').click(function() {
        getQuote();
    });

    $('#bttTiwtter').click(function() {
        tweetQuote();
    });

    function tweetQuote() {
        window.open("https://twitter.com/intent/tweet?&original_referer=https%3A%2F%2Fdev.twitter.com%2Fweb%2Ftweet-button&ref_src=twsrc%5Etfw&related=twitterapi%2Ctwitter&text=" + quoteX + ' from ' + autorX + ' #FCCRules');
    }
});

