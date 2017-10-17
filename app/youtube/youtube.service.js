function youtubeService($state, $http) {

  return {
    loadAll: () => {
      return $http.get('mocks/local.json')
    },
    title: () => $state.current.name
  }

}
/* @ngInject */
export default youtubeService;
