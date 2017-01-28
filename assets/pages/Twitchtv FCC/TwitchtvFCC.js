$(document).ready(function() {
    var channels = [
        ["freecodecamp","FreeCodeCamp","https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png"],
        ["pink_sparkles","Pink_Sparkles","https://static-cdn.jtvnw.net/jtv_user_pictures/pink_sparkles-profile_image-406fb7b3682dc8ee-300x300.png"],
        ["gamesdonequick","GamesDoneQuick","https://static-cdn.jtvnw.net/jtv_user_pictures/gamesdonequick-profile_image-c4aa1bb1d9604981-300x300.png"],
        ["hireztv","HiRezTV","https://static-cdn.jtvnw.net/jtv_user_pictures/hireztv-profile_image-65062592ee8e9541-300x300.png"],
        ["totalbiscuit","Totalbiscuit","https://static-cdn.jtvnw.net/jtv_user_pictures/totalbiscuit-profile_image-502dcf27f785c632-300x300.png"],
        ["weirdpancake","WeirdPancake","https://static-cdn.jtvnw.net/jtv_user_pictures/weirdpancake-profile_image-6f78db6b2609878d-300x300.jpeg"],
        ["esl_dota2","ESL_DOTA2","https://static-cdn.jtvnw.net/jtv_user_pictures/esl_dota2-profile_image-16a7751762028de6-300x300.jpeg"],
        ["asusrog","AUSROG","https://static-cdn.jtvnw.net/jtv_user_pictures/asusrog-profile_image-a1dbccd6ee767752-300x300.jpeg"],
        ["cdnthe3rd","CDNThe3rd","https://static-cdn.jtvnw.net/jtv_user_pictures/cdnthe3rd-profile_image-8246eb11f7f4b215-300x300.jpeg"],
        ["wagamamatv","WagamamaTV","https://static-cdn.jtvnw.net/jtv_user_pictures/wagamamatv-profile_image-fcc33886efd92c4f-300x300.jpeg"]]

    for (var i = 0; i <channels.length; i++){
        cargando(channels[i]);
    }
    $(".dropdown-button").dropdown();

});

function cargando(channel) {
    var url = "https://wind-bow.gomix.me/twitch-api/streams/"+channel[0];
    $.ajax({
        type:"GET",
        url:url,
        async:true,
        dataType:"json",
        success: function (data) {
            if (data['stream'] != null){
                chanellsOnline(data, channel);
            }else {
                programasOffLine(channel);
            };
        },
        error: function (errorMess) {
            alert("No conecto");
        }
    });
}


function programasOffLine(channel) {
    $('#offlineChanels').append(
        '<li>'+
        '<div class="card blue-grey darken-1 margenes" data-pg-collapsed>'+
        '<div class="card-content white-text pink">'+
        '<a class="card-title white-text waves-effect waves-block waves-light" href="https://www.twitch.tv/'+channel[0]+'">'+channel[1]+'</a>'+
        '<img src="'+channel[2]+'" class="responsive-img circle" width="50" height="50">'+
        '</div>'+
        '</div>'+
        '</li>'
    );

    $('#allChanels').append(
        '<li>'+
        '<div class="card blue-grey darken-1 margenes" data-pg-collapsed>'+
        '<div class="card-content white-text pink">'+
        '<a class="card-title white-text waves-effect waves-block waves-light" href="https://www.twitch.tv/'+channel[0]+'">'+channel[1]+'</a>'+
        '<img src="'+channel[2]+'" class="responsive-img circle" width="50" height="50">'+
        '</div>'+
        '</div>'+
        '</li>'
    );
}


function chanellsOnline(data, channel) {
    $('#onlineChanells').append(
        '<li>'+
        '<div class="card blue-grey darken-1 margenes" data-pg-collapsed>'+
        '<div class="card-content white-text blue-grey">'+
        '<a class="card-title white-text waves-effect waves-block waves-light" href="'+data['stream']['channel']['url']+'">'+data['stream']['channel']['display_name']+'</a>'+
        '<img src="'+channel[2]+'" class="responsive-img circle" width="50" height="50">'+
        '<p>'+data['stream']['channel']['game']+'</p>'+
        '</div>'+
        '</div>'+
        '</li>'
    );

    $('#allChanels').append(
        '<li>'+
        '<div class="card blue-grey darken-1 margenes" data-pg-collapsed>'+
        '<div class="card-content white-text blue-grey">'+
        '<a class="card-title white-text waves-effect waves-block waves-light" href="'+data['stream']['channel']['url']+'">'+data['stream']['channel']['display_name']+'</a>'+
        '<img src="'+channel[2]+'" class="responsive-img circle" width="50" height="50">'+
        '<p>'+data['stream']['channel']['game']+'</p>'+
        '</div>'+
        '</div>'+
        '</li>'
    );
}