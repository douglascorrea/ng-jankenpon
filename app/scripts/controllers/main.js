'use strict';

angular.module('rpsAppApp')
  .controller('MainCtrl', function ($scope) {

        $scope.ui_options = new Array('images/rock.png', 'images/paper.png', 'images/scissors.png');

        $scope.result_calc = [];
        $scope.result_calc[0] = new Array('Draw', 'Loose', 'Win');
        $scope.result_calc[1] = new Array('Win', 'Draw', 'Loose');
        $scope.result_calc[2] = new Array('Loose', 'Win', 'Draw');

        $scope.result = 'Play!';

        $scope.cant_play = true;
        $scope.p1_move = 0;
        $scope.p2_move = 0;

        $scope.p1_ui_move = 'http://placehold.it/250x250&text=<<+SELECT+AN+OPTION';
        $scope.p2_ui_move = 'http://placehold.it/250x250&text=COMPUTER+IS+WAITING';

        $scope.choose = function(option) {
            $scope.p1_ui_move = $scope.ui_options[option];
            $scope.p1_move = option;
            $scope.cant_play = false;
        }

        $scope.play = function() {
            $scope.p2_move = Math.floor(Math.random()*(3));
            $scope.p2_ui_move = $scope.ui_options[$scope.p2_move];
            $scope.result = 'You ' + $scope.result_calc[$scope.p1_move][$scope.p2_move];
        }

  });
