var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_CLASIFICACIONVALLEDECONCEPCION_1 = new ol.format.GeoJSON();
var features_CLASIFICACIONVALLEDECONCEPCION_1 = format_CLASIFICACIONVALLEDECONCEPCION_1.readFeatures(json_CLASIFICACIONVALLEDECONCEPCION_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CLASIFICACIONVALLEDECONCEPCION_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CLASIFICACIONVALLEDECONCEPCION_1.addFeatures(features_CLASIFICACIONVALLEDECONCEPCION_1);
var lyr_CLASIFICACIONVALLEDECONCEPCION_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CLASIFICACIONVALLEDECONCEPCION_1, 
                style: style_CLASIFICACIONVALLEDECONCEPCION_1,
                popuplayertitle: 'CLASIFICACION VALLE DE CONCEPCION',
                interactive: true,
    title: 'CLASIFICACION VALLE DE CONCEPCION<br />\
    <img src="styles/legend/CLASIFICACIONVALLEDECONCEPCION_1_0.png" /> AREA CULTIVADA<br />\
    <img src="styles/legend/CLASIFICACIONVALLEDECONCEPCION_1_1.png" /> AREA NO CULTIVADA<br />' });
var format_PERIMETROVALLEDECONCEPCION_2 = new ol.format.GeoJSON();
var features_PERIMETROVALLEDECONCEPCION_2 = format_PERIMETROVALLEDECONCEPCION_2.readFeatures(json_PERIMETROVALLEDECONCEPCION_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERIMETROVALLEDECONCEPCION_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERIMETROVALLEDECONCEPCION_2.addFeatures(features_PERIMETROVALLEDECONCEPCION_2);
var lyr_PERIMETROVALLEDECONCEPCION_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERIMETROVALLEDECONCEPCION_2, 
                style: style_PERIMETROVALLEDECONCEPCION_2,
                popuplayertitle: 'PERIMETRO VALLE DE CONCEPCION',
                interactive: true,
                title: '<img src="styles/legend/PERIMETROVALLEDECONCEPCION_2.png" /> PERIMETRO VALLE DE CONCEPCION'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_CLASIFICACIONVALLEDECONCEPCION_1.setVisible(false);lyr_PERIMETROVALLEDECONCEPCION_2.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_CLASIFICACIONVALLEDECONCEPCION_1,lyr_PERIMETROVALLEDECONCEPCION_2];
lyr_CLASIFICACIONVALLEDECONCEPCION_1.set('fieldAliases', {'AREA ha': 'AREA ha', 'DEPTO': 'DEPTO', 'PROVINCIA': 'PROVINCIA', 'MUNICIPIO': 'MUNICIPIO', 'REGION': 'REGION', 'COMUNIDAD': 'COMUNIDAD', 'CULTIVO': 'CULTIVO', });
lyr_PERIMETROVALLEDECONCEPCION_2.set('fieldAliases', {'DEPTO': 'DEPTO', 'PROVINCIA': 'PROVINCIA', 'MUNICIPIO': 'MUNICIPIO', 'COMUNIDAD': 'COMUNIDAD', 'POB TOTAL': 'POB TOTAL', 'ACTIVIDAD': 'ACTIVIDAD', 'PROD TOTAL': 'PROD TOTAL', 'AREA ha': 'AREA ha', 'AREA C': 'AREA C', 'AREA NC': 'AREA NC', });
lyr_CLASIFICACIONVALLEDECONCEPCION_1.set('fieldImages', {'AREA ha': 'TextEdit', 'DEPTO': 'TextEdit', 'PROVINCIA': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'REGION': 'TextEdit', 'COMUNIDAD': 'TextEdit', 'CULTIVO': 'TextEdit', });
lyr_PERIMETROVALLEDECONCEPCION_2.set('fieldImages', {'DEPTO': 'TextEdit', 'PROVINCIA': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'COMUNIDAD': 'TextEdit', 'POB TOTAL': 'TextEdit', 'ACTIVIDAD': 'TextEdit', 'PROD TOTAL': 'TextEdit', 'AREA ha': 'TextEdit', 'AREA C': '', 'AREA NC': '', });
lyr_CLASIFICACIONVALLEDECONCEPCION_1.set('fieldLabels', {'AREA ha': 'inline label - always visible', 'DEPTO': 'inline label - always visible', 'PROVINCIA': 'inline label - always visible', 'MUNICIPIO': 'inline label - always visible', 'REGION': 'inline label - always visible', 'COMUNIDAD': 'inline label - always visible', 'CULTIVO': 'inline label - always visible', });
lyr_PERIMETROVALLEDECONCEPCION_2.set('fieldLabels', {'DEPTO': 'inline label - always visible', 'PROVINCIA': 'inline label - always visible', 'MUNICIPIO': 'inline label - always visible', 'COMUNIDAD': 'inline label - always visible', 'POB TOTAL': 'inline label - always visible', 'ACTIVIDAD': 'inline label - always visible', 'PROD TOTAL': 'inline label - always visible', 'AREA ha': 'inline label - always visible', 'AREA C': 'inline label - always visible', 'AREA NC': 'inline label - always visible', });
lyr_PERIMETROVALLEDECONCEPCION_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});