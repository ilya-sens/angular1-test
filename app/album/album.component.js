import albumHtml from './album.html';

/* @ngInject */
let albumComponent = {
  template: albumHtml,
  controllerAs: 'album',
  bindings: {
    album: '<',
  },
  require: {
    myParent: '^youtube'
  },
  controller: function ($scope) {
    const vm = this;
    vm.album = {};
  }

};
export default albumComponent;
