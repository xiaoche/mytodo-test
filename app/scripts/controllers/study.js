'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:StudyCtrl
 * @description
 * # StudyCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('StudyCtrl', function ($scope,$filter) {
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
    
    
//    ngRepeat------------------------
    
//    $scope.peoples = [
//      {name: '小花' , sex: 'female' , age: '18'},
//      {name: '小明' , sex: 'male' , age: '22'},
//      {name: '小红' , sex: 'female' , age: '28'},
//      {name: '小龙' , sex: 'male' , age: '32'},
//    ];
//    
//    $scope.add = function () {
//      $scope.peoples.push({
//        name: $scope.pName,
//        age: $scope.pAge
//      });
//      $scope.pName = '';
//      $scope.pAge = '';
//      
//    };
//    $scope.remove = function (index) {
//      $scope.peoples.splice(index, 1);
//    };

//    Filter-----------


//      $scope.num = 12323432.2345;
//      console.log($filter('number')($scope.num, 5));
//      
//      $scope.money = 234535.435;
//      
//      $scope.birth = '2012-07-02';
//      
//      $scope.obj = {
//        name : '小车',
//        age : 18,
//        skill: ['html', 'css','js']
//      };
//      
//      $scope.peoples = [{
//        name: '小花' , 
//        sex: 'female' , 
//        age: 18,
//        skill: ['PS', 'Flash', 'IA']
//      }
//      ,{
//        name: '小明' , 
//        sex: 'male' , 
//        age: 22,
//        skill: ['Php', 'Java', 'Ruby']
//      }
//      ,{
//        name: '小红' , 
//        sex: 'female' , 
//        age: 29,
//        skill: ['Photoshop', 'Flash', 'IA']
//      }
//      ,{
//        name: '小龙' , 
//        sex: 'male' , 
//        age: 38,
//        skill: ['PS', 'Flash', 'IA']
//      }
//      ,{
//        name: '小明' , 
//        sex: 'male' , 
//        age: 22,
//        skill: ['Php', 'Java', 'Ruby']
//      }
//      ,{
//        name: '小红' , 
//        sex: 'female' , 
//        age: 28,
//        skill: ['Photoshop', 'Flash', 'IA']
//      }
//      ,{
//        name: '小龙' , 
//        sex: 'male' , 
//        age: 32,
//        skill: ['PS', 'Flash', 'IA']
//      }];
//      
//      var orderBy = $filter('orderBy');
//      
//      $scope.order = function(predicate, reverse) {
//        $scope.peoples = orderBy($scope.peoples, predicate, reverse);
//      };
//      

//    ngOptions

      $scope.jobs = [
        '项目经理',
        '产品经理',
        '视觉设计师',
        '交互设计师',
        '前端设计师',
        '前端工程师',
        '软件开发工程师'
      ];
      
      $scope.personnel = [
        {
          name: '林于路',
          num: 1375,
          job: '视觉设计师',
          mail: 'linyulu@made-in-china.com',
          phone: 6076
        },
        {
          name: '曹家睿',
          num: 1541,
          job: '前端设计师',
          mail: 'caojiarui@made-in-china.com',
          phone: 7126
        },
        {
          name: '王茜雯',
          num: 2114,
          job: 'GUI设计师',
          mail: 'wangqianwen@made-in-china.com',
          phone: 6678
        },
        {
          name: '鞠海林',
          num: 2216,
          job: '前端设计师',
          mail: 'juhailin@made-in-china.com',
          phone: 7377
        },
        {
          name: '徐　旭',
          num: 2360,
          job: '交互设计师',
          mail: 'xuxu@made-in-china.com',
          phone: 7296
        },
        {
          name: '于梅花',
          num: 2384,
          job: '视觉设计师',
          mail: 'yumeihua@made-in-china.com',
          phone: 6463
        },
        {
          name: '廖宣进',
          num: 2588,
          job: '视觉设计师',
          mail: 'liaoxuanjin@made-in-china.com',
          phone: 7336
        },
        {
          name: '薛扬漫',
          num: 2760,
          job: 'GUI设计师',
          mail: 'xueyangman@made-in-china.com',
          phone: 7032
        },
        {
          name: '许　云',
          num: 2937,
          job: '视觉设计师',
          mail: 'xuyun@made-in-china.com',
          phone: 7368
        },
        {
          name: '王　冬',
          num: 2948,
          job: 'GUI设计师',
          mail: 'wangdong@made-in-china.com',
          phone: 7217
        },
        {
          name: '姜　诚',
          num: 2994,
          job: '前端设计师',
          mail: 'jiangcheng-a@made-in-china.com',
          phone: 6580
        }
      ];

  });
