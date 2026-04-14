Map.setCenter(-106, 56, 4);
Map.addLayer(image, // eeObject: object to add to the map 
             {
               min:30,
               max:39, 
               opacity:.3,
               palette: ['00FF00', 'FFFF00', 'FF0000']
             }, 
             'Heat days increased');

Map.addLayer(image2, // eeObject: object to add to the map 
             {
               min:30,
               max:39, 
               opacity:.3,
               palette: ['00FF00', 'FFFF00', 'FF0000']
             }, 
             'Max 5-Day Precipitation');
