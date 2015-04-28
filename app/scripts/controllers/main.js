'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  // .controller('MainCtrl', function ($scope) {
  //   $scope.awesomeThings = [
  //     'HTML5 Boilerplate',
  //     'AngularJS',
  //     'Karma'
  //   ];
  // });
  .controller('MainCtrl', function ($scope){
  	$scope.todos = ['Item 1', 'Item 2','Item 3'];
  	&scope.addTodo = function(){
  		$scope.todos.push($scope.todo);
  		&scope.todo = '';
  	}
  })
