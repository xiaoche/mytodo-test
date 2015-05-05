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
//    $scope.things = [
//    	{name: 'HTML5 Boilerplate' , use: 'Html' , age: '23'},
//    	{name: 'AngularJS' , use: 'JS' , age: '13'},
//    	{name: 'Karma' , use: 'Test' , age: '26'}
//    ]
//    $scope.phones = "Hello, World!";
//    
//
//    $scope.name = 'juhailin';
//    $scope.age = 18 ;
//
//    $scope.$watch('age', function(){
//    	if($scope.age < 18){
//    		console.error('error');
//    	}
//    });
    
    $scope.peoples = [
      {name: '小花' , sex: 'female' , age: '18'},
      {name: '小明' , sex: 'male' , age: '22'},
      {name: '小红' , sex: 'female' , age: '28'},
      {name: '小龙' , sex: 'male' , age: '32'},
    ];
    
    $scope.add = function () {
      $scope.peoples.push({
        name: $scope.pName,
        age: $scope.pAge
      });
      $scope.pName = '';
      $scope.pAge = '';
      
    };
    $scope.remove = function (index) {
      $scope.peoples.splice(index, 1);
    };

  });
