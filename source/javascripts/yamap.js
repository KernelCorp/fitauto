var yamap;

(function() {
	var placemarks = [];
	ymaps.ready(function() {
		yamap = new ymaps.Map("yamap", {
			center: [54, 85],
			zoom: 6
		});

		var markerTemplate = ymaps.templateLayoutFactory.createClass("<div class='date marker_wrapper $[properties.type]'><p>$[properties.content]</p></div>"),
			balloonTemplate = ymaps.templateLayoutFactory.createClass(
				["<div class='balloon_wrapper'>",
				"<div class='balloon_image'>",
				"<a class='balloon_close' href='javascript:{}'></a>",
				"<img src='$[properties.balloonImageSrc]'/>",
				"<div class='date balloon_absolute $[properties.type]'>$[properties.content]</div></div>",
				"<div class='description_wrapper'>",
				"<ul class='services'>",
				"<li class='repair'></li>",
				"<li class='diagnostics'></li>",
				"<li class='plan'></li>",
				"<li class='replace'></li>",
				"<li class='tireservice'></li>",
				"</ul>",
				"<p>($[properties.phone.code]) <b>$[properties.phone.number]</b></p>",
				"<p>$[properties.address]</p>",
				"<p><b>Время работы:</b></p>",
				"<p>$[properties.time.when]: <b>$[properties.time.how]</b></p>",
				"<a href='$[properties.more.direction]'>$[properties.more.what]</a>",
				"</div>",
				"</div>"].join('\n'), {
					build: function() {
						balloonTemplate.superclass.build.call(this);
						$(".balloon_close").on("click", $.proxy(this._close, this));
					},
					clear: function() {
						$(".balloon_close").off("click");
						balloonTemplate.superclass.clear.call(this);
					},
					getClientBoundingRect: function() {
						var $balloon = $(".balloon_wrapper"),
							$parent = $balloon.parent(),
							top = $balloon.position().top - $parent.position().top,
							left = $balloon.position().left - $parent.position().left,
							bottom = top + $balloon.height(),
							right = left + $balloon.width(),
							ret = [[left, top], [right, bottom]];
						return ret;
					},
					_close: function(e) {
						e.preventDefault();
						this.events.fire("userclose");
					}
				}
			);
		ymaps.layout.storage.add("fitauto#markerTemplate", markerTemplate);
		ymaps.layout.storage.add("fitauto#balloonTemplate", balloonTemplate);
		yamap.geoObjects.options.set({
			iconShadow: true,
			iconShadowImageHref: 'images/marker_shadow.png',
			iconShadowImageSize: [93, 17],
			iconShadowImageOffset: [-37, -14],
			balloonShadowImageHref: 'images/marker_shadow.png',
			balloonShadowImageSize: [93, 17],
			balloonShadowImageOffset: [-37, -14],
			//balloonPane: 'outers',
			iconLayout: "fitauto#markerTemplate",
			balloonLayout: "fitauto#balloonTemplate"
		});
		
		placemarks.push(new ymaps.Placemark([54, 84], {
			type: "premium",
			content: "Premium",
			balloonImageSrc: 'http://lorempixel.com/300/180/cats',
			phone: {
				code: "333",
				number: "333-33-33"
			},
			address: "Heaven",
			time: {
				when: "Ежедневно",
				how: "00:00 - 00:05"
			},
			more: {
				direction: 'javascript:{}',
				what: "Хотите узнать подробней?"
			}
		}, {

		}));
		placemarks.push(new ymaps.Placemark([55, 84], {
			type: "standard",
			content: "Standard",
			balloonImageSrc: 'http://lorempixel.com/300/180/cats',
			phone: {
				code: "^_^",
				number: "666-66-66"
			},
			address: "Hell",
			time: {
				when: "Ежедневно",
				how: "Кругло и суточно"
			},
			more: {
				direction: 'javascript:{}',
				what: "Хотите узнать подробней?"
			}
		}, {

		}));
		placemarks.push(new ymaps.Placemark([53, 84], {
			type: "express",
			content: "Express",
			balloonImageSrc: 'http://lorempixel.com/300/180/cats',
			phone: {
				code: "383",
				number: "380-65-65"
			},
			address: "Ordinary street, 56",
			time: {
				when: "Ежедневно",
				how: "Кругло и суточно"
			},
			more: {
				direction: 'javascript:{}',
				what: "Хотите узнать подробней?"
			}
		}, {

		}));

		for(var i = 0, l = placemarks.length; i < l; i++) {
			yamap.geoObjects.add(placemarks[i]);
		}
	});
})()