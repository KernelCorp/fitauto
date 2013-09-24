class window.dropdown_menu
	init_menu: () ->
		$('.menu-element .wrapper-dropdown-2').mouseenter ()->
			if $('.mainMenu .open') != $(this).parent() && $('.mainMenu .open').length
				$('.mainMenu .open').removeClass('open')
			if $(this).parent().find('li').length
				$(this).parent().addClass('open')
			else
				$(this).parent().addClass('hover')
			return

		$('.menu-element .wrapper-dropdown-2').mouseleave (e)->
			target =  e.toElement
			if target == undefined
				target = e.relatedTarget
			if !$(target).parents('.dropdown').length && !$(target).hasClass('dropdown')
				$(this).parent().removeClass('open')
				$(this).parent().removeClass('hover')
		$('.menu-element .dropdown').mouseleave (e) ->
			target =  e.toElement
			if target == 'undefined'
				target = e.relatedTarget
			if !$(target).parents('.wrapper-dropdown-2').length && !$(target).hasClass('.wrapper-dropdown-2')
				$(this).parent().removeClass('open')
				$(this).parent().removeClass('hover')
