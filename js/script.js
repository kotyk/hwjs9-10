
$(function () {

    var $menuItem = $('.menu-item');
    $menuItem.hover(function () {
        var $submenu1 = $(this).find('.submenu1');
        $submenu1.stop().slideToggle();
    });

    var $submenu1Item = $('.submenu1-item');
    $submenu1Item.hover(function () {
        var $submenu2 = $(this).find('.submenu2');
        $submenu2.stop().slideToggle();
    });

    var $submenu2Item = $('.submenu2-item');
    $submenu2Item.hover(function () {
        var $submenu3 = $(this).find('.submenu3');
        $submenu3.stop().slideToggle();
    });

});

$(function () {
   $("select").selectbox();
});


