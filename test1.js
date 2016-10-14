describe('PasswordController', function() {
  beforeEach(module('myApp'));
  var $controller;
  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));
  describe('hai', function() {
    it('hooi', function() {
      var $scope = {};
      var controller = $controller('myController', { $scope: $scope });
      expect($scope.text).toEqual('hai');
    });
     it('testAdd', function() {
     var modalInstance = {                    // Create a mock object using spies
        close: jasmine.createSpy('modalInstance.close'),
        dismiss: jasmine.createSpy('modalInstance.dismiss'),
        result: {
          then: jasmine.createSpy('modalInstance.result.then')
        }
      }; 
      var $scope = {};
      var controller = $controller('popupController', { $scope: $scope ,$uibModalInstance:modalInstance});
      $scope.tid="100";
      $scope.tname="abc";
      $scope.addData();
      expect($scope.datas).toContain({tid:"100",tname:"abc"});
    });
     it('testRemove', function() {
      var $scope = {};
      var controller = $controller('myController', { $scope: $scope });
      $scope.tid="100";
      $scope.tname="abc";
      $scope.remove();
      expect($scope.datas).not.toContain({tid:"100",tname:"abc"});
    });


});
}); 