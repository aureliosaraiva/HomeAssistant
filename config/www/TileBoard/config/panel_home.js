var PANEL_HOME = [
  {
    width: 1,
    height: 4,
    title: 'Temperatura',
    items: [
      {
         position: [0, 0],
         type: TYPES.SENSOR,
         title: 'Externa',
         id: 'sensor.motion_garden_temperature',
         unit: 'C', // override default entity unit
         state: false, // hidding state
         filter: function (value) { // optional
            var num = parseFloat(value);
            return num && !isNaN(num) ? num.toFixed(1) : value;
         }
      },
      {
         position: [0, 1],
         type: TYPES.SENSOR,
         title: 'Interna (Sala)',
         id: 'sensor.temperature_livingroom_temperature',
         unit: 'C', // override default entity unit
         state: false, // hidding state
         filter: function (value) { // optional
            var num = parseFloat(value);
            return num && !isNaN(num) ? num.toFixed(1) : value;
         }
      },
      {
         position: [0, 2],
         type: TYPES.SENSOR,
         title: 'Interna (Quartos)',
         id: 'sensor.temperature_bedroom_temperature',
         unit: 'C', // override default entity unit
         state: false, // hidding state
         filter: function (value) { // optional
            var num = parseFloat(value);
            return num && !isNaN(num) ? num.toFixed(1) : value;
         }
      },
      {
   position: [1, 1],
   type: TYPES.POPUP_IFRAME,
   id: {},
   width: 3,
   height: 2,
   customHtml: '<b>Hi</b>',  // Can also be a function that will be passed item and entity.
   url: 'https://www.youtube.com/embed/_qNhxxo9rVU?autoplay=1'
}
    ]
  }
];
