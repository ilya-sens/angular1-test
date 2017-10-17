function youtubeService($state, $http) {

  return {
    loadAll: () => {
      return $http.get('app/mocks/local.json')
    },
    title: () => $state.current.name
  }

}
/* @ngInject */
export default youtubeService;
