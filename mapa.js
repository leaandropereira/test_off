            var mymap; 
            var lyrOSM; // Background padrão do leaflet poderia ser outro...
            var ctlEasyButton;
            var ctlSidebar;
            var minimap;
            var landesri;
            var baseLayers;
            var objOverLays;
            var drone;
            var tumulos;
            var styletumulos;
            var processtumulos;
            var filtertumulos;
            var drone_mini;
            var ruas;
            var lyrSearch;
            var artumulosids = [];
            var artumulosnames = [];
            var artumulos_faleicdos = [];
            var artumulos_faleicdos2 = [];
            var search = [];
            var satelite;

            $(document).ready(function(){
                                
                    /// ******* Inicialização do Mapa ****** 
                
                    mymap = L.map('mapdiv', {center:[-21.21252,-47.81600], zoom:19, zoomControl:true, maxZoom: 19,
                    minZoom: 5, fullscreenControl: true, fullscreenControlOptions: {
                    position: 'topright'
                    },                                    
                                         });

                                        

                    /// ******* Layers do Mapa ********
                    lyrOSM = L.tileLayer.provider('OpenStreetMap.Mapnik',{maxNativeZoom: 19, maxZoom: 23,}).addTo(mymap);
                    landesri = L.tileLayer.provider('Esri.WorldImagery');
 
                    drone = L.imageOverlay('img/drone2.png',[[-21.70983548137554, -46.8275536418],[-21.711427499655034, -46.8260716641]],{opacity:1}).addTo(mymap);
                    
                    tumulos = L.geoJSON.ajax('data/tumulos.geojson',{style:styletumulos, onEachFeature:processtumulos, filter:filtertumulos, opacity:1.0,weight:1.5,fillOpacity:0.5, 	attribution: '&copy; <a href="https://www.cemitech.net" target="_blank">CEMItech 2022'
                    }).addTo(mymap);
                    
                    point = L.geoJSON.ajax('data/ponto.geojson',{dashArray:"3", color:'red', weight: 1.5}).addTo(mymap);
                
                
                    /// ******** Setup Layers *****
                    baseLayers = {                        
                        "Land" : lyrOSM
                    };
                    objOverLays = {
                        "Ponto" : point

                    };
                                   
                    L.control.layers(baseLayers, objOverLays).addTo(mymap); // botão de layers

            });