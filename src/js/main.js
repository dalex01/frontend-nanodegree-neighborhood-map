//'use strict';

// TODO:
// 0. Display photos of each place
// 1. Menu button in right menu should be fixed during scrolling
// 2. Color visited countries
// 3. Popup big photo after clicking on small icon
// 4. Create feature to add new locations via UI
// 5. Error handling during working with Flickr API
// 6. ---DONE!!! Filter markers on the map by search bar
// 7. !!! Click on location activate its marker
// 8. !!! Animate marker when clicked
// 9. !!! Show information on marker when clicked or location choused in the list
// 10. Create feature to choose on which field we want to search.

var model = {
    // array with all visited locations
    locations: [
        /*		{
        			continent: 'Europe',
        			country: 'France',
        			city: 'Paris',
        			type: 'exact',
        			date: 'TBD',
        			lat: 48.854759,
        			lng: 2.305080,
        			hotel: 'TBD',
        			photos: []
        		},
        		{
        			continent: 'Asia',
        			country: 'Israel',
        			city: 'Bhethlehem',
        			type: 'so-so',
        			date: 'TBD',
        			lat: 31.709661,
        			lng: 35.202141,
        			hotel: 'TBD',
        			photos: []
        		},
        		{
        			continent: 'Asia',
        			country: 'Israel',
        			city: 'Jerusalem',
        			type: 'so-so',
        			date: 'TBD',
        			lat: 31.778245,
        			lng: 35.229397,
        			hotel: 'TBD',
        			photos: []
        		},
        		{
        			continent: 'Asia',
        			country: 'Israel',
        			city: 'Jericho',
        			type: 'so-so',
        			date: 'TBD',
        			lat: 31.855132,
        			lng: 35.458276,
        			hotel: 'TBD',
        			photos: []
        		},*/
        {
            continent: 'Africa',
            country: 'Egypt',
            city: 'Luxor',
            type: 'so-so',
            date: 'TBD',
            lat: 25.714124,
            lng: 32.649766,
            hotel: 'TBD',
        	photos: []
        },
        {
            continent: 'Africa',
            country: 'Egypt',
            city: 'Hurgada',
            type: 'so-so',
            date: 'TBD',
            lat: 27.082086,
            lng: 33.860678,
            hotel: 'TBD',
        	photos: []
        },
        /*		{
        			continent: 'Africa',
        			country: 'Egypt',
        			city: 'Sharm-el-Sheikh',
        			type: 'exact',
        			date: 'TBD',
        			lat: 27.861737,
        			lng: 34.317525,
        			hotel: 'TBD',
        			photos: []
        		},
        		{
        			continent: 'Asia',
        			country: 'Thailand',
        			city: 'Bangkok',
        			type: 'exact',
        			date: 'TBD',
        			lat: 13.757137,
        			lng: 100.502789,
        			hotel: 'TBD',
        			photos: []
        		},
        		{
        			continent: 'Asia',
        			country: 'Thailand',
        			city: 'Pattaya',
        			type: 'exact',
        			date: 'TBD',
        			lat: 12.930813,
        			lng: 100.880119,
        			hotel: 'TBD',
        			photos: []
        		},*/
        {
            continent: 'North America',
            country: 'USA',
            city: 'New York',
            type: 'so-so',
            date: 'TBD',
            lat: 40.621153,
            lng: -73.998114,
            hotel: 'TBD',
        	photos: []
        },
        {
            continent: 'North America',
            country: 'USA',
            city: 'Chicago',
            type: 'so-so',
            date: 'TBD',
            lat: 41.883543,
            lng: -87.795953,
            hotel: 'TBD',
        	photos: []
        },
        /*		{
        			continent: 'North America',
        			country: 'USA',
        			city: 'Boston',
        			type: 'so-so',
        			date: 'TBD',
        			lat: 42.362860,
        			lng: -71.118612,
        			hotel: 'TBD',
        			photos: []
        		},*/
        {
            continent: 'North America',
            country: 'USA',
            city: 'Niagara Falls',
            type: 'so-so',
            date: 'TBD',
            lat: 43.090628,
            lng: -79.058927,
            hotel: 'TBD',
        	photos: []
        },
        /*		{
        			continent: 'Europe',
        			country: 'Germany',
        			city: 'Berlin',
        			type: 'exact',
        			date: 'TBD',
        			lat: 52.501939,
        			lng: 13.384981,
        			hotel: 'TBD',
        			photos: []
        		},
        		{
        			continent: 'Europe',
        			country: 'Finland',
        			city: 'Helsinki',
        			type: 'so-so',
        			date: 'TBD',
        			lat: 60.171040,
        			lng: 24.939737,
        			hotel: 'TBD',
        			photos: []
        		},
        		{
        			continent: 'Europe',
        			country: 'Norway',
        			city: 'Oslo',
        			type: 'so-so',
        			date: 'TBD',
        			lat: 59.913331,
        			lng: 10.749411,
        			hotel: 'TBD',
        			photos: []
        		},
        		{
        			continent: 'Europe',
        			country: 'Sweden',
        			city: 'Stockholm',
        			type: 'so-so',
        			date: 'TBD',
        			lat: 59.327510,
        			lng: 18.070844,
        			hotel: 'TBD',
        			photos: []
        		},
        		{
        			continent: 'Europe',
        			country: 'Lithuania',
        			city: 'Kaunas',
        			type: 'so-so',
        			date: 'TBD',
        			lat: 54.898163,
        			lng: 23.897247,
        			hotel: 'TBD',
        			photos: []
        		},*/
        {
            continent: 'Europe',
            country: 'Lithuania',
            city: 'Vilnus',
            type: 'exact',
            date: 'TBD',
            lat: 54.674072,
            lng: 25.285036,
            hotel: 'TBD',
        	photos: []
        },
        /*		{
        			continent: 'Europe',
        			country: 'Belarus',
        			city: 'Minsk',
        			type: 'exact',
        			date: 'TBD',
        			lat: 53.627318,
        			lng: 27.977858,
        			hotel: 'TBD',
        			photos: []
        		},
        		{
        			continent: 'Europe',
        			country: 'Russia',
        			city: 'Moscow',
        			type: 'so-so',
        			date: 'TBD',
        			lat: 55.775691,
        			lng: 37.586972,
        			hotel: 'TBD',
        			photos: []
        		},
        		{
        			continent: 'Europe',
        			country: 'Russia',
        			city: 'Vladimir',
        			type: 'so-so',
        			date: 'TBD',
        			lat: 56.128201,
        			lng: 40.403193,
        			hotel: 'TBD',
        			photos: []
        		},*/
        {
            continent: 'Europe',
            country: 'Russia',
            city: 'Saint-Petersburg',
            type: 'exact',
            date: 'TBD',
            lat: 59.932236,
            lng: 30.353496,
            hotel: 'TBD',
        	photos: []
        },
        {
            continent: 'Europe',
            country: 'Russia',
            city: 'Kursk',
            type: 'exact',
            date: 'TBD',
            lat: 51.748547,
            lng: 36.189659,
            hotel: 'TBD',
        	photos: []
        },
        {
            continent: 'Europe',
            country: 'Russia',
            city: 'Belgorod',
            type: 'so-so',
            date: 'TBD',
            lat: 50.599392,
            lng: 36.591674,
            hotel: 'TBD',
        	photos: []
        },
        /*		{
        			continent: 'Asia',
        			country: 'UAE',
        			city: 'Dubai',
        			type: 'so-so',
        			date: 'TBD',
        			lat: 25.203156,
        			lng: 55.270310,
        			hotel: 'TBD',
        			photos: []
        		},*/
        {
            continent: 'Asia',
            country: 'Kazakhstan',
            city: 'Almaty',
            type: 'exact',
            date: 'TBD',
            lat: 43.382937,
            lng: 77.128332,
            hotel: 'TBD',
        	photos: []
        },
        {
            continent: 'Asia',
            country: 'Turkey',
            city: 'Istambul',
            type: 'exact',
            date: 'TBD',
            lat: 41.010213,
            lng: 28.977798,
            hotel: 'TBD',
        	photos: []
        }
        /*,
        		{
        			continent: 'Asia',
        			country: 'Kambodga',
        			city: 'Siem Reap',
        			type: 'exact',
        			date: 'TBD',
        			lat: 13.341384,
        			lng: 103.836862,
        			hotel: 'TBD',
        			photos: []
        		}*/
    ],
    // arrau with markers to display
    markers: [],
    columns: ['continent', 'country', 'city']
};

// initialize Google Map via API
var initMap = function() {
    // display map in element with id 'map'
    var map = new google.maps.Map(document.getElementById('map'), {
        // center map somewhere near Italy :)
        center: {
            lat: 39.104892,
            lng: 9.456656
        },
        zoom: 3,
        mapTypeControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControlOptions: {
            position: google.maps.ControlPosition.BOTTOM_CENTER
        },
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
        },
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
        }
    });

    // add markers on map according to locations in model
    addMarkers(map);
};

// function to add markers on map
// parameter:
// 		map - map where markers will be displayed
var addMarkers = function(map) {
    var loc;
    // iterate through all locations in model
    for (loc in model.locations) {
        // create new marker at specified position
        var marker = new google.maps.Marker({
            position: model.locations[loc],
            map: map,
            title: model.locations[loc].country + '-' + model.locations[loc].city
        });
        // push marker into array of markers in model
        model.markers.push(marker);
    }
};

// function to create new location object
// parameter:
//		data - data to create location (continent, country, city and so on...)
var Location = function (data) {
	this.continent = ko.observable(data.continent);
	this.country = ko.observable(data.country);
	this.city = ko.observable(data.city);
	this.type = ko.observable(data.type);
	this.date = ko.observable(data.date);
	this.lat = ko.observable(data.lat);
	this.lng = ko.observable(data.lng);
	this.hotel = ko.observable(data.hotel);
	this.photos = ko.observableArray([]);
	this.show = ko.observable(data.show);
};

var viewModel = function() {
    var self = this;

	this.locationsList = ko.observableArray([]);

	model.locations.forEach(function(locationItem) {
		self.locationsList.push(new Location(locationItem));
	});

    // set height property to left and right sidebars
    self.infoHeight = ko.observable($(window).height() - 70);

    // set hiding logic for right sidebar
    self.isHiddenRight = ko.observable(true);
    self.toggleHiddenRight = function() {
    	// if it is hidden show it and vice versa
        self.isHiddenRight(!self.isHiddenRight());
        // if left menu is shown hide it
        if (!self.isHiddenLeft())
            this.toggleHiddenLeft();
    };

	// set height property to left and right sidebars
    self.photosHeight = ko.observable($(window).height() - 70);
    self.photosWidth = ko.computed(function() {
    	if ($(window).width() > 600)
    		return ($(window).width() - 370);
    	else
    		return 300;
    });

	// set hiding logic for left sidebar
    self.isHiddenLeft = ko.observable(true);
    self.toggleHiddenLeft = function() {
        self.isHiddenLeft(!self.isHiddenLeft());
    };

	// set height property to bottom and right sidebars
    /*self.bigPhotoHeight = ko.observable($(window).height() - 70);
    self.bigPhotoWidth = ko.observable($(window).width() - 70);

    // set hiding logic for bottom sidebar
    self.isHiddenBottom = ko.observable(false);
    self.toggleHiddenBottom = function() {
    	// if it is hidden show it and vice versa
        self.toggleHiddenBottom(!self.toggleHiddenBottom());
        // if left menu is shown hide it
        //if (!self.isHiddenLeft())
            //this.toggleHiddenLeft();
    };*/

    // selected location from right sidebar
    // !!! may be removed later
    this.city = ko.observable();

    // observable for search input
    self.searchQuery = ko.observable();

	self.columnsToSearch = ko.observableArray(model.columns);

    // locations array to display in right sidebar accordint to search input value
    // if search is empty - display all locations
    // if search is not empty and there are continent, country or city in search that
    // is presented in array of locations then display locations according to this search
    // otherwise don't display anything
	this.filteredItems = ko.computed(function() {
		var filter = self.searchQuery();
		if (self.searchQuery())
	    	filter = filter.toLowerCase();
	    if (!filter) {
	        return self.locationsList();
	    } else {
	        return ko.utils.arrayFilter(self.locationsList(), function(item) {
	        	// !!! experementing
	        	var matching = -1;
	        	ko.utils.arrayForEach(self.columnsToSearch(), function (c) {
                    var val = item[c]();
                    if (typeof val === 'number') {
                        val = val.toString();
                    }
                    matching+= val.toLowerCase().indexOf(filter.toLowerCase())+1;
                });
                return matching>=0;
	            //return stringStartsWith(item.city().toLowerCase(), filter);
	        });
	    }
	});

	this.currentLocation = ko.observable();
	this.currentPhotos = ko.observableArray([]);
	this.currentBigPhoto = ko.observable();

	// show photos in left sidebar according to selected location
    // parameter:
    // 		location - selected from right sidebar location
    this.showPhotos = function(location) {
    	self.currentLocation = location;
    	self.currentPhotos([]);
		var flickrCollectionRequestTimeout = setTimeout(function() {
			console.log('fail in flickrCollectionRequestTimeout');
		    alert('Failed to get Flickr resources');
		}, 8000);


		// url to use Flickr API to receive all my collections
		//var collections = 'https://api.flickr.com/services/rest/?method=flickr.collections.getTree&api_key=6123d03adcf80439f7f840ff40e2cf5f&format=json&nojsoncallback=1&auth_token=72157658661848010-e40ca7f10290a5d5&api_sig=b3cfdfe69623ac3a5eeb49d7fee15e05';
		var photosets = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=2e7d60e5e3de1137cf7a6cd555b92ab9&user_id=136434920%40N04&format=json&nojsoncallback=1';
		$.ajax({
		    url: photosets,
		    dataType: 'json',
		    success: function(response) {
		        handlePhotosets(response);
		        clearTimeout(flickrCollectionRequestTimeout);
		    }
		});

		var handlePhotosets = function(responseData) {
		    var photosetsList = responseData.photosets.photoset;
		    for (var i = 0; i < photosetsList.length; i++) {
		    	if (photosetsList[i].title._content == self.currentLocation.city()) {
					var city = photosetsList[i].title._content;
			    	var photosetId = photosetsList[i].id;
			        getPhotos(city, photosetId);
		    	}
			}
		};

		var getPhotos = function(city, photosetId) {
			var flickrPhotosRequestTimeout = setTimeout(function() {
		    	console.log('fail in flickrPhotosRequestTimeout');
		        alert('Failed to get Flickr resources');
		    }, 8000);

			var photos = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=2e7d60e5e3de1137cf7a6cd555b92ab9&photoset_id=' + photosetId + '&user_id=136434920%40N04&format=json&nojsoncallback=1';
			//if (self.currentLocation.photos.length === 0) {
			    $.ajax({
			        url: photos,
			        dataType: 'json',
			        success: function(response) {
			            handlePhotos(response);
			            clearTimeout(flickrPhotosRequestTimeout);
			        }
			    });
			//}
			//else
			//	self.currentPhotos = self.currentLocation.photos;
		};

		var handlePhotos = function(responseData) {
			var firstPhoto = responseData.photoset.photo[0];
			var side = Math.min(Math.max(320, $(window).width() - 370), $(window).height() - 150);
			console.log('320');
			console.log($(window).width() - 370);
			console.log($(window).height() - 150);
			console.log(side);
			var photoSize = '_m.jpg';
			if (side > 320 && side <= 500)
				photoSize = '_n.jpg';
			else if (side > 500 && side <= 640)
				photoSize = '.jpg';
			else if (side > 640 && side <= 800)
				photoSize = '_z.jpg';
			else if (side > 800 && side <= 1024)
				photoSize = '_c.jpg';
			else if (side > 1024 && side <= 1600)
				photoSize = '_b.jpg';
			else if (side > 1600 && side <= 2048)
				photoSize = '_h.jpg';
			else if (side > 2048)
				photoSize = '_k.jpg';
			self.currentBigPhoto({
					imgAlt: firstPhoto.title,
					imgSrc: 'https://farm' +
	    					 firstPhoto.farm +
	    					 '.staticflickr.com/' +
	    					 firstPhoto.server +
	    					 '/' +
	    					 firstPhoto.id +
	    					 '_' +
	    					 firstPhoto.secret +
	    					 photoSize
	        	});
			//console.log(self.currentBigPhoto());
	        for(var i = 0; i < responseData.photoset.photo.length; i++) {
	        	var ph = responseData.photoset.photo[i];
	        	// TODO: photos may be should be removed from locations
	        	//self.currentLocation.photos.push(
	        	//	{
				//	imgAlt: ph.title,
				//	imgSrc: 'https://farm' +
	    		//			 ph.farm +
	    		//			 '.staticflickr.com/' +
	    		//			 ph.server +
	    		//			 '/' +
	    		//			 ph.id +
	    		//			 '_' +
	    		//			 ph.secret +
	    		//			 '_m.jpg'
	    		//	}
	        	//);
	        	self.currentPhotos.push(
	        		{
					imgAlt: ph.title,
					imgSrc: 'https://farm' +
	    					 ph.farm +
	    					 '.staticflickr.com/' +
	    					 ph.server +
	    					 '/' +
	    					 ph.id +
	    					 '_' +
	    					 ph.secret +
	    					 '_s.jpg'
	    			}
	        	);
	        }
	    };

		// show left sidebar if it is hidden
		if (self.isHiddenLeft())
            self.toggleHiddenLeft();
	};
};

ko.applyBindings(new viewModel());
