'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope,localStorageService){
  	// $scope.todos = ['Item 1', 'Item 2','Item 3'];
  	var todoInStore = localStorageService.get('todos');
  	$scope.todos = todoInStore && todoInStore.split('\n') || [];
  	$scope.$watch('todos',function(){
  		localStorageService.add('todos',$scope.todos.join('\n'));
  	}, true);

  	$scope.addTodo = function(){
  		$scope.todos.push($scope.todo);
  		$scope.todo = '';
  	}
  	$scope.removeTodo = function(index){
  		$scope.todos.splice(index, 1);
  	}
  })

