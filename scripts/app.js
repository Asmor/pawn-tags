/* exported pawnApp */
"use strict";

var pawnApp = angular.module("pawnApp", []);

pawnApp.controller("pawnAppController", function ($scope) {
	window.scope = $scope;
	$scope.root = window.root;
	$scope.selectedTag = window.root;
	$scope.select = function (tag) {
		$scope.selectedTag = tag;
		$scope.tag = null;
	};
});
