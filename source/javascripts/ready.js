/**
 * Created with JetBrains PhpStorm.
 * User: solov
 * Date: 8/14/13
 * Time: 1:04 PM
 * To change this template use File | Settings | File Templates.
 */
function DropDown(el) {
    this.dd = el;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            event.stopPropagation();
        });
    }
}

$(function() {

    var dd = new DropDown( $('.dd') );

    $(document).click(function() {
        $('.wrapper-dropdown-top').removeClass('active');
    });
    $('.dropdown-toggle').dropdown()

});

jQuery(document).ready(function() {
    jQuery('#mycarousel').jcarousel({
        wrap: 'circular'
    });
	 jQuery('#blogCarusel').jcarousel({
		wrap: 'circular'
	});
});
