function applyRedesign() {
    var rnd = Math.floor(Math.random() * 99999);
    jQuery('head').append('<link class="redesign-css" type="text/css" rel="stylesheet" href="http://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/celtics/css/1718-redesign.min.css?' + rnd + '" media="all"><link class="redesign-css" type="text/css" rel="stylesheet" href="http://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/celtics/css/1718-framework.min.css?' + rnd + '" media="all">');
    jQuery('.override-css').attr('disabled', true);
    jQuery('.navbar-brand img').attr('src', 'http://i.cdn.turner.com/nba/nba/.element/media/2.0/teamsites/celtics/media/celtics-secondary-white.svg');
    jQuery("body").addClass("new-style");
}

function darkNavImages(){
  jQuery('a[title="Main Menu 240x90 Promo - Tickets"] img').attr('src', "http://io.cnn.net/nba/nba/.element/media/2.0/teamsites/celtics/media/nbatickets-ko-240x90-dark.png");
  jQuery('a[title="Main Menu 240x90 Promo - Video"] img').attr('src', "http://io.cnn.net/nba/nba/.element/media/2.0/teamsites/celtics/media/NBCSB-Primary-Logo-240x77-dark.png");
  jQuery('a[title="Main Menu 240x90 Promo - Dancers"] img').attr('src', "http://io.cnn.net/nba/nba/.element/media/2.0/teamsites/celtics/media/2015-celtics-dancers-240x90-b-dark.png");
}

jQuery(document).ready(function() {
    applyRedesign();
    darkNavImages();
});