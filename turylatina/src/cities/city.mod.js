(function (ng) {

	var mod = ng.module("cityModule", ['ui.router']);

	mod.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/cities");

		$stateProvider
			.state('cities', {
				url: "/cities",
				views: {
					'cities': {
						templateUrl: 'src/cities/cities.html',
						controller: 'cityController'
					}
				}
			})

		;
        }]);

})(window.angular);


(function (ng) {

	var mod = ng.module("cityModule");
	mod.constant("cityContext", "api/cities");

	mod.controller('cityController', ['$scope', '$http', 'cityContext', '$state',

        function ($scope, $http, cityContext, $state) {


			$http.get('src/cities/cities.json').then(function (response) {
				$scope.cities = response.data;
			});


        } /*END FUNCTION CONTROLLER*/
    ]); /*END CONTROLLER*/
})(window.angular);
