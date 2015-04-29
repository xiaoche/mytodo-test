'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:StudyCtrl
 * @description
 * # StudyCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('StudyCtrl', function ($scope) {
    // $scope.things = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
    $scope.things = [
    	{name: 'HTML5 Boilerplate' , use: 'Html' , age: '23'},
    	{name: 'AngularJS' , use: 'JS' , age: '13'},
    	{name: 'Karma' , use: 'Test' , age: '26'}
    ]
    $scope.phones = "Hello, World!";
    

    $scope.name = 'juhailin';
    $scope.age = 18 ;

    $scope.$watch('age', function(){
    	if($scope.age < 18){
    		console.error('error');
    	}
    })

  });
