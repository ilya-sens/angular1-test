import albumHtml from './album.html';

/* @ngInject */
let albumComponent = {
  template: albumHtml,
  controllerAs: 'album',
  bindings: {
    album: '=',
  },
  controller: function ($scope) {
    const vm = this;
    vm.album = {};
  }

};
export default albumComponent;
