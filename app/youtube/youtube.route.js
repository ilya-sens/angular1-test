function youtubeRoutes($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/youtube');
  $urlRouterProvider.when('/', '/youtube');
  $stateProvider
    .state('youtube', {
      url: '/youtube',
      component: 'youtube'
    })
}
/* @ngInject */
export default youtubeRoutes;
