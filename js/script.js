var myApp=angular.module('myApp', ['ui.bootstrap','pascalprecht.translate']);
// code inside config
myApp.config(function ($translateProvider, $translatePartialLoaderProvider) {
  $translateProvider.useLoader('$translatePartialLoader', {
  urlTemplate: '/i18n/{part}/{lang}.json'
});
});

var datas_array;
// functions of controller
myApp.controller('myController',['$scope','$uibModal','$translatePartialLoader','$translate',function($scope,$uibModal,$translatePartialLoader,$translate){
 $scope.lang_option='en';
 $scope.text="hai";
 $scope.datas=[{tid:"160",tname:"Task 1"},{tid:"161",tname:"Task 2"}];
 datas_array=$scope.datas;
 $translatePartialLoader.addPart('home');
 $translate.refresh();
 $translate.use($scope.lang_option);
 $scope.chang_lang=function(){
   $translate.use($scope.lang_option);
 }
 // function to display popup for adding datas
 $scope.add_popup=function(){
  $scope.tid="";
  $scope.tname="";
  $translatePartialLoader.addPart('popup');
  $translate.refresh();
  $translate.use($scope.lang_option);
  var modalInstance = $uibModal.open({
   templateUrl: 'add.html',
   controller:'popupController',
   resolve: {
    datas_array: function () {
     return $scope.datas;
    }
   }
  });
 }
 // function to remove table data
 $scope.remove=function(ind){
  $scope.datas.splice(ind,1);
 }
}]);



// code inside popupController
myApp.controller('popupController',['$scope','$uibModalInstance',function($scope,$uibModalInstance){
 // function to add data to table
 $scope.datas=datas_array;
 $scope.addData=function(){
  var flag=0;
  if($scope.tid==""||$scope.tname==""||$scope.tid==undefined||$scope.tname==undefined){
   alert("Fill all input fields");
  }
  else{
   angular.forEach($scope.datas,function(value,key){
    if($scope.tid==value.tid){
     flag=1;
    }
   });
   if(flag==1){
    alert("Task Id already present!!!");
    $scope.tid="";
    $scope.tname="";
   }else{
    $scope.datas.push({tid:$scope.tid,tname:$scope.tname});
    $uibModalInstance.dismiss('cancel');
   }
  }
  $scope.tid="";
  $scope.tname="";
  
 }
 $scope.cancel=function(){
  $scope.tid="";
  $scope.tname="";
  $uibModalInstance.dismiss('cancel');
  
 }
}]);