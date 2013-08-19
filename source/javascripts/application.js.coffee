#= require_tree ./vendor
#= require_tree ./lib
$(document).ready () ->
  $('.dropdown-submenu').mouseover () ->
	  $(this).children('.dropdown-menu').css('height', $(this).parent().css('height'))