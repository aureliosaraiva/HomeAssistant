function loadJS(url) {
   var xhttp = new XMLHttpRequest();
   var script = document.createElement( "script" );
   xhttp.open("GET", url+suffix, false);
   xhttp.send();
   script.text = xhttp.responseText;
   document.head.appendChild( script ).parentNode.removeChild( script );
}

loadJS('config/header.js');
loadJS('config/screensaver.js');
loadJS('config/panel_home.js');
loadJS('config/panel_living_room.js');
loadJS('config/panel_1floorplan.js');


var CONFIG = {
   customTheme: CUSTOM_THEMES.TRANSPARENT, // CUSTOM_THEMES.TRANSPARENT, CUSTOM_THEMES.MATERIAL, CUSTOM_THEMES.MOBILE, CUSTOM_THEMES.MOBILE, CUSTOM_THEMES.HOMEKIT, CUSTOM_THEMES.WINPHONE, CUSTOM_THEMES.WIN95
   transition: TRANSITIONS.ANIMATED_GPU, //ANIMATED or SIMPLE (better perfomance)
   entitySize: ENTITY_SIZES.NORMAL, //SMALL, BIG are available
   tileSize: 150,
   tileMargin: 6,
   serverUrl: 'http://' + location.hostname + ':8123',
   wsUrl: 'ws://' + location.hostname + ':8123/api/websocket',
   authToken: null, // optional long-lived token (CAUTION: only if TileBoard is not exposed to the internet)
   //googleApiKey: "XXXXXXXXXX", // Required if you are using Google Maps for device tracker
   //mapboxToken: "XXXXXXXXXX", // Required if you are using Mapbox for device tracker
   debug: false, // Prints entities and state change info to the console.
   pingConnection: true, //ping connection to prevent silent disconnections

   // next fields are optional
   events: [],
   timeFormat: 12,
   menuPosition: MENU_POSITIONS.LEFT, // or BOTTOM
   hideScrollbar: true, // horizontal scrollbar
   groupsAlign: GROUP_ALIGNS.HORIZONTALLY, // or VERTICALLY
   onReady: function () {},

   header: HEADER,
   screensaver: SCREENSAVER,

   pages: [
      {
         title: 'Home',
         bg: 'images/bg1.jpeg',
         icon: 'mdi-home-outline',
         groups: PANEL_HOME
      },
      {
         title: 'Sala',
         bg: 'images/bg2.png',
         icon: 'mdi-lamp',
         groups: PANEL_LIVING_ROOM,
      },
      {
        title: 'Sala',
        bg: 'images/bg2.png',
        icon: 'mdi-lamp',
        groups: PANEL_1FLOORPLAN,
      }
   ],
}
