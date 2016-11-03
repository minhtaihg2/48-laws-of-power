/**
 * Created by taipm on 11/3/2016.
 */
angular.module('starter')
  .controller('MyModalController', ['$scope', function ($scope) {

  $scope.$watch('activeSlide', function (newVal, oldVal) {
    $scope.myActiveSlide = newVal;
  });
  $scope.favoriteLaws = function (item) {
    item.favorite = !item.favorite;
  };

}]);
