function initMap() {
    var map = new google.maps.Map(document.getElementById('Map'), {

        zoom: 6,
        center: new google.maps.LatLng(53.3497645, -6.2602732),
        mapTypeId: 'terrain',
        scrollwheel: true,
        draggable: true,
        mapTypeId: google.maps.MapTypeId.HYBRID,

    });


    
    var locations = [{
        lat: 40.4938993, //Madrid, mora//
        lng: -3.712306099999978,
        title: 'Madrid',
        businnes:'<u>Euro Shopping Channel</u>, C/ Moralzarzal 86'
    }, {
        lat: 48.829985, //Paris Colonel//
        lng: 2.275914,
        title:'Paris',
        businnes:'<u>Lyon Souveniers</u>, 27 rue du Colonel Pierre Avia'
        
    }, {
        lat: 49.26528, //Reims
        lng: 4.84139,
        title:'Reims',
        businnes:'<u>Reims Collectables</u>, 59 rue de l\'Abbaye'
    }, {
        lat: 50.63194, //Lille
        lng: 3.0575,
        title:'Lille',
        businnes:'<u>Daedalus Designs Imports</u>,184, chausse de Tournai'
    }, {
        lat: 48.871153, //Paris , lauriston
        lng: 2.292015,
        title:'Paris',
        businnes:'<u>Auto Canal Petit</u>, 25, rue Lauriston'
    }, {
        lat: -37.854614, //Melbourne, St Kilda
        lng: 144.98112,
        title:'Melbourne',
        businnes:'<u>Australian Collectors</u>, Co.,636 St Kilda Road'
    }, {
        lat: 43.0467, //Newark, NY
        lng: -77.0953,
        title:'Newark',
        businnes:'<u>Tekni Collectables Inc.</u>, 7476 Moss Rd.'
    }, {
        lat: 60.169018, //Helsinki, Kes
        lng: 24.94287,
        title:'Helsinki',
        businnes:'<u>Toys of Finland, Co.</u>, Keskuskatu 45'
    }, {
        lat: 47.8, //salzburg//
        lng: 13.03333,
        title:'Salzburg',
        businnes:'<u>Salzburg Collectables</u>, Geislweg 14'
    }, {
        lat: 41.6362, //New Bedford
        lng: -70.9342,
        title:'New Bedford',
        businnes:'<u>Mini Creations Ltd</u>, Hillside Dr'
    }, {
        lat: 49.262785, //Vancuver
        lng: -123.126615,
        title:'Vancouver',
        businnes:'<u>Canadian Gift Exchange Network</u>, Oak St'
    }, {
        lat: 34.954548, //Tokyo
        lng: 137.17844,
        title:'Tokyo',
        businnes:'<u>Tokyo Collectables</u>, Ltd, 2-2-8 Roppongi,,Minato-ku'
    }, {
        lat: -27.47665, //Brisbane
        lng: 153.01667,
        title:'Brisbane',
        businnes:'<u>Australian Gift Network, Co</u>, 31 Duncan St. West End'
    }, {
        lat: 45.015025, //Torino
        lng: 7.6665910000000395,
        title:'Torino',
        businnes:'<u>Amica Models & Co.</u>, Via Monte Bianco 34'
    }, {
        lat: 37.9735346, //San Rafael
        lng: -122.53108739999999,
        title:'San Rafael',
        businnes:'<u>Mini Gifts Distributors Ltd</u>, Strong St.'
    }, {
        lat: 34.1240033, //Hillside Pasadena
        lng: -118.1596495,
        title:'Pasadena',
        businnes:'<u>Toys4GrownUps.com</u>, Hillside Dr.'
    }, {
        lat: 37.5841, //Burlingame
        lng: -122.36608,
        title:'Burlingame',
        businnes:'<u>Technics Stores Inc.</u>, Furth Circle'
    }, {
        lat: 60.3898141, //Sentrum Bergen
        lng: 5.333338899999944,
        title:'Bergen',
        businnes:'<u>Herkku Gifts</u>, Drammen 121'
    }, {
        lat: 41.53493074850934, //Bridgewater
        lng: -73.36567498423443,
        title:'Bridgewater',
        businnes:'<u>Gift Depot Inc.</u>,South Bay Ln.'
    }, {
        lat: 42.3736158, //Cambridge MA
        lng: -71.1097335,
        title:'Cambridge',
        businnes:'<u>Marta\'s Replicas Co.</u>, Spinnaker Dr.'
    }, {
        lat: 63.429190, //Stavern Norway
        lng: 10.389140,
        title:'Stavern',
        businnes:'<u>Baane Mini Imports</u>, Erling Skakkes gate 78'
    }, {
        lat: 40.611060, //Allentown,PA
        lng: -75.473720,
        title:'Allentown',
        businnes:'<u>Diecast Classics Inc.</u>, 7586 Pompton St.'
    }, {
        lat: -33.795840, //Chatswood, Aistralia
        lng: 151.178460,
        title:'Chatswood',
        businnes:'<u>Souveniers And Things Co.</u>, 815 Pacific Hwy'
    }, {
        lat: 47.215780, //Nantes, Feance
        lng: -1.556430,
        title:'Nantes',
        businnes:'<u>La Rochelle Gifts</u>, rue des Cinquante Otages'
    }, {
        lat: 53.367830, // Liverpool, UK
        lng: -2.924340,
        title:'Liverpool',
        businnes:'<u>UK Collectables, Ltd.</u>, Berkeley Gardens 12  Brewery'
    }, {
        lat: 65.584160, // Lule Sweden
        lng: 22.154750,
        title:'Lule',
        businnes:'<u>Volvo Model Replicas, Co</u>, Berguvsv�gen  8'
    }, {
        lat: 40.4604321, //Madrid, Araquil
        lng: -3.7799046999999746,
        title:'Madrid',
        businnes:'<u>Corrida Auto Replicas</u>, Ltd, C/ Araquil, 67'
    }, {
        lat: 1.289440, //Singapore
        lng: 103.849980,
        title:'Singapore',
        businnes:'<u>Dragon Souveniers, Ltd., Bronz Sok.</u>, Bronz Apt. 3/6 Tesvikiye'
    }, {
        lat: 40.766600, //NYC Pompton 
        lng: -73.944990,
        title:'Pompton',
        businnes:'<u>Diecast Classics Inc.</u>, 7586 Pompton St.'
    }, {
        lat: 40.0115, //Philadelphia first
        lng: -75.1327,
        title:'Philadelphia',
        businnes:'<u>Classic Gift Ideas, Inc</u>, 782 First Street,'
    }, {
        lat: 45.75889, //Lyon rue du commerce
        lng: 4.84139,
        title:'Lyon',
        businnes:'<u>Classic Gift Ideas</u>, Inc, 782 First Street'
    }, {
        lat: 34.1816, //Burbank Furth
        lng: -118.3259,
        title:'Burbank',
        businnes:'<u>West Coast Collectables Co.</u>, 3675 Furth Circle'
    }, {
        lat: 41.3082, //New Haven CT
        lng: -72.9251,
        title:'New Haven',
        businnes:'<u>Super Scale Inc.</u>, 567 North Pendale Street'
    }, {
        lat: 42.2445, //Cambridge MA
        lng: -71.812,
        title:'Cambridge',
        businnes:'<u>Cambridge Collectables Co.</u>, 4658 Baden Av.'
    }, {
        lat: 57.723276, //Boras, Sweeden
        lng: 12.944913,
        title:'Boras',
        businnes:'<u>Scandinavian Gift Ideas</u>, ?kergatan 24'
    }, {
        lat: 48.803333, //Versailles
        lng: 2.130576,
        title:'Versailles',
        businnes:'<u>Auto Assoc. & Cie</u>, 67, avenue de l\'Europe'
    }, {
        lat: 42.7654, //Nashua, NH
        lng: -71.4676,
        title:'Nashua',
        businnes:'<u>Online Diecast Creations Co.</u>, 2304 Long Airport Avenue'
    }, {
        lat: -33.836399, //North Sydney
        lng: 151.207766,
        title:'North Sydney',
        businnes:'<u>Anna\'s Decorations, Ltd</u>'
    }, {
        lat: 45.49, //Montreal , Quebec
        lng: -73.69,
        title:'Montreal',
        businnes:'<u>Quebec Home Shopping Network</u>, 43 rue St. Laurent'
    }, {
        lat: 34.699, //Osaka Japon
        lng: 135.4927,
        title:'Osaka',
        businnes:'<u>Osaka Souveniers Co.</u>, Dojima Avanza 4F, 1-6-20 Dojima, Kita-ku'
    }, {
        lat: 47.21722, //Nantes Rue Royale
        lng: -1.55389,
        title:'Nantes',
        businnes:'<u>Atelier graphique</u>, 54, rue Royale'
    }, {
        lat: 41.032, //White PLains NY
        lng: -73.7654,
        title:'White Plains',
        businnes:'<u>Mini Classics</u>, 3758 North Pendale Street'
    }, {
        lat: 55.781327, //Kobenhavn
        lng: 12.177226,
        title:'Kobenhavn',
        businnes:'<u>Danish Wholesale Imports</u>, Vinb\'ltet 34'
    }, {
        lat: 51.475913, //London King
        lng: -0.009098,
        title:'London',
        businnes:'<u>Stylish Desk Decors, Co.</u>, 35 King George,'
    }, {
        lat: 43.604048, // Toulouse,
        lng: 1.44559,
        title:'Toulouse',
        businnes:'<u>Alpha Cognac</u>, rue Alsace-Lorraine'
    }, {
        lat: 51.513924, // Hannover square London
        lng: -0.14234,
        title:'London',
        businnes:'<u>Double Decker Gift Stores</u>, Ltd, 120 Hanover Sq.'
    }, {
        lat: 41.390102, //Barcelona Cataluna
        lng: 2.164708,
        title:'Barcelona',
        businnes:'<u>Enaco Distributors</u>, Rambla de Catalu�a, 23'
    }, {
        lat: 34.0544, //Douglas Avenue LA,CA
        lng: -118.2439,
        title:'Brickhaven',
        businnes:'<u>Collectables For Less Inc.</u>, 7825 Douglas Av.'
    }, {
        lat: 32.7174, //San Diego, Furth
        lng: -117.1628,
        title:'San Diego',
        businnes:'<u>Collectable Mini Designs Co.</u>, 361 Furth Circle,'
    }, {
        lat: 50.806910, //Bruxelles
        lng: 4.332920,
        title:'Bruxelles',
        businnes:'<u>Petit Auto</u>, Rue Joseph-Bens 532, '
    }, {
        lat: 49.007812, //Tsawassen BC
        lng: -123.09237,
        title:'Tsawassen',
        businnes:'<u>Royal Canadian Collectables, Ltd.</u>, 23 Tsawassen Blvd.'
    }, {
        lat: 50.7595, //Isle of Wight
        lng: -1.3002,
        title:'Isle of Wight',
        businnes:'<u>giftsbymail.co.uk</u>, Garden House Crowther Way'
    }, {
        lat: 37.369820,
        lng: -121.903840 ,
        title:'San Jose',
        businnes:'<u>The Sharp Gifts Warehouse, Ingle Ln.</u>'      //Ingle LN, SAn JOse
    }, {
        lat: 48.858149, // Charonne Paris
        lng: 2.390848,
        title:'Paris',
        businnes:'<u>La Corne D\'abondance, Co.</u>, 265, boulevard Charonne'
    }, {
        lat: 42.3605, //Boston Ingle
        lng: -71.0596,
        title:'Boston',
        businnes:'<u>Gifts4AllAges.com</u>, 8616 Spinnaker Dr'
    }, {
        lat: 1.333760, //Singapore Sandtown
        lng: 103.801950,
        title:'Singapore',
        businnes:'<u>Dragon Souveniers, Ltd., Bronz Sok.</u>, Bronz Apt. 3/6 Tesvikiye'
    }, {
        lat: 14.556190, //Philippines
        lng: 121.061870,
        title:'Philippines',
        businnes:'<u>Cruz & Sons Co.</u>, 15 McCallum Street - NatWest Center #13-03'
    }, {
        lat: 43.350930, //Marseille
        lng: 5.439200,
        title:'Marseille',
        businnes:'<u>Marseille Mini Autos</u>, 12, rue des Bouchers'
    }, {
        lat: 50.973450, //Koln
        lng: 6.946990,
        title:'Köln',
        businnes:'<u>Toms Spezialitten, Ltd</u>, Mehrheimerstr. 369'
    }, {
        lat: 46.212530, //Sweiss
        lng: 6.116300,
        title:'Switzerland',
        businnes:'<u>Vida Sport, Ltd</u>, Grenzacherweg 237 '
    }, {
        lat: 44.745220, //Regio Emilia
        lng: 10.605790,
        title:'Reggio Emilia',
        businnes:'<u>L\'ordine Souveniers</u>, Strada Provinciale 124'
    }, {
        lat: 50.079210, //Frankfurt am Main
        lng: 8.623840,
        title:'Frankfurt am Main',
        businnes:'<u>Blauer See Auto, Co</u>, Lyonerstr. 34'
    }, {
        lat: 60.205620, //Espoo
        lng: 24.655360,
        title:'Espoo',
        businnes:'<u>Suominen Souveniers</u>, Software Engineering Center, SEC Oy '
    }, {
        lat: 40.102900, //Hillside
        lng: -78.548990,
        title:'Pasadena',
        businnes:'<u>Toys4GrownUps.com</u>, Hillside Dr.'
    }, {
        lat: 53.335380, //Dublin
        lng: -6.249470,
        title:'Dublin',
        businnes:'<u>Clover Collections, Co.</u>, 25 Maiden Lane'
    }, {
        lat: 40.472180, //Madrid merchants
        lng: -3.780890,
        title:'Madrid',
        businnes:'<u>CAF Imports</u>, Merchants House, 27-30 Merchant\'s Quay'
    }, {
        lat: 53.480060, //Manchester
        lng: -2.234790,
        title:'Manchester',
        businnes:'<u>AV Stores, Co.</u>, Fauntleroy Circus'
    }, {
        lat: 56.181770, //Aaarthus
        lng: 10.209010,
        title:'Aaarhus',
        businnes:'<u>Heintze Collectables</u>, Smagsloget 45'
    }, {
        lat: 47.065490, //Graz
        lng: 15.469180,
        title:'Graz',
        businnes:'<u>Mini Auto Werke</u>, Kirchgasse 6'
    }, {
        lat: 35.060890, //Glendale,CA
        lng: -118.203880,
        title:'Glendale',
        businnes:'<u>Gift Ideas Corp.</u>, 2440 Pompton St.'
    }, {
        lat: 37.408010, //Sevilla
        lng: -5.972450,
        title:'Sevilla',
        businnes:'<u>Iberia Gift Imports, Corp.</u>, C/ Romero, 33'
    }, {
        lat: 65.009930, //Oulu
        lng: 25.464740,
        title:'Oulu',
        businnes:'<u>Oulu Toy Supplies, Inc.</u>, Torikatu 38'
    }, {
        lat: 45.694889, //Bergamo
        lng: 9.669975,
        title:'Bergamo',
        businnes:'<u>Rovelli Gifts</u>, Via Ludovico il Moro 22'
    }, {
        lat: -37.887650, //Victoria, Austlaria
        lng: 145.161900,
        title:'Victoria',
        businnes:'<u>Australian Collectables, Ltd</u>, 7 Allen Street'
    }, {
        lat: 36.023580, //Las Vegas NV
        lng: -115.024710,
        title:'Las Vegas',
        businnes:'<u>Signal Gift Stores</u>, 8489 Strong St.'
    }, {
        lat: 48.587110, //Strassbourg
        lng: 7.741110,
        title:'Strasbourg',
        businnes:'<u>Mini Caravy</u>, 24, place Kluber'
    }, {
        lat: 59.913010, //Oslo Drammensveien
        lng: 10.734600,
        title:'Oslo',
        businnes:'<u>Norway Gifts By Mail, Co.</u>, Drammensveien 126 A, PB 744 Sentrum'
    }, {
        lat: 48.132130, //München
        lng: 11.517390,
        title:'München',
        businnes:'<u>Bavarian Collectables Imports, Co.</u>, Hansastr. 15'
    }, {
        lat: 50.406860, //Charleroi
        lng: 4.445900,
        title:'Charleroi',
        businnes:'<u>Royale Belge</u>, Boulevard Tirou, 255'
    }];
    var markers = locations.forEach(function(location, i) {
            var infowindow = new google.maps.InfoWindow({
            content:  location.businnes || 'no information'  
        });

        var marker = new google.maps.Marker({
            position: {lat: location.lat, lng: location.lng},
            map: map,
            title: location.title || 'not found'    

        });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
    });
    // var markerCluster = new MarkerClusterer(map, markers, {
    //     imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    // });
}
