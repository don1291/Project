import TypesAngular from "https://cdn.skypack.dev/@types/angular@1.8.4";

var app = angular.module("myApp", []);
app.controller("menuCtrl", function ($scope, $http) {
  $http.get("test.php").then(function (response) {
    console.log(response);
    $scope.pies = response.data.pies;
    $scope.cheesecake = response.data.cheesecakes;
    $scope.italian = response.data.italian;
  });
});
