function youtubeService($state) {

  return {
    title: () => $state.current.name
  }

}
/* @ngInject */
export default youtubeService;
