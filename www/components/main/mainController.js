angular.module('starter')
  .controller('MainCtrl', ['$scope', '$ionicModal', '$ionicSlideBoxDelegate','$ionicLoading','$timeout', function ($scope, $ionicModal, $ionicSlideBoxDelegate,$ionicLoading,$timeout) {
    $scope.checked = true;


    $ionicLoading.show({
      content: 'Loading',
      animation: 'fade-in',
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    });
    $timeout(function () {
      $ionicLoading.hide();
      $scope.laws = [
        {
          id: "1",
          images: 'http://ionicframework.com/img/docs/blue-album.jpg',
          title: 'Weezer',
          description: 'Blue Album',
          content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."',
          favorite: true
        },
        {
          id: "2",
          images: 'http://ionicframework.com/img/docs/siamese-dream.jpg',
          title: 'Smashing Pumpkins',
          description: 'Siamese Dream',
          content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."',
          favorite: false
        },
        {
          id: "3",
          images: 'http://ionicframework.com/img/docs/nevermind.jpg',
          title: 'Nirvana',
          description: 'Nevermind',
          content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."',
          favorite: false
        },
        {
          id: "4",
          images: 'http://ionicframework.com/img/docs/license-to-ill.jpg',
          title: 'Beastie Boys',
          description: 'License To Ill',
          content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."',
          favorite: false
        },
        {
          id: "5",
          images: 'http://ionicframework.com/img/docs/dookie.jpg',
          title: 'Green Day',
          description: 'Dookie',
          content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."',
          favorite: false
        },
        {
          id: "6",
          images: 'http://ionicframework.com/img/docs/blue-album.jpg',
          title: 'Weezer',
          description: 'Blue Album',
          content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. "',
          favorite: false
        },
        {
          id: "7",
          images: 'http://ionicframework.com/img/docs/siamese-dream.jpg',
          title: 'Smashing Pumpkins',
          description: 'Siamese Dream',
          content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."',
          favorite: false
        },
        {
          id: "8",
          images: 'http://ionicframework.com/img/docs/nevermind.jpg',
          title: 'Nirvana',
          description: 'Nevermind',
          content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."',
          favorite: false
        },
        {
          id: "9",
          images: 'http://ionicframework.com/img/docs/license-to-ill.jpg',
          title: 'Beastie Boys',
          description: 'License To Ill',
          content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."',
          favorite: false
        },
        {
          id: "10",
          images: 'http://ionicframework.com/img/docs/dookie.jpg',
          title: 'Green Day',
          description: 'Dookie',
          content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."',
          favorite: false
        }
      ];
    }, 1000);
    $ionicModal.fromTemplateUrl('views/shared/modalView.html', {
      scope: $scope,
      animation: 'slide-in-up',
      controller: 'MyModalController'
    }).then(function (modal) {
      $scope.modal = modal;

      $scope.next = function () {
        $ionicSlideBoxDelegate.$getByHandle('burgers').next();
      };
      $scope.previous = function () {
        $ionicSlideBoxDelegate.$getByHandle('burgers').previous();
      };
    });

    $scope.openModal = function (index) {
      $scope.activeSlide = index;
      $scope.modal.show();
    };
    $scope.closeModal = function () {
      $scope.modal.hide();
    };

    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
      $scope.modal.remove();
    });

    $scope.allowNotification = function () {
      $scope.checked = !$scope.checked;
    };

    // Execute action on hide modal
    $scope.$on('modal.hidden', function () {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function () {
      console.log('destroy');
      // Execute action
    });
  }]);
