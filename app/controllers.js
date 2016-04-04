// CONTROLLERS
offersApp.controller('homeController', ['$scope', 'offersService', function($scope, offersService) {

}]);

offersApp.controller('offersController', ['$scope', '$resource', '$routeParams', 'offersService', function($scope, $resource, $routeParams, offersService) {
    $scope.offers = offersService.offers;
}]);

offersApp.controller('offerController', ['$scope', '$resource', '$routeParams', '$window', 'offersService', function($scope, $resource, $routeParams, $window, offersService) {

    $window.scrollTo(0,0)

    $scope.offerId = $routeParams.offerId;

    $scope.offer = offersService.getOffer($scope.offerId);

    $scope.offerOptions = $scope.offer.options;

    $scope.origins = offersService.origins;

    $scope.dailyOptions = offersService.dailyOptions;

    $scope.filterByDailyNumber = function(offer, daily){
        $scope.offerOptions = offersService.getOfferOptionsByDailyNumber(offer, daily);
    }

    $scope.setActivePhoto = function(photo){
        $scope.activePhoto = photo;
    }

}]);