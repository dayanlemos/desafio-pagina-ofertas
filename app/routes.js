// ROUTES
offersApp.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: '../pages/home.html',
        controller: 'homeController'
    })
    
    .when('/offers', {
        templateUrl: '../pages/offers.html',
        controller: 'offersController'
    })
    
    .when('/offers/:offerId', {
        templateUrl: '../pages/offer.html',
        controller: 'offerController'
    })
    
});