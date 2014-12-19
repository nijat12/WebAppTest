//function initialize() {
//  var mapOptions = {
//    center: { lat: 25.773, lng: -80.193},
//    zoom: 15
//  };
//  var map = new google.maps.Map(document.getElementById('map-canvas'),
//    mapOptions);
//
//  $('<div/>').addClass('centerMarker').appendTo(map.getDiv())
//    //do something onclick
//    .click(function(){
//      var that=$(this);
//      if(!that.data('win')){
//        that.data('win',new google.maps.InfoWindow({content:'this is the center'}));
//        that.data('win').bindTo('position',map,'center');
//      }
//      that.data('win').open(map);
//    });
//
//  //Try HTML5 geolocation - Hello
//  if(navigator.geolocation) {
//    navigator.geolocation.getCurrentPosition(function (position) {
//      var pos = new google.maps.LatLng(position.coords.latitude,
//        position.coords.longitude);
//
//      map.setCenter(pos);
//    }, function () {
//      handleNoGeolocation(true);
//    });
//  } else {
//    //Browser doesn't support Geolocation
//    handleNoGeolocation(false);
//  }
//} initialize();
//
//function handleNoGeolocation(errorFlag){
//  if (errorFlag) {
//    var content = 'Error: The Geolocation service failed.';
//  } else {
//    var content = 'Error: Your browser doesn\'t support geolocation.';
//  }
//
////          var options = {
////            map: map,
////            position: new google.maps.LatLng(60, 105),
////            contecnt: content
////          };
////
////          var infowindow = new google.maps.InfoWindow(options);
////          map.setCenter(options.position);
//} initialize();
//
//
//google.maps.event.addDomListener(window, 'load', initialize);
