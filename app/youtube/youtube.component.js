import youtubeHtml from './youtube.html';

/* @ngInject */
let youtubeComponent = {
  template: youtubeHtml,
  controllerAs: 'youtube',
  controller: function(youtubeService) {
    const vm = this;
    vm.albums = [];
    vm.title = youtubeService.title();

    youtubeService.loadAll().then((result) => {
      vm.albums = result.data;
    }).catch((ignore) => {
      /* ignore this time */
    })
  }

};
export default youtubeComponent;
