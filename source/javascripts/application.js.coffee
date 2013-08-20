#= require_tree ./vendor
#= require_tree ./lib
$(document).ready () ->
	$('#sub1').mouseenter () ->
		$('.dropdown.submenu#sub1').show('slow')
		$('.dropdown-menu').addClass('no-border')
		return

	$('.dropdown').mouseleave (e) ->
		if !$(e.toElement).parents('.dropdown.dropdown-menu').length && !$(e.toElement).hasClass('dropdown', 'dropdown-menu')
			$('.dropdown.submenu#sub1').hide('slow')
			$('.dropdown-menu').removeClass('no-border')
		return
	$('.dropdown-sub').mouseleave (e) ->
		console.log e.toElement
		if $(e.toElement).is('.level0 li, .level0 a')
			$('.dropdown.submenu#sub1').hide('slow')
			$('.dropdown-menu').removeClass('no-border')
		return