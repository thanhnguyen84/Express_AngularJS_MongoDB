/**
 * Created by Thanhnv on 7/19/2015.
 */
'use strict';
angular.module('myApp', ['ngRoute', 'myApp.myControllers']).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider.
            when('/Angular/Home', {
                templateUrl: '/Angular/Home',
                controller: 'HomeController'
            });
    }]);
