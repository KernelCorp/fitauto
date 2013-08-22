#= require_tree ./vendor
#= require_tree ./lib

$(document).ready () ->

	droplist = new window.droplist
	droplist.droplist_init()
	dropdown_menu = new window.dropdown_menu
	dropdown_menu.init_menu()

	$('.customSelect').customSelect()