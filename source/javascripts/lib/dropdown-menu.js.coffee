class window.dropdown_menu
	init_menu: () ->
		$('.menu-element .wrapper-dropdown-2').mouseenter ()->
			if $('.open') != $(this).parent() && $('.open').length
				$('.open').removeClass('open')
			$(this).parent().addClass('open')
			return

		$('.menu-element .wrapper-dropdown-2').mouseleave (e)->
			target =  e.toElement
			if !target
				target = e.relatedTarget
			if !$(target).parents('.dropdown').length && !$(target).hasClass('dropdown')
				$(this).parent().removeClass('open')
		$('.menu-element .dropdown').mouseleave (e) ->
			if !$(target).parents('.wrapper-dropdown-2').length && !$(target).hasClass('.wrapper-dropdown-2')
				$(this).parent().removeClass('open')
