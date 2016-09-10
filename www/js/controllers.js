angular.module('app.controllers', [])

    .controller('tweetCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {

        })
    .controller('homeCtrl',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams, TweetService) {
            TweetService.getTweets().then(function (tweets) {
                console.log(tweets);
                $scope.tweets = tweets;
            });

            $scope.doRefresh = function () {
                TweetService.getNewTweets().then(function (newTweets) {
                    $scope.tweets = newTweets.concat($scope.tweets);
                }).finally(function () {
                    // Stop the ion-refresher from spinning
                    $scope.$broadcast('scroll.refreshComplete');
                });
            };

            $scope.loadMore = function () {
                TweetService.getMoreTweets().then(function (olderTweets) {
                    $scope.tweets = $scope.tweets.concat(olderTweets);
                }).finally(function () {
                    // Stop the ion-infinite-scroll from spinning
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                });
            };
        })

    .controller('settingCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function ($scope, $stateParams) {


        })
