'use strict';

describe('Controller: MainCtrl', function () {

    // load the controller's module
    beforeEach(module('rpsAppApp'));

    var MainCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
    }));

    it('should attach a list of possible results to the scope', function () {
        expect(scope.result_calc.length).toBe(3);
    });

    it('should attach a list of ui options to the scope', function () {
        expect(scope.ui_options.length).toBe(3);
    });

    it('should show result instead of Play! on the button after user click it', function () {
        expect(scope.result).toBe('Play!');
        scope.choose(1);
        scope.play();
        expect(scope.result).not.toBe('Play!');
    });
});
