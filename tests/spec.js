describe('offersApp', function () {
    var scope, controller;

    beforeEach(function () {
        module('offersApp');
    });

    describe('offerController', function () {

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('offerController', {
                '$scope': scope
            });
        }));

        it('Filtra opções da oferta por número de diárias ', function () {
            $scope.filterByDailyNumber($scope.offer, 5);
            expect($scope.offerOptions[1].daily).toBe(5);
        });
    });

});