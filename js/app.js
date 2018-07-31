var app = angular.module('storeApp', []);

app.controller('homeCtrl', function($scope, $http) {
  $scope.items = [];
  $scope.limit = 12;
  $scope.fetchProducts = function() {
    $http.get('js/data.json')
      .then(function(data) {
        $scope.productData = data.data;
      });
  }
  $scope.increaseLimit = function() {
    if ($scope.limit < $scope.productData.length) {
      $scope.limit += 4;
    }
  }
  $scope.fetchProducts();
});

app.directive("onScroll", function(){
  return{
    restrict: 'A',
    link: function(scope, elem, attrs){
      angular.element(window).bind('scroll', function () {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            scope.$apply(attrs.onScroll);
        }
      });
    }
  }
});

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);