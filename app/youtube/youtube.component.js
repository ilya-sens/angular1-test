import youtubeHtml from './youtube.html';

/* @ngInject */
let youtubeComponent = {
  template: youtubeHtml,
  controllerAs: 'youtube',
  controller: function(youtubeService, $scope) {
    const vm = this;
    vm.albums = [];
    vm.title = youtubeService.title();

    $scope.$watchCollection('vm.albums', ()=>{});
    youtubeService.loadAll().then((result) => {
      vm.albums = result.data;
    }).catch((err) => {
      /* ignore this time */
    })
  }

};
export default youtubeComponent;
