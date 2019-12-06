$('li').each(function(index, value) {
    var anchor = $(this).html();
    var link = $(anchor).attr('href').replace(/ /g, '');
    if (link === location.pathname) {
        $(this).attr("class", "active");
    }
});
