app = angular.module('MAUIChart', [
  'ngRoute',
  'mobile-angular-ui',
  'MAUIChart.controllers.Main',
  'chart.js',
  'mobile-angular-ui.gestures'
]);

app.run(function($transform) {
  window.$transform = $transform;
});

app.config(function($routeProvider,$locationProvider) {
  $routeProvider
  .when('/', {templateUrl: 'home.html', reloadOnSearch: false})
  .when('/line', {templateUrl: 'line.html', reloadOnSearch: false})
  .when('/bar', {templateUrl: 'bar.html', reloadOnSearch: false})
  .when('/barline', {templateUrl: 'barline.html', reloadOnSearch: false})
  .when('/bubble', {templateUrl: 'bubble.html', reloadOnSearch: false})
  .when('/doughnut', {templateUrl: 'doughnut.html', reloadOnSearch: false})
  .when('/dynamic', {templateUrl: 'dynamic.html', reloadOnSearch: false})
  .when('/horizontal', {templateUrl: 'horizontal.html', reloadOnSearch: false})
  .when('/pie', {templateUrl: 'pie.html', reloadOnSearch: false})
  .when('/polar', {templateUrl: 'polar.html', reloadOnSearch: false})
  .when('/radar', {templateUrl: 'radar.html', reloadOnSearch: false});
  $locationProvider.hashPrefix('');
});

app.directive('toucharea', ['$touch', function($touch) {
  // Runs during compile
  return {
    restrict: 'C',
    link: function($scope, elem) {
      $scope.touch = null;
      $touch.bind(elem, {
        start: function(touch) {
          $scope.containerRect = elem[0].getBoundingClientRect();
          $scope.touch = touch;
          $scope.$apply();
        },

        cancel: function(touch) {
          $scope.touch = touch;
          $scope.$apply();
        },

        move: function(touch) {
          $scope.touch = touch;
          $scope.$apply();
        },

        end: function(touch) {
          $scope.touch = touch;
          $scope.$apply();
        }
      });
    }
  };
}]);
