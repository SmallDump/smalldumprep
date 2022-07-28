var map;


DG.then(function () {
	map = DG.map('map', {
        center: [53.272476, 50.036838],
        zoom: 10,
        maxBounds: [
        	[53.943634, 48.098921],
        	[52.546521, 51.617281]
        ],
        minZoom: 9,
        maxZoom: 14
        
    });

    CreateMarker(53.123221, 49.791534);
    CreateMarker(53.148568, 50.412668);
    CreateMarker(53.498574, 49.375961);
});

function CreateMarker(shir, dolg){
	myIcon = DG.icon({
		iconUrl: 'assets/img/icon.png',
		iconSize: [50, 50]
	});
	DG.marker([shir, dolg],{icon: myIcon}).on('click', function(){
		$('#mainModal').modal('toggle')
	}).addTo(map);
}
