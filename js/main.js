// 
// Using http://instafeedjs.com/ to get latest 20 images from panzers_deli instagram feed and randomly show one image.
// 
var userFeed = new Instafeed({
    get: 'user',
    userId: '1415506537', // this was found by putting 'panzers-deli' into this page https://smashballoon.com/instagram-feed/find-instagram-user-id/
    accessToken: '1415506537.87f4756.1743920e10ab40abbf9d08d12bdfac2d', // Get this by using (note values in square backets need to be udpated with real values - use website URL for redirect URI. e.g. http://www.panzers.co.uk): https://api.instagram.com/oauth/authorize/?client_id=[CLIENT-ID]&redirect_uri=[REDIRECT-URI]&response_type=token&scope=public_content
    resolution: 'standard_resolution',
    limit: '20',
    sortBy: 'random',
    after: function () {
        var images = $("#instafeed").find('a');
        $(images.slice(1, images.length)).remove();
    }
});
userFeed.run();