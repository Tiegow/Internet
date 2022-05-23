window.onload = function(){
    
    var map;

    function initialize() {

        var mapProp = {
            center: new google.maps.LatLng(-27.616637,-48.5923228),
            scrollwheel: false,
            zoom: 12,
            maptypeid: google.maps.MapTypeId.ROADMAP
        }

        map = new google.maps.Map(document.getElementById("mapa"),mapProp)
    }

    function addMarker(lat,long,icon,content) {
        var latLng = {'lat':lat,'lng':long};

        var marker = new google.maps.Marker({
            position:latLng,
            map:map,
            icon:icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content:content,
            maxWidith:200,
            pixelOffset: new google.maps.Size(0,20)
        });

        google.maps.event.addListener(marker,'click',function(){
            infoWindow.open(map,marker);
        })
    }

    initialize();
    
    var conteudo = '<p style="color:blue;font-size:13px;padding:10px 0;border-bottom:1px solid black">Meu endereço</p>';
    addMarker(-27.616637,-48.5923228,'',conteudo);

}