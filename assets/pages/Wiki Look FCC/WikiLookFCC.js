$(document).ready(function() {
    $('#buscar').click(function () {
        var seach = $('#look').val();
        var urls = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+seach+"&format=json&callback=?";
        $('#puttingTings').html('');
        $.ajax({
            type:"GET",
            url:urls,
            async:true,
            dataType:"json",
            success: function (data) {
              if(data[1].length == 0){
                $('#puttingTings').append(
                    '<li>'+
                        '<div class="card blue-grey darken-1" data-pg-collapsed>'+
                            '<div class="card-content white-text cyan">'+
                                '<span class="card-title">There is no result for:</span>'+
                                '<blockquote>'+seach+'</blockquote>'+
                            '</div>'+
                        '</div>'+
                    '</li>'
                )
              }else {
                for (var i = 0; i < data[1].length; i++) {
                  $('#puttingTings').append(
                      '<li>' +
                          '<div class="card blue-grey darken-1" data-pg-collapsed>' +
                              '<div class="card-content white-text cyan">' +
                                  '<a class="card-title white-text waves-effect waves-block waves-light center-align" href="' + data[3][i] + '">' + data[1][i] + '</a>' +
                                  '<p class="center-align">' + data[2][i] + '</p>' +
                              '</div>' +
                          '</div>' +
                      '</li>'
                  )};
                }
              $('#look').val('');
            },
            error: function (errorMess) {
                alert("Dale la mata dando: "+ urls);
            }
        });
    });

    $('#look').keypress(function (e) {
        if (e.which == 13){
            $('#buscar').click();
        }
    });
});