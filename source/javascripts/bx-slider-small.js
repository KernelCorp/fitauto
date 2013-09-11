function init_gallery(st)
{
    var list = Array();

    var el = $('#'+st+'-gallery').bxSlider({
        controls: false,
        pager: true,
        pagerCustom: '#'+st+'-example .gallery-controls',
        mode: 'fade',
        preloadImages: 'visible'
    });
    list.push(el);

    $('#'+st+'-example .gallery-controls').each(function(){
        var e = $(this).bxSlider({
            controls: true,
            pager: false,
            nextSelector: '#'+st+'-pg-next',
            prevSelector: '#'+st+'-pg-prev',
            slideWidth: 104,
            minSlides: 3,
            maxSlides: 3,
            slideMargin: 10,
            preloadImages: 'visible'
        });
        list.push(e);
    });

    return list;
}
$(document).ready(function()
{
    var gl_premium = init_gallery('premium');
    var gl_standart = init_gallery('standart');
    var gl_express = init_gallery('express');

    $('.Standart_building_link').on('click', function(){
        $('#premium-info-text-block [data-target^=collapse_]').collapse('hide')
        $('#express-info-text-block [data-target^=collapse_]').collapse('hide')
        $('#Express_building').hide('slow');
        $('#Premium_building').hide('slow');
        $('#Standart_building').show('slow', function(){
            gl_standart.every(function(e){
                e.redrawSlider();
                return true;
            });
        });
        return false;
    })
    $('.Express_building_link').on('click', function(){
        $('#premium-info-text-block [data-target^=collapse_]').collapse('hide')
        $('#standart-info-text-block [data-target^=collapse_]').collapse('hide')
        $('#Standart_building').hide('slow');
        $('#Premium_building').hide('slow');
        $('#Express_building').show('slow', function() {
            gl_express.every(function(e){
                e.redrawSlider();
                return true;
            });
        });

        return false;
    })
    $('.Premium_building_link').on('click', function(){
        $('#express-info-text-block [data-target^=collapse_]').collapse('hide')
        $('#standart-info-text-block [data-target^=collapse_]').collapse('hide')
        $('#Express_building').hide('slow');
        $('#Standart_building').hide('slow');
        $('#Premium_building').show('slow', function (){
            gl_premium.every(function(e){
                e.redrawSlider();
                return true;
            });
        });

        return false;
    })

});

