class window.dropdown_menu
	init_menu: () ->
		$('.menu-element .wrapper-dropdown-2').mouseenter ()->
			if $('.open') != $(this).parent() && $('.open').length
				$('.open').removeClass('open')
			$(this).parent().addClass('open')
			return

		$('.menu-element .wrapper-dropdown-2').mouseleave (e)->
			if !$(e.toElement).parents('.dropdown').length && !$(e.toElement).hasClass('dropdown')
				$(this).parent().removeClass('open')
		$('.menu-element .dropdown').mouseleave (e) ->
			if !$(e.toElement).parents('.wrapper-dropdown-2').length && !$(e.toElement).hasClass('.wrapper-dropdown-2')
				$(this).parent().removeClass('open')
