var yamap;

(function() {
	var placemark;
	YMaps.jQuery(function() {
		yamap = new YMaps.Map(YMaps.jQuery("#yamap")[0]);
		yamap.setCenter(new YMaps.GeoPoint(84, 54), 10);

		var i = new YMaps.Style();
		i.iconStyle = new YMaps.IconStyle();
		i.iconStyle.href = "http://lorempixel.com/100/100/cats";
		i.iconStyle.size = new YMaps.Point(100, 100);

		placemark = new YMaps.Placemark(new YMaps.Point(84, 54), { style: i });
		yamap.addOverlay(placemark);
	});

})()
