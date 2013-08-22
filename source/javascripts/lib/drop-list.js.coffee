class window.droplist

	open_or_close: () ->
		if $(this).hasClass('open')
			$(this).removeClass('open')
		else
			$(this).addClass('open')
		return

	droplist_init: ()->
		$('.service-list li.sub-li').click @open_or_close

