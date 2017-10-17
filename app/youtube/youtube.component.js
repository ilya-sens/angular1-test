import youtubeHtml from './youtube.html';

/* @ngInject */
let youtubeComponent = {
  template: youtubeHtml,
  controllerAs: 'youtube',
  controller: function(youtubeService) {
    const vm = this;
    vm.title = youtubeService.title();
  }

};
export default youtubeComponent;
